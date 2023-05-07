---
title: Pull Orders
position: 7
layout: documentation
meta:
  title: Pull Orders | Smood | HubRise
  description: Find out the technical details of how orders are pulled from Smood into HubRise, which fields are passed and which are not.
---

Connecting Smood to HubRise allows you to receive orders directly in your EPOS or any other solution connected to your HubRise account.

This page describes the information that HubRise receives from Smood for your orders.

## Items, Options, and Deals

Smood orders contain the complete information about items, including name, POS ref code, quantity, and price.
Orders contain the complete information about options, including name, option list name, price, quantity, and ref code.
Deals are also supported.

## Order Statuses

Order status updates flow from Smood to HubRise, and from HubRise to Smood.
Status updates synchronisation is supported for the following statuses and in the following cases:

- `cancelled`: when the customer cancels the order.
- `in_preparation`: when the status is updated from the restaurant tablet.
- `awaiting_shipment` and `awaiting_collection`: when the status is updated from the restaurant tablet, depending on the service type.
- `in_delivery`: when a Smood driver picks up the order.
- `completed`: when the restaurant completes the order on the Smood tablet, or when the driver marks the order as delivered on the mobile app.

Smood always notifies HubRise about the cancellation of an order. 
For all the other order updates, you can turn on and off the automatic synchronisation of status updates by following these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
2. Select the restaurant for which you want to edit products.
3. Click the **Settings** tab, then under the **Integrations** section, click **Edit POS references**.
4. In the **POS Order References Settings** dialog that appears, select the **Enable automatic sync of status from Smood to HubRise** option, then click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.

## Service Types

Smood sends to HubRise the information about the service type and service type ref.
You can customise the ref codes for your service types in the **Settings** page of your Smood back office. 

## Customer Details

Smood provides full customer's details for all orders. However, Smood sends the customer information in the order ("guest order"), but does not synchronise customer information to HubRise.

## Discounts and Charges

Smood provides information about discounts and delivery charges, if present, including the ref code that you specify in the **Settings** page of your Smood back office.

## Payments

Smood sends to HubRise the payment amount and the payment ref code that you specify in the **Settings** page of your Smood back office.
Smood supports only online payments.

## Collection Code

Smood provides the individual collection code for the order in the `collection_code` field of the payload.
