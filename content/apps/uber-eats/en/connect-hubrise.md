---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Uber Eats Connection to HubRise - Instructions
  description: See how to connect your Uber Eats online store to HubRise. Connection is simple. Send the link to your Uber Eats page to HubRise and follow a few steps to connect.
---

To connect Uber Eats to HubRise, the Uber Eats team needs to enable HubRise on your account.

Don't worry, HubRise will take care of the paperwork for you! For more information on how to enable HubRise on your Uber Eats account, check our [FAQ](/apps/uber-eats/faqs/request-uber-eats-api-activation/).

## Connect the Uber Eats Bridge to HubRise

---

**IMPORTANT NOTE:** The Uber Eats Bridge connects to HubRise at the location level. For more information about accounts and locations on HubRise, see the [documentation](https://www.hubrise.com/docs/getting-started/#accounts-and-locations).

---

To connect the Uber Eats Bridge to HubRise, follow these steps.

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Uber Eats** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant the Uber Eats Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.

You have now connected the Uber Eats Bridge to your location on HubRise. The next step is configure the connection.

## Enter your Uber Eats Store UUID

Now that you have connected Uber Eats Bridge to your location on HubRise, a new page asks you to provide your Uber Eats Store UUID.

![Uber Eats store UUID](../images/001-en-store-id.png)

---

**IMPORTANT NOTE:** If you don't have a Uber Eats Store UUID already, follow the steps in our [FAQ](/apps/uber-eats/faqs/request-uber-eats-api-activation/) to obtain one.

---

Once you are finished, click **Save** to complete the connection process.

## Configure the Uber Eats Bridge

After connecting the Uber Eats Bridge to HubRise, you need to configure its behaviour from the Configuration page. You need to provide a few parameters that are needed to correctly send orders to your EPOS.

For more information about the Configuration page and how to navigate to it, see [User Interface](/apps/uber-eats/user-interface/#configuration-page). For details on how to configure the parameters of the Uber Eats Bridge, see [Configuration](/apps/uber-eats/configuration).

## Map Products to Ref Codes

If you connect HubRise to your EPOS, you need to make sure that all the products in the Uber Eats menu are mapped to their corresponding ref code. This ensures that orders are correctly processed once they are sent to your EPOS.

To learn how to map ref codes on Uber Eats, see [Map Ref Codes](/apps/uber-eats/map-ref-codes).

## Place Test Orders

Before you start receiving orders from real customers, we recommend that you test the whole integration workflow.
Placing a few test orders on Uber Eats and confirming that they are correctly received on your EPOS is useful to spot possible issues before going live.
