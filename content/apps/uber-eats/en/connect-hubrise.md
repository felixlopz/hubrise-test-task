---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Uber Eats Connection to HubRise - Instructions
  description: See how to connect your Uber Eats online store to HubRise. Connection is simple. Send the link to your Uber Eats page to HubRise and follow a few steps to connect.
---

Connecting Uber Eats to HubRise can be done with a few simple steps.

## 1. Enable HubRise on Uber Eats

To connect Uber Eats to HubRise, the HubRise team needs to enable HubRise on your Uber Eats account.

Contact us at [support@hubrise.com](mailto:support@hubrise.com) and include the following information:

- The URL link of your Uber Eats store you wish to connect. For example: [https://www.ubereats.com/gb/london/food-delivery/basilico-lavender-hill/tG_8KYb4RkaRPKOmZuERUA](https://www.ubereats.com/gb/london/food-delivery/basilico-lavender-hill/tG_8KYb4RkaRPKOmZuERUA).
- Your HubRise location name and identifier. For example: `Fast Pizza London z6q31-0`.

Within one business day, we will send you the Uber Eats Store UUID needed for the next step.

## 2. Connect the Bridge

---

**IMPORTANT NOTE:** Uber Eats Bridge connects to HubRise at the location level. For more information, see [Locations](/docs/locations/).

---

With your Uber Eats Store UUID in hand, you can now connect the Uber Eats Bridge:

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Uber Eats** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant the Uber Eats Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.
1. A new page asks you to provide your Uber Eats Store UUID. Enter your Store UUID, and click **Save** to complete the connection process.

![Uber Eats store UUID](../images/001-en-store-id.png)

## 3. Configure Your Preferences

After connecting the bridge, you need to configure a few parameters on the Configuration page to send orders correctly to your EPOS.

For more information about the Configuration page and how to navigate to it, see [User Interface](/apps/uber-eats/user-interface/#configuration-page). For details on how to configure the parameters of the Uber Eats Bridge, see [Configuration](/apps/uber-eats/configuration).

## 4. Map Products to Ref Codes

If you use Uber Eats with an EPOS, you need to map all the products in your Uber Eats menu to their corresponding ref codes. This ensures that your EPOS can identify every item correctly.

To learn how to map ref codes on Uber Eats, see [Map Ref Codes](/apps/uber-eats/map-ref-codes).
