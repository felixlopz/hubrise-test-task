---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | Smood | HubRise
  description: Instructions on connecting Smood with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

Connecting Smood to HubRise can be done with a few steps.

---

**IMPORTANT NOTE:** If you do not have a HubRise account yet, register on our [Signup Page](https://manager.hubrise.com/signup). It only takes a minute! 

---

## 1. Enable HubRise on Smood

As a first step, the HubRise integration must be enabled on your Smood account.

Contact the Smood support team at [integrations@smood.ch](mailto:integrations@smood.ch) and include the following information in your email:

- The URL link to your restaurant page on the Smood website. For example: [https://www.smood.ch/fr/livraison-retrait/stores/payerne/pizzaphone-payerne](https://www.smood.ch/fr/livraison-retrait/stores/payerne/pizzaphone-payerne).
- Your HubRise location name and identifier. For example: `Fast Pizza Baker Street z6q31-0`.

With this information in hand, the Smood team will enable the HubRise connection for your store.


## 2. Connect Smood

---

**IMPORTANT NOTE:** Smood connects to HubRise at the location level. For more information, see [Locations](/docs/locations/).

---

To connect Smood to HubRise, follow these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant that you want to connect from the dropdown menu.
1. Click the **Settings** tab, then in the **Integrations** section, click **Connect to HubRise**.
1. In the dialog that appears, [configure the connection parameters](#configure-your-parameters).
1. To confirm, click **Save**. You are then redirected to the HubRise back office.
1. Select the HubRise location and catalog that you want to connect, then click **Next**.

## 3. Configure Your Parameters

Before you establish your connection with HubRise, you need to configure a few parameters on the **POS Order References Settings** page to send orders correctly to your EPOS.

Refer to your connected EPOS documentation for more details on the parameters to use.
For example, if you use Lightspeed, see the [Lightspeed documentation](/apps/lightspeed-restaurant/food-ordering-platforms#smood).

## 4. Map Products Ref Codes

Each product in Smood needs to have a corresponding ref code. This ensures that your EPOS can identify every item correctly.

You can [manually edit the ref codes](/apps/smood/map-ref-codes) of your products in Smood, or [automatically import your HubRise catalog](/apps/smood/push-catalog) in Smood.
