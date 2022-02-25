---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | Just Eat Takeaway | HubRise
  description: See how to connect your Just Eat Takeaway online store to HubRise. Connection is simple. Send the link of your Just Eat Takeaway page to HubRise and follow a few steps to connect.
---

Connecting Just Eat Takeaway to HubRise can be done with a few simple steps.

---

**IMPORTANT NOTE:** If you don't already have a HubRise account, start by registering on the [HubRise Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Enable HubRise on Just Eat Takeaway

As a first step, you need to contact your Just Eat Takeaway support and ask them to activate the API integration for your stores. Include [support@hubrise.com](mailto:support@hubrise.com) and your Just Eat account manager in the email recipients. Include the following information in your email:

> - The API workflow you want to activate: **POSAPI**
> - The POS system you want to connect: **HubRise**
> - The type of connection to set up: **Primary**
> - The URL link to your restaurant store on the Just Eat website. For example: [https://www.just-eat.ch/en/menu/blaqk-2](https://www.just-eat.ch/en/menu/blaqk-2).
> - Your HubRise location name and identifier. For example: `Fast Pizza Baker Street z6q31-0`.
>
> We need the Just Eat Takeaway identification code to finalise the connection. We also need access to the Just Eat Takeaway back office to enter product ref codes autonomously.


With this information in hand, Just Eat Takeaway will enable the HubRise integration for your store and provide you with the Just Eat Takeaway identification code, for example: `8736550`. You need this ID to connect the Just Eat Takeaway Bridge to HubRise.

## 2. Map Product Ref Codes

Most apps require a ref code for each product to identify every item and process orders correctly. As a result, each item on your Just Eat Takeaway menu should have a corresponding product ref code. For more information, see [Map Ref Codes](/apps/just-eat-takeaway/connect-hubrise).

## 3. Connect the Bridge

---

**IMPORTANT NOTE:** Just Eat Takeaway Bridge connects to HubRise at the location level. For more information, see [Locations](/docs/locations/).

---

To connect Just Eat Takeaway Bridge to HubRise, follow these steps.

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Just Eat Takeaway Bridge** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant Just Eat Takeaway Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.
1. A new page asks you to provide your Just Eat Takeaway Restaurant ID. Enter the ID, then click **Save** to complete the connection process.

![Just Eat Takeaway Restaurant ID](../images/001-en-jet-restaurant-id.png)

## 4. Configure Your Preferences

After connecting the bridge, you need to configure a few parameters on the Configuration page to send orders correctly to your EPOS.

For more information about the Configuration page and how to navigate to it, see [User Interface](/apps/just-eat-takeaway/user-interface/#configuration-page). For details on how to configure the parameters of Just Eat Takeaway Bridge, see [Configuration](/apps/just-eat-takeaway/configuration).

