---
title: Send Orders
position: 5
layout: documentation
meta:
  title: Send Orders | Smood | HubRise
  description: Find out the technical details of how orders are sent from Smood into HubRise, which fields are passed and which are not.
---

When you connect Smood to HubRise, your orders are automatically sent to HubRise. Then HubRise sends them to your EPOS or any other solution connected to HubRise.

This page describes the information Smood sends in orders.

## Items, Options

Smood includes the complete information about items, including name, ref code, quantity, and price.

Orders also contain the complete information about options, including name, option list name, price, quantity, and ref code.

## Deals, Discounts

Customers can use two types of discounts in Smood: **Restaurant discounts** and **Smood discounts**. Restaurant discounts are configured by the restaurant in the Smood back office, whereas Smood discounts are 

Only restaurant discounts are sent to HubRise. They are either sent as `deals` (for discounts applied to a set of items, such as a menu) or as `discounts` (for discounts applied to the whole order, for example a 10% discount).

Since Smood does not natively support deals, it uses products and options to represent deals. For example, a menu is represented as a product, and its items are represented as options. The price of the menu is the sum of the prices of the product and its options.

Smood discounts are included in the final price of the items, but not sent as separate `deals` or `discounts` to HubRise.

## Order Statuses

Order status updates flow from Smood to HubRise, and from HubRise to Smood.
Status updates synchronisation is supported for the following statuses and in the following cases:

- `cancelled`: when the customer cancels the order.
- `in_preparation`: when the status is updated from the restaurant tablet.
- `awaiting_shipment` and `awaiting_collection`: when the status is updated from the restaurant tablet, depending on the service type.
- `in_delivery`: when a Smood driver picks up the order.
- `completed`: when the restaurant completes the order on the Smood tablet, or when the driver marks the order as delivered on the mobile app.

Smood always notifies HubRise about the cancellation of an order. The other status updates are only synchronised if the **Enable automatic sync of status from Smood to HubRise** option is enabled in the [Configuration page](/apps/smood/configuration#synchronisation-settings).

## Service Types

Smood sends to HubRise the information about the service type and service type ref. You can customise the service types ref codes in the [Configuration page](/apps/smood/configuration).

## Customer Details

Smood provides full customer's details for all orders. However, Smood sends the customer information in the order ("guest order"), but does not synchronise customer information to HubRise.

## Discounts and Charges

Smood provides information about discounts and delivery charges, if present, including the ref codes defined in the [Configuration page](/apps/smood/configuration).

## Payments

Smood sends to HubRise the payment amount and the payment ref code defined in the [Configuration page](/apps/smood/configuration#payments).

## Collection Code

Smood provides the individual collection code for the order in the `collection_code` field of the payload.
