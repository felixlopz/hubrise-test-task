---
position: 1
title: Overview
layout: documentation
meta:
  title: HubRise iKentoo Bridge Overview
  description: Details the use and functionality of the iKentoo Bridge.
gallery:
  - 004-en-2x-main-page.png
  - 005-en-2x-operations-page.png
path_override: /
app_info:
  category: Point of Sales
  availability: Worldwide
  price_range: Included in your HubRise subscription
  website: https://www.ikentoo.com
  contact:
---

## Description

iKentoo Bridge is an app developed by HubRise that allows the communication between HubRise and the iKentoo iPad POS via its Web API. iKentoo Bridge can forward any order from HubRise to the POS. These orders could come from online ordering solutions, self-ordering kiosks, online food ordering and delivery platforms or any other such solution connected to your HubRise account.

iKentoo Bridge also provides a user interface to see the requests sent to the POS and responses received. For more technical details about API requests and related responses, see the [HubRise documentation](/docs/hubrise-logs/).

iKentoo Bridge is a one-way connection from HubRise to the POS (push only integration). This means that information only flows from HubRise to the POS, not vice versa.

Therefore, iKentoo Bridge cannot transfer the menu from the POS to HubRise, which must then be inserted with a manual process in the online ordering system. For more information, see [Mapping POS Codes](/apps/ikentoo/mapping-pos-codes). Furthermore, it cannot transfer orders placed on the POS back to HubRise.

![Connection Diagram](../images/008-en-2x-connection-diagram.png)

## Prerequisites

To establish a successful connection with your iKentoo iPad POS, iKentoo Bridge requires:

- iKentoo account with configured business location.
- iKentoo by Lightspeed application installed to your iPad. 
- The HubRise account setup with locations to connect. For more information about accounts and locations, see the [HubRise User Guide](/docs).