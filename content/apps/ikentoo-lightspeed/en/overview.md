---
position: 1
title: Overview
layout: documentation
meta:
  title: Overview  - iKentoo by Lightspeed
  description: 'iKentoo by LightSpeed EPOS: overview and HubRise integration features.'
gallery:
  - 004-en-2x-main-page.png
  - 005-en-2x-operations-page.png
path_override: /
app_info:
  category: Point of Sales
  availability: Worldwide
  price_range: iKentoo Bridge is included in your HubRise subscription. Contact Lightspeed to enquire about iKentoo pricing.
  website: https://www.lightspeedhq.co.uk
  contact: k-series.support@lightspeedhq.com
---

## Description

iKentoo Bridge is an app developed by HubRise that allows the communication between HubRise and the iKentoo EPOS.

iKentoo is now **Lightspeed K-Series**. For more information, read the [announcement on Lightspeed blog](https://www.lightspeedhq.co.uk/blog/lightspeed-restaurant-k-series/).

## Integration features

iKentoo Bridge can forward any order from HubRise to iKentoo. These orders could come from online ordering solutions, self-ordering kiosks, online food ordering and delivery platforms or any other such solution connected to your HubRise account.

iKentoo Bridge also provides a user interface to see the requests sent to the EPOS and responses received. For more technical details about API requests and related responses, see the [HubRise documentation](/docs/hubrise-logs/).

iKentoo Bridge is a one-way connection from HubRise to the EPOS (push only integration). This means that information only flows from HubRise to the EPOS, not vice versa.

Therefore, iKentoo Bridge cannot transfer the menu from the EPOS to HubRise, which must then be inserted with a manual process in the online ordering system. For more information, see [Mapping EPOS Codes](/apps/ikentoo/mapping-pos-codes). Furthermore, it cannot transfer orders placed on the EPOS back to HubRise.

![Connection Diagram](../images/008-en-2x-connection-diagram.png)

## Why Connect?

Connecting iKentoo to HubRise makes your EPOS and your other apps work as a cohesive whole. Synchronise your menu, your customer and order information with mobile ordering apps, ordering websites, loyalty systems, marketing or business intelligence solutions, delivery services. For more information on HubRise, see the [HubRise User Guide](/docs).

## Prerequisites

To establish the connection, iKentoo Bridge requires:

- A HubRise account set up with the locations to connect. For more information about accounts and locations, see the [HubRise User Guide](/docs/getting-started/#accounts-and-locations).
- The **iKentoo 3.0 by Lightspeed** application installed on your iPad. You can download it from Apple iOS App Store.
- The API connection enabled on your iPad. To verify that iKentoo API is enabled, see [API Activation in the Tablet](/apps/ikentoo-lightspeed/faqs/troubleshooting-failed-orders#api-activation-in-the-tablet).
