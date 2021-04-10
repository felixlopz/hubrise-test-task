---
title: Receiving Orders
position: 8
layout: documentation
meta:
  title: Just Eat Takeaway Connection to HubRise - Receiving Orders
  description: Find out the technical details of how orders are sent from Just Eat Takeaway to HubRise, which fields are passed and which are not.
---

Connecting Just Eat Takeaway to HubRise allows you to receive orders directly in your EPOS.
This page describes the information that HubRise receives from Just Eat Takeaway for your orders orders.

## Just Eat Order ID

When a new order is created on HubRise, the Just Eat Takeaway order ID is stored in the `private_ref` field.

## Items and Options

Just Eat Takeaway orders contain the complete information about items and options, including name, POS ref code, quantity, and price. Deals, however, are not supported.

The following sections explain in detail the fields available.

### Items Encoding

For every item in the order, Just Eat Takeaway Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The product name
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item
- `customer_notes`: The preparation notes that the customer added to the item

### Options Encoding

For every option in the order, Just Eat Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value "Options"
- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single item

Every option has single quantity. Multiple identical options are encoded in separate option objects.

## Order Statuses

New Just Eat Takeaway orders are created on HubRise with status `new`. [TODO]

When an order status changes on HubRise, Just Eat Takeaway Bridge notifies Just Eat, and the change can be seen by the customer. The following status updates automatically triggers Just Eat Takeaway Bridge to send a request to inform the platform of the new status.

- `in_preparation`: The order is being prepared in the kitchen.               
- `in_delivery`: The order is out for delivery.                             
- `completed`: The order has been collected or delivered.                               
- `rejected`, `cancelled`, `delivery_failed`: There was a problem with the order. The request body contains information about the error. 

Other HubRise status updates are not supported and do not trigger any request to Just Eat Takeaway.

## Service Types

Just Eat Takeaway supports three service types:

- Delivery by Just Eat Taekaway riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS, which you can set in the Configuration page of the Bridge. For more information about ref codes, see your EPOS documentation in our [apps page](/apps).

## Customer Details

Full customer's details are provided by Just Eat Takeaway for all orders, regardless of the service type. 

Just Eat Takeaway Bridge always includes the customer's details in the `customer` object.

### Customer Name and Email

The customer's name is provided as a single field by Just Eat Takeaway. 
The `first_name` and `last_name` fields are created on HubRise by splitting the full name by the first space character.

An email address is not provided by Just Eat Takeaway, so this field is missing on HubRise.

### Customer Address

For restaurant delivery orders only, Just Eat Takeaway Bridge receives the following information from Just Eat:

- `address_1`: The street and street number
- `city`: The city of the address
- `postal_code`: The postcode of the address
- `phone`: The customer's phone number
- `delivery_notes`: The delivery notes that the customer includes at checkout

## Discounts

The discount applied to the order is passed in a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Discount" by default.
- `ref`: The ref code of the discount. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price_off`: The total amount of the discount.

## Charges

Just Eat Takeaway Bridge encodes information about delivery charge, which can be found in the `charges` array.

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is "Delivery charge" by default.
- `type`: The type of charge. It has always the value `delivery`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

## Customers' Notes

Customers' notes about the order are encoded in the `customer_notes` field.