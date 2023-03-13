---
title: Push Orders
position: 6
layout: documentation
meta:
  title: Push Orders | App4 | HubRise
  description: Find out the technical details of how orders are sent to App4 from HubRise, which fields are passed and which are not.
---

HubRise can push orders from different connected solutions directly into App4. You just need to connect App4 to HubRise for orders to be sent to your EPOS, with no additional configuration.

This page explains what information HubRise sends to App4.

## Items and Options

HubRise sends to App4 the complete information about items and options, including name, ref code, quantity, and price.

App4 matches items in the order by ref code. If the ref code is missing or incorrect, App4 displays an item with the name and price from the HubRise order.

If there is a price mismatch, App4 always uses the price in the HubRise order.

## Deals

When App4 receives a deal from HubRise, it displays the deal name next to the items in the deal.
The ref code of the deal is ignored.

## Discounts

App4 supports discounts in a HubRise order. However, only the total discount amount is shown, while the discount ref code is ignored.

## Order Status

App4 notifies HubRise when an order is accepted or rejected.
Additionally, App4 notifies HubRise when an order is ready.

## Payments

App4 always assumes that HubRise orders are paid online.

## Service Types

App4 supports all three service types: delivery, collection, and eat-in.
The ref code of the service type is added to the order notes.

## Customer Information

HubRise sends to App4 the complete customer information, when available, including name, email address, and delivery address.
However, App4 does not match the customer ID, when available, with an existing customer in the App4 database.
