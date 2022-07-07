---
title: Why Are My Orders Not Received on HubRise?
position: 4
layout: documentation
meta:
  title: Orders Not Received on HubRise | Deliveroo FAQs | HubRise
  description: Troubleshooting missing orders, when the Deliveroo Bridge configuration is correct, and you do not receive Deliveroo orders on HubRise.
---

When Deliveroo Bridge is configured correctly, and you do not receive Deliveroo orders on HubRise, you may be experiencing one of the following issues.

## Missing Ref Codes

If an item with no ref code is added to an order, Deliveroo will fail to send the entire order, and nothing is received on HubRise.

To solve the issue, make sure that all the products in your Deliveroo menu have a corresponding ref code. To learn how to add ref codes to your Deliveroo products, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).

## Orders Rejected by Deliveroo

When auto-accept is not enabled, every order needs to be accepted manually on the Deliveroo tablet, otherwise it will be rejected by Deliveroo and not received on HubRise.

To avoid this, we recommend to [enable auto-accept](/apps/deliveroo/faqs/auto-accept).
