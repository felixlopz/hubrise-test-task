---
title: Receiving Orders
position: 5
layout: documentation
meta:
  title: Just Eat Connection to HubRise - Receiving Orders
  description: Find out the technical details of how orders are sent from Just Eat to HubRise, which fields are passed and which are not.
---

Connecting Just Eat to HubRise allows you to receive Just Eat orders directly in your EPOS.
This page describes the information that HubRise receives from Just Eat for your orders.

## Just Eat Order ID

When a new order is created on HubRise, the Just Eat order ID is stored in the `private_ref` field.

## Items and Options

Just Eat orders contain the complete information about items and options, including name, POS ref code, quantity, and price. Deals, however, are not supported on Just Eat.

Customers' comments on single products are not provided by Just Eat. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Just Eat menu, so that they are correctly encoded.

The following sections explain in detail the fields available.

### Items Encoding

For every item in the order, Just Eat Flyt Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The product name
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item

### Options Encoding

For every option in the order, Just Eat Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value "Options"
- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

Every option has single quantity. Multiple identical options are encoded in separate option objects.

## Order Statuses

New Just Eat orders are created on HubRise with status `new`.

When an order status changes on HubRise, Just Eat Flyt Bridge notifies Just Eat, and the change can be seen by the customer. The following status updates automatically triggers Just Eat Flyt Bridge to send a request to Just Eat.

- When the status changes to `accepted` or `received`: The Bridge sends an "order successful" request to Just Eat, and the order is confirmed on the platform.
- When the status changes to `rejected` or `cancelled`: The Bridge sends an "order failed" request to Just Eat, and the order is cancelled on the platform.

Other HubRise status updates are not supported and do not trigger any request to Just Eat.

## Service Types

Just Eat supports three service types:

- Delivery by Just Eat riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS, which you can set in the Configuration page of the Bridge. For more information about ref codes, see your EPOS documentation in our [apps page](/apps).

## Customer Details

The customer's details provided by Just Eat depend on the service type for the order. 
- For orders delivered by the restaurant, Just Eat sends the full customer details, including name and address.
- For pick-up orders, only the name is provided.
- For orders delivered by Just Eat, only the driver's information is provided.

Therefore, Just Eat Flyt Bridge never creates customers on HubRise for Just Eat orders, but always includes the customer's details in the `customer` object, when they are available.

### Customer Name and Email

The customer's name is provided in the `first_name` and `last_name` fields. A customer might decide to leave blank one of the two fields, so this might remain empty in the payload.

The default placeholder `customer@email.hidden` is used to populate the `email` field for all customers.

### Customer Address

For restaurant delivery orders only, Just Eat Flyt Bridge receives the following information from Just Eat:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.
- `phone`: Just Eat support number. Note: This is not the customer's phone number.
- `delivery_notes`: The delivery notes that the customer includes at checkout.

## Discounts

Discounts are not supported on Just Eat, and no information is provided in the API.

## Charges

Just Eat Flyt Bridge encodes two types of charges: Delivery charge, and service surcharge.

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is "Delivery charge" by default.
- `type`: The type of charge. It has always the value `delivery`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

### Just Eat Surcharge

Just Eat applies a fixed surcharge to all the orders. 

The available fields in the payloads are the following:

- `name`: The name of the charge, which is "Service charge" by default.
- `type`: The type of charge. It has always the value `other`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the small order surcharge.
