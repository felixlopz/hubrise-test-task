---
title: User Interface Walkthrough
position: 3
layout: documentation
meta:
  title: Deliveroo Bridge main page
  description: The Deliveroo Bridge main page and how to read logs.
---

From the main page of the Deliveroo Bridge, you can access the configuration settings of the app and read the logs of all the transactions between HubRise and Deliveroo.

## Main page

The central portion of the page displays a list of all the recent API exchanges between HubRise, Deliveroo Bridge and Deliveroo.

At the top right corner of the main page, you can click on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> to expand the menu. From there, you can select the language of the page and access the configuration page. For more details on how to customise the behaviour of the Deliveroo Bridge, check the [Configuration Page](/apps/deliveroo/configuration).

## Order page

Selecting an order from the list will display all the logs of the API requests exchanged between HubRise and Deliveroo via the Deliveroo Bridge.

Requests are ordered with the latest on top, and each of them displays the following information:

- **TIME**: The date and time the order was placed.
- **DIRECTION**: The apps sending and receiving the request, in the format Origin → Destination.
- **STATUS**: The status of the request. The value OK indicates that the request has been successfully received, otherwise a message will explain the type of error occurred. Clicking on a request will expand it to reveal the detailed logs of the request and its response. 

Logs are a powerful debugging tool in case of issues. To understand in detail how to read logs, see the [HubRise documentation](/docs/hubrise-logs/).
