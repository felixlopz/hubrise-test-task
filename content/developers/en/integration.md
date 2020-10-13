---
title: Integration
position: 3
layout: documentation
meta:
  title:
  description:
---

## Overview

This document provides all the information you need to integrate your solution with HubRise.

Some general best practices are applicable to most integrations. But we know that every solution is different, so we will give specific suggestions for different types of case scenarios (online ordering platforms, EPOS solution, etc).

### Let Us Help You!

First of all, we are very excited about the new integration you are going to develop!

But we will not just wait and see while you do the work: We will actively help you during the process. Here is what HubRise will do for you:

- We will offer your team free support during the integration phase. If you need help, just write to integration@hubrise.com, and we will respond in a few business hours (not days, or weeks).
- We will assess the integration you have done by checking the logs in the HubRise back office and filling-in the Integration Sheet.
- We will then schedule a call with the integration engineer to finalise the assessment together. The call usually takes an hour and a half. We will then write a report with our recommendations.

### Assessing the Integration

When your integration is ready, we will review it with you based on our [Integration Sheet](https://docs.google.com/spreadsheets/d/1df-QRlD9h8M58bpFoFaCEzU5pbmYSeHXOLqIVip9-5s/edit?usp=sharing).

In this way, we will know exactly what your integration can and cannot do, and we will be able to document it thoroughly.

### Documenting the Integration

Once your integration is completed and assessed, we will document it and include it in our [Integrated Apps](/apps) page, as we did in the past with other integrations (like dotdigital, PAR PixelPoint, LivePepper, Zelty, to name a few).

This is good for your SEO and ours. It also helps maximising transparency by showing exactly what your integration does.

## General Best Practices

When you start developing your integration, some smart choices at the beginning can save you time and effort along the way. Here are a few suggestions.

### Create a Support Alias for HubRise

When you create a HubRise account for your integration, use an email alias such as <support@your-solution.com>, with an email forward to your support team. In this way, all your support team will be able to access the HubRise logs for debugging purposes.

You can then provide access to your HubRise account to as many individual users as you want (such as <alice@your-solution.com> or <bob@your-solution.com>).

### Scope and Permission

When you first create your integration client, you should typically connect to HubRise at the location level and request only the level of permission your integration needs. In the majority of cases, you should request `write` permission for orders and `read` or `write` permission for customers.

In more advanced scenarios where you read or modify the catalog of products, your solution should request `read` or `write` permission for the catalog, as well.

For more information about scopes, see [OAuth scopes](/developers/authentication#oauth-scopes).

### Connection Workflow

You should provide your users with an easy way to connect your solution to HubRise. The recommended approach is a button in the back office that allows connection with a single click via the OAuth protocol.

Once a user establishes a connection with HubRise, you should display all the relevant information about the account:

- Location name and ID
- Catalog name and ID
- Customer list name and ID

Once connected, your solution should provide an equally easy way to disconnect from HubRise. This will greatly improve the user's experience.

### Managing Order and Customer IDs

Mapping IDs between your solution and HubRise is critical to retrieve orders and customers.

Ideally, you should store in your database the HubRise IDs associated with orders and customers, for example by including additional fields in your API model. In this case, you should also display the HubRise IDs in your user interface.

If storing the HubRise IDs is not an option, you can use the HubRise `private_ref` field to store your order and customer ID, instead. In this way, you essentially let HubRise do the mapping.

### Handling Images

When uploading product images to HubRise (for example, if you export your catalog), remember that the size limit is 1 Mb.
Your integration should prevent or at least warn users when they try to upload big images (more than 1000px high or wide). Doing so only slows down catalog import/export, without any real benefit, since third party websites and tools generally scale down images anyway.

An app using images should always perform image scaling, rather than relying on other apps to send images with reasonable size.

HubRise supports various image formats: jpeg, png, gif and bmp. We recommend using jpeg for photos, and png for "low entropy" images (text, diagrams, simple drawings, etc).

## Online Ordering Solutions

Connecting your online ordering solution to HubRise will allow your clients to receive orders and customers directly to their EPOS systems. Here are a few suggestions to help you during the implementation.

### Establishing and Managing the Connection

We recommend that you follow our general best practices and connect to HubRise at the location level.

You should also register an active callback to listen to order update events. This will allow your application to inform a user whenever the status of an order is changed on HubRise, for example when it is accepted or cancelled by the EPOS. For more details about callbacks, see our [Developers documentation](https://www.hubrise.com/developers/api/callbacks/#callbacks).

**Main suggestions**

- Choose the `location[orders.write, customer_list.write]` scope.
- Include `catalog.read` or `catalog.write` permissions only if your solution handles catalogs.
- Register an active callback with the `"order": ["update"]` event.
- See [Connection Workflow](#connection-workflow) for other best practices on managing your solution's connection.

### Pushing Customers to HubRise

If users can create an account on your solution, you should push their details to HubRise as soon as they register.
More generally, every time users update their details, you should update them on HubRise, as well.

You should also anonymise customers immediately if they request so, or if they have been inactive for a certain period of time (for example, 3 years). This is a legal requirement in the EU under GDPR regulations. For more details, see [Anonymize customer](https://www.hubrise.com/developers/api/customer-management/#anonymize-customer).

**Main suggestions**

- Send a `POST /customer_lists/:customer_list_id/customers` request with the customer's details as soon as they register.
- Send a `PATCH /customer_lists/:customer_list_id/customers/:id` request when customers update their online profile.
- Anonymise customers with a `POST /customer_lists/:customer_list_id/customers/:customer_id/anonymize` request when needed.

### Pushing Orders

You should push new orders to HubRise as soon as they are created by the user. However, wait for payment confirmation first, if the order is paid online.

If you have registered users, you should include their `customer_id` in the payload and update their details just before pushing the order. If you do not have registered users (for example, for self ordering kiosks or orders via a tablet at the table), you can include the customer's details directly in the order payload with a so-called "guest order". For more information, see [Order's Customer](/developers/api/order-management/#order-s-customer).

If your solution supports order status, you should update it whenever you receive an order update callback.

When you need to test that orders are pushed to HubRise correctly, you can connect OrderLine to your HubRise account. This free app allows you to receive and manage in real time your HubRise orders. For more details on this app, see the [OrderLine documentation](/apps/orderline/).

**Main suggestions**

- Send a `POST /location/orders` request as soon as orders are placed on your system, but after payment confirmation for online payments.
- Send a `PATCH /customer_lists/:customer_list_id/customers/:id` request just before pushing the order.
- Include the `customer_id` in the payload, if your users can register; otherwise, create guest orders.
- Update the order status after an `order.update` callback.
- Connect OrderLine to receive test orders.

### Pulling the Catalog

HubRise offers advanced catalog functionalities. We recommend that you implement a feature to pull catalogs from HubRise to your solution. This will simplify the onboarding of new users and reduce issues with the menu.

Your solution can automatically pull the catalog when this is updated on HubRise (via a `catalog.update` callback), or you can implement a button in your back office for a manual import. Even better, you could let your users decide the preferred behaviour via a setting in your back office.

When you import a catalog from HubRise, make sure you save the ref codes for all the products, options, charges, etc. You should include them in the payload when you push an order. This is very important because some EPOS systems will not recognise products without a ref code correctly.

**Main suggestions**

- Implement catalog import from HubRise in your solution.
- Support both automatic and manual import, then let the user decide the preferred behaviour.
- Save the ref codes for all the items and pass them in the order's payload.

## EPOS Solutions

Connecting your EPOS solution to HubRise will allow you to receive orders from multiple integrated partners, including many popular food delivery platforms. You can also take your customers management to a higher level with the various marketing and loyalty solutions integrated with HubRise.

Here are a few suggestions to help you during the implementation.

### Establishing and Managing the Connection

We recommend that you follow our general best practices and connect to HubRise at the location level.

You should also register an active callback to listen to order events. This will allow your application to receive new orders from HubRise and status updates. For more details about callbacks, see our [Developers documentation](/developers/api/callbacks/#callbacks).

**Main suggestions**

- Choose the `location[orders.write, customer_list.write]` scope.
- Include `catalog.read` or `catalog.write` permissions only if your solution handles catalogs.
- Register an active callback with the `"order": ["create","update"]` event.
- See [Connection Workflow](#connection-workflow) for other best practices on managing your solution's connection.

### Receiving Orders and Updating Their Status

Registering an active callback is the recommended way to receive new orders. As an alternative, use a passive callback to fetch new events at regular intervals.

When you process the payload, bear in mind the following rules:

- Support E.164 encoding for phone numbers.
- Do not reject orders if prices or ref codes are wrong.

For other tips and suggestions, check our [Integration Sheet](https://docs.google.com/spreadsheets/d/1df-QRlD9h8M58bpFoFaCEzU5pbmYSeHXOLqIVip9-5s/edit?usp=sharing).

If you need to inject new orders in HubRise to test your solution, you can use curl or [Postman](https://www.postman.com/). If you are using a callback, you must create a different client on HubRise to inject orders. For more details, see our [Quick Start Guide](/developers/quick-start)

**Main suggestions**

- Use an active callback to receive new orders (recommended). Alternatively, use a passive callback to poll new events.
- Do not use a `GET /location/orders` request to fetch new orders, as this approach is not scalable in production.
- Use curl or Postman to inject test orders.

### Updating Orders

You should acknowledge new orders by updating their status to "received". This will let the online ordering solution know that the order is on its way.
HubRise supports a detailed range of order statuses: use them whenever possible to update the order. For more details, see [Order Status](/developers/api/order-management/#order-status).

If possible, you should update the confirmed delivery time of the order on HubRise, so that the customer can be notified.

**Main suggestions**

- Update the status of a new order to "received" to acknowledge reception.
- Use other statuses like "accepted", "rejected", etc., when this makes sense.
- Update the confirmed delivery time, when this is available.

### Uploading the catalog to HubRise

HubRise offers advanced catalog functionalities. Pushing the catalog from your EPOS solution to HubRise can simplify the onboarding of new users and reduce issues with the menu. For more details about catalogs on HubRise, see our [API Reference](/developers/api/catalog-management/).

When you push the catalog, you should encode the following information:

- Categories
- Products and skus
- Options
- Deals
- Discounts
- Charges
- Ref codes for all of the above
- Images, as described in [Handling Images](#handling-images).

For more information on encoding requirements on HubRise, see our [Integration Sheet](https://docs.google.com/spreadsheets/d/1df-QRlD9h8M58bpFoFaCEzU5pbmYSeHXOLqIVip9-5s/edit?usp=sharing).

### Sending local orders and customers to HubRise

When you take orders directly on your EPOS system at your restaurant, we recommend that you also push them to HubRise.
In this way, you will benefit from all the integrated apps already available on your HubRise account, such as delivery management solutions, marketing solutions, digital receipts and digital payments on the customer smartphone, kitchen displays, etc.

Encode the following information when you upload an order to HubRise. See also our [Integration Sheet](https://docs.google.com/spreadsheets/d/1df-QRlD9h8M58bpFoFaCEzU5pbmYSeHXOLqIVip9-5s/edit?usp=sharing).

- Products and skus (names and ref codes).
- Options (names and ref codes). Multiple identical options should be encoded as separate individual objects.
- Deals (names and ref codes) and deal line labels.
- Discounts (names and ref codes).
- Charges (names and ref codes).
- Payments (names and ref codes). You should always pass at least one payment.
- Service type (names and ref codes).
- Customer id, if the order is associated with a customer.
- Times, encoded in the timezone of the store. Expected delivery times should always be in the future or `null`.
