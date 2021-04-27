---
title: Why Are My Orders Not Received on HubRise?
position: 2
layout: documentation
meta:
title: Orders Not Received | Deliveroo FAQs | HubRise
description: If you think your Deliveroo Bridge configuration is correct, and you still do not receive orders from Deliveroo, there might be products with missing ref codes in your menu.
---

In some cases, your Deliveroo Bridge configuration might be correct but you may still not be able to receive orders from Deliveroo. When a new order is sent from Deliveroo to HubRise, no new row is created in the orders page of Deliveroo Bridge, and no error message appears in the logs.

The issue might be related to missing ref codes in your Deliveroo menu. If an item with no ref code is added to a Deliveroo order, in fact, Deliveroo fails to send the entire order, and nothing is received on HubRise.

To solve the issue, make sure that all the products in your Deliveroo menu have a corresponding ref code. To learn how to add ref codes to your Deliveroo products, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).
