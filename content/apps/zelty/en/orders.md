---
title: Orders
position: 4
layout: documentation
meta:
  title: HubRise Order Reception on the Zelty EPOS
  description: Informs users on how to receive orders on the Zelty EPOS in the context of an integration with HubRise.
---

Once HubRise is connected to Zelty and ref codes have been mapped, no further steps are needed. Your Zelty EPOS will receive automatically all orders sent to HubRise by other apps.

## Receive Orders

When you receive a new order in your EPOS, a notification will appear, and the order will be available in the order list.

To view the order list:

1. Navigate to **Tableau de bord** (Dashboard.)
1. Click on **Statistiques** (Statistics).
1. Select the **Tickets** tab (Ticket).

If you have correctly connected Zelty to HubRise and mapped all EPOS ref codes on other apps but orders are not automatically received, and you would like to investigate why, see [Troubleshooting](/apps/zelty/troubleshooting). You can also check logs on every transaction in HubRise. For more information, see our HubRise user guide [Logs](/docs/data/#logs).

## Order Data

When the customer chooses to pay upon delivery or collection, no payment information should be sent to the Zelty EPOS, as doing so would close the transaction.
