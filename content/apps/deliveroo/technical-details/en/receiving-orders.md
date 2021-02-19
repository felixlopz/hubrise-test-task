---
title: Receiving Orders
position: 1
layout: documentation
meta:
  title: Receiving Orders - Deliveroo
  description: Find out the technical details of how orders are sent from Deliveroo to HubRise, which fields are passed and which are not.
---

Connecting Deliveroo to HubRise allows you to receive Deliveroo orders directly in your EPOS.
This page describes the information that is passed by Deliveroo Bridge for the orders you receive.

## Items and Options

Deliveroo never provides the products and options names in their API.
This means that products and options in a Deliveroo order can only be identified by their ref code.

Therefore, your EPOS solution should not rely on product and option names to parse the incoming orders.
Also, make sure that products and options in your Deliveroo menu are mapped to the correct EPOS ref code. For more details, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).

Customers' comments on single products are not provided by Deliveroo API. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Deliveroo menu, so that they are correctly encoded.

### Items Encoding

For every item in the order, Deliveroo Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The placeholder for the product name, in the format "Product `sku_ref`"
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order.
- `options`: The array of options attached to the item.

### Options Encoding

For every option in the order, Deliveroo Bridge provides the following information:

- `option_list_name`: The default value is "Options"
- `ref`: The ref code of the option
- `name`: The placeholder for the option name, in the format "Option `sku_ref`"
- `price`: The price for a single item

Every option has single quantity. Multiple identical options are encoded in separate option objects.

## Order Statuses

A Deliveroo order goes through several statuses during its lifecycle.

Changes to the order status originating from Deliveroo are reflected in HubRise in the following way:

- New orders are created on HubRise with status `new`.
- When an order is cancelled on Deliveroo, it is automatically marked as `cancelled` on HubRise.

When an order status changes on HubRise, Deliveroo Bridge notifies Deliveroo and the change is reflected in the tablet. The supported status values are the following:

- `accepted`: The order has been accepted by the EPOS, and is confirmed on Deliveroo.
- `in_preparation`: The order is in the kitchen.
- `awaiting_collection`: The order is ready for pickup by the customer or the rider.
- `completed`: The order has been collected by the customer or the rider.

Other HubRise status values are not supported and are not sent on Deliveroo.

## Service Types

Deliveroo supports three service types:

- Delivery by Deliveroo riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS. For more information, see your EPOS documentation in our [apps page](/apps).

## Customer Details

Deliveroo never provides the customer's full name and email address in their API. It only provides the customer's address for orders delivered by the restaurant.

Therefore, Deliveroo Bridge never creates customers in HubRise for Deliveroo orders, but always includes the customer's details directly in the order.

### Customer Name and Email

Customer's name and email for Deliveroo orders have these default values for all types of orders:

- `first_name`: Deliveroo
- `last_name`: Order
- `email`: orders@deliveroo.com

### Customer Address

For restaurant fulfilled orders only, Deliveroo Bridge retrieves the following information from Deliveroo:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.
- `phone`: Deliveroo support number. Note: This is not the customer's phone number.
- `delivery_notes`: The access code to identify the order when calling Deliveroo support and the delivery notes left by the customer, in the format "Phone access code: `access_code`. `note`".

## Discounts

The discount applied to the order is passed in a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Discount" by default.
- `ref`: The ref code of the discount. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price_off`: The total amount of the discount.

## Charges

Deliveroo Bridge encodes two types of charges: Delivery charges, and small order surcharges.

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is "Delivery charge" by default.
- `type`: The type of charge. It has always the value `delivery`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

### Small Order Surcharges

Small order surcharges, applied when the total price for an order is below the minimum order price.

The available fields in the payloads are the following:

- `name`: The name of the charge, which is "Surcharge" by default.
- `type`: The type of charge. It has always the value `other`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price`: The total amount of the small order surcharge.

## Customers' Notes

Customers' notes about the order are encoded in the `customer_notes` field.
