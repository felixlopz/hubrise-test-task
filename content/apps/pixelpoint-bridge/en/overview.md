---
title: Overview
position: 1
layout: documentation
meta:
  title: Overview | PixelPoint Bridge | HubRise
  description: PixelPoint Bridge overview, reasons for connecting it to HubRise and summary of integrated features. Synchronise data between your EPOS and your apps.
gallery:
  - 005-en-2x-pixelpoint-bridge-view.png
  - 006-en-2x-pixelpoint-bridge-view-log-open.png
path_override: /
app_info:
  category: Point of Sales
  availability: Worldwide
  price_range: Included in your HubRise subscription
  website: https://www.hubrise.com/apps
  contact: contact@hubrise.com
---

## Description

PixelPoint Bridge is an app developed by HubRise that allows the communication between HubRise and the PAR PixelPoint EPOS via its Web API. PixelPoint Bridge can forward any order from HubRise to the EPOS. These orders could come from online ordering solutions, self-ordering kiosks, online food ordering and delivery platforms or any other such solution connected to your HubRise account.

PixelPoint Bridge also provides a user interface to see the requests sent to the EPOS and responses received. For more technical details about API requests and related responses, see [Understanding Logs](/apps/pixelpoint-bridge/understanding-logs).

PixelPoint Bridge is a one-way connection from HubRise to the EPOS (push only integration). This means that information only flows from HubRise to the EPOS, not vice versa.

Therefore, PixelPoint Bridge cannot transfer the menu from the EPOS to HubRise, which must then be inserted with a manual process in the online ordering system. For more information, see [Mapping Ref Codes](/apps/pixelpoint/map-ref-codes). Furthermore, it cannot transfer orders placed on the EPOS back to HubRise.

![Connection Diagram](../images/001-en-2x-connection-diagram.png)

## Prerequisites

To establish a successful connection with your PAR PixelPoint EPOS, PixelPoint Bridge requires:

- PixelHQ and PixelPoint version 12.3 or above.
- The API token provided by the PAR PixelPoint support team.
- The HubRise account setup with locations to connect. For more information about accounts and locations, see the [HubRise User Guide](/docs).
