---
title: Pull Orders
position: 5
layout: documentation
meta:
  title: Pull Orders | App4 | HubRise
  description: HubRise can pull orders from App4. Find out the technical details of how local orders are received, which fields are passed and which are not.
---

HubRise can pull orders from your App4 store, which can then be sent, for example, to a connected EPOS.
This page explains what information App4 sends to HubRise.

## Information Received in HubRise

The following sections describe which information about App4 orders is received in HubRise.

### Items and Options

HubRise receives the complete information about items and options, including name, ref code, quantity, and price.

For table orders, App4 sends to HubRise a new order every time the order is updated at the restaurant.

### Order Statuses

App4 sends new orders to HubRise marking them with the `New` status. Status updates on HubRise are immediately reflected on App4.

### Payments

App4 sends to HubRise the complete information about the payment in a local order, including name, ref code, and amount.

### Service Types

The service type and service type ref are included in the order. To specify the service type ref for your store, contact the App4 support.