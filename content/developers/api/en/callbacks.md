---
title: Callbacks
position: 8
layout: documentation
meta:
  title: Callbacks | API | HubRise
  description:
---

A **callback** notifies a client of changes that occurred on a set of resources. It can be used to monitor orders, customers, locations or catalogs.

There are 2 types of callbacks:

- An **active callback** is a URL set up on your server which HubRise calls every time an event occurs. If the URL is not immediately available, HubRise makes a couple more attempts a few minutes later.

- A **passive callback** records events but does not send them. The client needs to poll HubRise regularly (every minute or so) to retrieve new events.

---

**IMPORTANT NOTE**: A client does not receive notifications for the events it generated. If you are testing callbacks, you need to use a separate client to trigger events.

---

Active callbacks receive a POST HTTP request each time an event occurs.

The body of the request includes the resource and event types, the id of the affected resource, the timestamp of the event, and in some cases, the previous and new values of the resource. The JSON is identical to the response of the `GET /callback/events/:id` request, and is described in greater detail in the [Retrieve Event](#retrieve-event) section.

See an example of a customer update event:

```json
POST https://your-domain.com/hubrise_callback
Body:
{
  "id": "ks8f6",
  "resource_type": "customer",
  "event_type": "update",
  "created_at": "2020-06-25T11:43:51+02:00",
  "customer_id": "ve343",
  "customer_list_id": "sdakm",
  "previous_state": {
    "id": "jdj9v",
    "email": "tom@dummy-mail.org",
    ...
  },
  "new_state": {
    "id": "jdj9v",
    "email": "jim@dummy-mail.org",
    ...
  },
}
```

The callback must return a `200` HTTP code to acknowledge the reception of the event. This return code makes HubRise delete the event. If the callback fails to acknowledge the event, HubRise attempts to resend it later. In the meantime, unacknowledged events remain accessible through `GET /callback/events`.

If you use an active callback, we recommend that you check the authenticity of each event. The verification relies on computing the hexadecimal HMAC digest of the event request body. Here is a sample script in Ruby:

```ruby
require "openssl"

client_secret = "your_client_secret"
payload = request.raw_body

digest = OpenSSL::Digest.new('sha256')
calculated_hmac = OpenSSL::HMAC.hexdigest(digest, client_secret, payload)
```

The same script in Javascript, using Node's `crypto` lib:

```javascript
import { createHmac } from "crypto"

client_secret = "your_client_secret"
payload = req.rawBody

const calculatedHmac = createHmac("sha256", client_secret).update(payload).digest("hex")
```

Compare the calculated HMAC to the value in the `X-HubRise-Hmac-SHA256` header of the event notification. If they match, then you can be sure that the event was sent from HubRise. Otherwise, simply return an error and ignore the event.

## 1. Callbacks

A callback is specific to a connection. A connection can only have one callback.

### 1.1. Retrieve Callback

Returns the connection's callback details, including the URL and the types of events the callback listens to.

<CallSummaryTable
  endpoint="GET /callback"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback`

```json
{
  "url": "https://<<YOUR DOMAIN HERE>>/hubrise_callback",
  "events": {
    "order": ["create", "update"]
  }
}
```

The `url` field is set for active callbacks only. A null `url` identifies a passive callback.

If no callback has been set, the response will be as follows:

`GET /callback`

```json
{
  "url": null,
  "events": {}
}
```

### 1.2. Create or Update Callback

Creates a callback if none exists, replace the existing callback otherwise.

<CallSummaryTable
  endpoint="POST /callback"
  accessLevel="location, account"
/>

#### Request parameters:

| Name     | Type   | Description                                                                                  |
| -------- | ------ | -------------------------------------------------------------------------------------------- |
| `url`    | string | The URL called when an event occurs. Leave it null for a passive callback.                   |
| `events` | map    | A map with the keys being _resource type_ and the values being the *event type*s to monitor. |

- _resource type_ is one of: `order`, `customer`, `location`, `catalog` and `inventory`.
- _event type_ is one of: `create`, `update` and `patch`.

The allowed combinations are:

- `order.create`
- `order.update`
- `customer.create`
- `customer.update`
- `location.update`
- `catalog.create`
- `catalog.update`
- `inventory.patch`
- `inventory.update`

#### Example request:

`POST /callback`

```json
{
  "url": "https://<<YOUR DOMAIN HERE>>/hubrise_callback",
  "events": {
    "order": ["create"],
    "customer": ["create"]
  }
}
```

### 1.3. Delete Callback

Unregister the connection's callback.

HubRise will no longer trigger events or call the callback URL.

<CallSummaryTable
  endpoint="DELETE /callback"
  accessLevel="location, account"
/>

## 2. Events

### 2.1. Retrieve Event

Returns an event by its id.

<CallSummaryTable
  endpoint="GET /callback/events/:event_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback/events/ks8f6`

```json
{
  "id": "ks8f6",
  "resource_type": "customer",
  "event_type": "update",
  "created_at": "2020-06-25T11:43:51+02:00",
  "customer_id": "ve343",
  "customer_list_id": "sdakm",
  "previous_state": {
    "first_name": "Thomas",
    ...
  },
  "new_state": {
    "first_name": "Tom",
    ...
  }
}
```

The returned event contains:

- The id of the event.
- The resource type, eg. `order`, `customer`, `catalog`, ...
- The event type, which is one of: `create`, `update`, `patch`, and `delete`.
- The time when the resource modification occurred.
- The ids of the affected resource and its parent resources.
- The state of the resource, before and/or the modification, when applicable.

The state(s) of the resource included in the event depends on the resource and the event types, due to semantic and performance reasons:

- The `new_state` field is only present for `create` and `update` event types.
- The `previous_state` field is only present for `update` and `delete` event types.
- Catalog events contain no state fields, for any event type.
- Inventory events only contain a state field for `patch` event type. In this case, the field is named `state_change` and it contains the list of changes.

When an event affects a catalog or an inventory, you will need to send a `GET` request to the HubRise API to retrieve the full state of the resource.

### 2.2. List Events

Returns the events that have not been acknowledged (ie deleted).

<CallSummaryTable
  endpoint="GET /callback/events"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback/events`

```json
[
  {
    "id": "ks8f6",
    "created_at": "2020-06-25T11:43:51+02:00",
    "resource_type": "customer",
    "event_type": "update",
    "customer_list_id": "sdakm",
    "customer_id": "ve343"
  },
  ...
]
```

The previous and new states are not included to save bandwidth. Individual retrieve operations must be performed if states are needed.

### 2.3. Delete Event

Deletes (ie acknowledges) a callback event

A passive callback should always delete events after retrieval or they will keep on being pulled by the [List events](#22-list-events) operation.

<CallSummaryTable
  endpoint="DELETE /callback/events/:event_id"
  accessLevel="location, account"
/>

#### Example request:

`DELETE /callback/events/ks8f6`
