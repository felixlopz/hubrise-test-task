---
title: Send Orders
position: 5
layout: documentation
meta:
  title: Send Orders | Smood | HubRise
  description: Find out the technical details of how orders are sent from Smood into HubRise, which fields are passed and which are not.
---

When you connect Smood to HubRise, your orders are automatically sent to HubRise, then to your EPOS or any other solution connected to HubRise.

This page describes the information Smood sends in orders.

## Items, Options, and Deals

Smood includes the complete information about items, including name, ref code, quantity, and price.

Orders also contain the complete information about options, including name, option list name, price, quantity, and ref code.

Deals are also supported.

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
