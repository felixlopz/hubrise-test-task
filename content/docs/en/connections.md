---
title: Connections
position: 4
layout: documentation
meta:
  title: HubRise Connections
  description: How connections to HubRise can be managed.
---

From Connections, you can connect new apps and see apps connected to your HubRise Account.

Apps are connected either with a HubRise Account or Location depending on the app. Typically EPOS or Online Ordering System will connect to a Location, while marketing solutions connect to either the Account or Locations.

## Connecting a New App

To connect a new app to your HubRise Account:

1. Log in to HubRise from the [HubRise Login page](https://manager.hubrise.com/login).
2. Click **CONNECTIONS** on the left navigation panel.
3. Select **View available apps**.
4. Select the app you want to install.
5. Follow the instructions for the specific app. When installing a new app, you will be required to grant the app access to your HubRise Account.

## Open An App

Some apps can be accessed from HubRise. If so, you can open the app by clicking the **CONNECTIONS** tab and selecting **Open** for the specific app. The app will open in a new browser window.

![Connect an App.](../images/011-connections-open-app.webm)

## View App Activity

To display a line chart with the number of transactions made in the last 30 days, select **CONNECTIONS > Actions > View Activity**. This is a handy way to see if transactions are going through the connection.

![Display activity for a connected app.](../images/012-connections-display-activity.webm)

## View App Logs

Logs are stored for each app that has been connected with your Account. These logs are used to understand the communications between systems and detect issues. To view logs for an app, select **CONNECTIONS** > **Action** > **View logs** for the specific app.

Logs record the requests from an app to HubRise. Each request is a transaction between an app and HubRise - an order, a new customer registered, or any other communication between an app and HubRise.

At the top, the log page displays general information that are common to all requests, such as:

- **Access token**: The token used by the app to authenticate to HubRise.
- **Scope**: The margins of the request such as whether the request is targeted at the Account level or Location level, what read/write access it is performing on data, etc.
- **Customer list** and **Catalog**: Depending on the Scope, additional lines can display the ID for the resources that have been granted access to, such as the customer list and the catalog.

The log page then displays a summary list of requests in reverse chronological order.

Each log record includes:

- **Date\*\***: \*\*The date and time of the request.
- **Resource**: The target of the request.
- **Method**: The HTTP method used in communicating the request.
- **Path**: The URL path for the request.
- **Response**: The HTTP response codes.

For more information on log files and their structure, see the [HubRise API Reference page](https://www.hubrise.com/fr/api/general-concepts/). For a complete reference on API requests in HubRise see [Understanding Logs in HubRise: Introduction to API Requests](https://www.hubrise.com/developers/understandinglogs/#introduction-to-api-requests).

Logs can be filtered by resource and method through the following process:

1. Select **Edit**.
2. Select the resources and methods that you want to display. To view all log records, uncheck all resources and methods, or click **Reset**.

To view the full details of a logged request:

1. Click the request to display.
2. A full list of the query and response will be displayed.
3. To download either the query or response, select the download icon ![Download icon.](../images/download.png). The selected query or response will be provided as a JSON file.

For more information on logs, see [Understanding Logs in HubRise](https://www.hubrise.com/developers/understandinglogs).

![Log details.](../images/013-connections-view-logs.webm)

## Disconnect App

Apps can be disconnected from your HubRise Account by selecting **CONNECTIONS > Actions**. Find the app in question, then click **Disconnect**.

![Remove connection to an app.](../images/014-connections-remove-app.webm)
