---
title: Pull Orders
position: 10
layout: documentation
meta:
  title: Pull Orders | Lightspeed Restaurant | HubRise
  description: HubRise can pull orders from Lightspeed Restaurant EPOS. Find out the technical details of how local orders are received, which fields are passed and which are not.
---

HubRise can pull orders from your Lightspeed Restaurant EPOS as soon as they are paid for.

This page explains how to enable this feature and what information is sent to HubRise.

## Enable Pull Orders

To start pulling Lightspeed orders into HubRise, you need to activate this feature from the Configuration page of Lightspeed Restaurant Bridge, first. Follow these steps.

1. From the Lightspeed Restaurant Bridge main page, click the arrow <InlineImage width="20" height="20">![Arrow icon](../images/001-arrow.jpg)</InlineImage> at the top right corner of the page to expand the menu, then click **Configuration**.
1. From the **Pull orders from Lightspeed** section, select the **Enabled for paid sales** option.
1. Click **Save** to confirm.

![Enable the feature to pull local Lightspeed orders to HubRise from the configuration page of Lightspeed Restaurant Bridge](../images/014-en-configuration-page.png)

Lightspeed Restaurant Bridge fetches new orders every 30 seconds.

---

**IMPORTANT NOTE:** Only closed orders, that is, orders that have been paid for in the EPOS, are currently pulled into HubRise. Support for open orders will be added soon, as well.

---

## Information Received in HubRise

The following sections describe which information about Lightspeed orders is received in HubRise.

### Items and Options

Lightspeed Restaurant Bridge receives the complete information about items and options, including name, EPOS ref code, quantity, and price.

Information about the course number is not received in HubRise.

### Order Statuses

Orders are created in HubRise with the default status `accepted`.

### Payments

Lightspeed Restaurant Bridge receives the complete information about the payment in a local order, including name, EPOS ref code, and amount.

### Service Types

All local orders are created in HubRise as eat in orders. Lightspeed Restaurant Bridge uses the service type ref code corresponding to eat in orders in Lightspeed, when available.

### Additional Information

Lightspeed Restaurant Bridge receives additional information about the local order, such as the table number and the time the order was paid for.
