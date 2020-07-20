---
position: 1
title: Overview
layout: documentation
meta:
  title: PixelPoint Overview
  description: Details the use and functionality of PixelPoint and PixelPoint Bridge to manage online and retail stores.
gallery:
  
path_override: /
app_info:
  category: Point of Sales
  availability: 
  price_range: 
  website:
  contact:
---

## Description

PixelPoint Bridge is an app developed by HubRise that allows the communication between HubRise and the PAR PixelPoint EPOS. Via PixelPoint Bridge, HubRise can forward any order coming from online ordering solutions to the EPOS, self-ordering kiosks, food aggregators or any other solution connected to your HubRise account.

PixelPoint Bridge also provides a user interface to see the requests sent to the EPOS and responses received. For more technical details about API requests and related responses, see [Understanding Logs](/apps/pixelpoint/understanding-logs).

PixelPoint Bridge is a one-way connection from HubRise to the EPOS (push-only integration). This means that information only flows from HubRise to the EPOS, not vice versa. 

Therefore, PixelPoint Bridge cannot transfer the menu from the EPOS to HubRise, which must then be inserted with a manual process in the online ordering system. For more information, see [Configuration](/apps/pixelpoint/mapping-pos-codes). Furthermore, it cannot transfer orders placed on the EPOS back to HubRise. 

![Connection Diagram](../images/001-en-2x-connection-diagram.png)

## Prerequisites

To establish a successful connection with your PAR PixelPoint EPOS, PixelPoint Bridge requires:

* **PixelHQ** and **PixelPoint version 12.3** or above.

* The **API** token provided by the PAR PixelPoint support team.

* The **HubRise account** setup with locations to connect. For more information about accounts and locations, see the [HubRise documentation](/developers).

