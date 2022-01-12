---
title: Apps and Connections
position: 5
layout: documentation
meta:
  title: Apps and Connections | HubRise
  description: How connections to HubRise can be managed.
---

You can connect new apps and see apps connected to your HubRise Account from the **CONNECTIONS** page.

Apps are connected either with a HubRise Account or Location, depending on the app.
For example, EPOS or online ordering systems typically connect to a Location, while marketing solutions connect to either the Account or Locations.

---

**Related FAQ**: <Link to="/docs/faqs/what-app-can-i-connect-to-hubrise/">What App Can I Connect to HubRise?</Link>

---

## Connect a New App

To connect a new app to your HubRise Account:

1. Log in to HubRise from the [HubRise Login page](https://manager.hubrise.com/login).
1. Click **CONNECTIONS** on the left navigation panel.
1. Select **View available apps**.
1. Select the app you want to install.
1. Follow the instructions for the specific app. When installing a new app, you will be required to grant the app access to your HubRise Account.

If you need to connect multiple instances of the same app to a single HubRise location, see [Connecting Multiple Instances of the Same App](/docs/faqs/connect-multiple-instances-same-app).

## Open An App

Some apps can be accessed from HubRise. If so, you can open the app by clicking on **CONNECTIONS** and selecting **Open** for the specific app. The app will open in a new browser window.

<video controls title="Connect an App">
  <source src="../images/011-en-connections-open-app.webm" type="video/webm"/>
</video>

## View Connection Activity

To display a line chart with the number of transactions made in the last 30 days, select **CONNECTIONS** > **Actions** > **View Activity**. This is a handy way to see if transactions are going through the connection.

<video controls title="Display activity for a connected app">
  <source src="../images/012-en-connections-display-activity.webm" type="video/webm"/>
</video>

---

**Related FAQ**: <Link to="/docs/faqs/check-connection-between-my-system-and-hubrise/">How Do I Check If the Connection Between My System and HubRise Is Working?</Link>

---

## View Connection Logs

Logs are stored for each app that has been connected. You can use logs to understand the communications between systems and detect issues.

To view logs for a connection, select **CONNECTIONS** > **Action** > **View logs** for the specific app.

Logs record the requests from an app to HubRise. Each request is a transaction between an app and HubRise, such as an order, a new customer registration, or any other communication between an app and HubRise.

![HubRise Connection logs](../images/050-en-2x-connection-logs.png)

### General Information

At the top, the log page displays general information about the connection:

- **Access token**: The token used by the app to authenticate to HubRise.
- **Scope**: The connection permissions, such as whether the connection can access the Account or a single Location, what read/write access it has on the data, etc.
- **Customer list** and **Catalog**: Depending on the Scope, additional lines can display the ID for the resources that have been granted access to, such as the customer list and the catalog.

![HubRise General Information logs](../images/051-en-2x-general-information-logs.png)

### Filter

Logs can be filtered by resource and method through the following process:

1. Select **Edit**.
1. Select the resources and methods that you want to display. To view all log records, uncheck all resources and methods, or click **Reset**.

![HubRise Connection filter](../images/052-en-2x-filter-logs.png)

### Logs

The logs page displays a summary list of requests in reverse chronological order.

Each log record includes:

- **Date**: The date and time of the request.
- **Resource**: The target of the request.
- **Method**: The HTTP method used in communicating the request.
- **Path**: The URL path for the request.
- **Response**: The HTTP response code.

You can see additional details by clicking on a log, including the request and the corresponding response.
To download either the request or response, select the download icon <InlineImage width="15" height="14">![Download icon](../images/058-download.png)</InlineImage>. The selected request or response will be provided as a JSON file.

For more information, see [Understanding Logs in HubRise](/docs/hubrise-logs). For a complete reference on the HubRise API, see the [HubRise API Reference page](/developers/api/general-concepts).

---

**Related FAQ**: <Link to="/docs/faqs/check-connection-between-my-system-and-hubrise/">How Do I Check If the Connection Between My System and HubRise Is Working?</Link>

---

## Disconnect App

To disconnect a specific app from HubRise, follow these steps:

1. Go to **CONNECTIONS**.
2. Find the app you want to disconnect, then click **Actions** > **Disconnect**.
3. Click **Confirm**.