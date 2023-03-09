---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | PixelPoint Bridge | HubRise
  description: See instructions to configure PixelPoint Bridge to work seamlessly with your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of PixelPoint Bridge based on your preferences.
These are divided into different sections for an easier navigation.

![PixelPoint Bridge configuration page](../images/003-en-configuration.png)

## Order Statuses

From this section, you can configure how PixelPoint Bridge handles order statuses.

The **Status for new orders** field lets you configure which default status is associated to new orders when they are sent to your PixelPoint EPOS. At the moment, **Received** is the only supported value.

The rest of this section allows you to configure how order status changes on your PixelPoint EPOS are sent back to HubRise, by leveraging the EOIEvents feature in PAR PixelPoint. This is useful, for example, to notify a delivery platform when an order is ready for collection. In this case, you can update an order as "Awaiting collection" on HubRise whenever you mark the same order as "Pick-up" on your EPOS.

---

**IMPORTANT NOTE:** EOIEvents require PAR PixelPoint version 19.6.x or higher. Contact PAR support to verify.

---

## Deals

PixelPoint Bridge converts HubRise deals to combos.

- The **Use ref codes as combo item ids** option is here for legacy reasons. We do not recommend using it.
- The **Aggregate combo prices** option is useful if you want to aggregate the prices of all items at the combo level, instead of leaving each item with its own price.

## Discounts

PixelPoint Bridge converts HubRise discounts to coupons.

Discounts that lack a ref code are not sent to your PixelPoint EPOS. PixelPoint Bridge provides two ways to deal with discounts with no ref code:

1. If you specify a ref code in the **Default ref code** field, all orders containing a discount without a ref code will use this value.
1. If you select the **Fetch missing ref codes from PixelPoint catalog** checkbox, PixelPoint Bridge will fetch the list of discounts currently available in your EPOS, and match the incoming discount by name, instead of ref code.

If you both specify a default ref code and select the checkbox, PixelPoint Bridge will perform the following actions for each discount without a ref code:

- Try to match the discount name with the discounts available in your EPOS. If a match is found, PixelPoint Bridge will send the discount with the correct ref code to your EPOS.
- If no match is not found, PixelPoint Bridge will use the default ref code that you specified.

---

**IMPORTANT NOTE:** Fetching discount ref codes from your EPOS requires PAR PixelPoint version 19.12.x or higher. Contact PAR support to verify.

---

## Reset the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your integration settings. To continue sending orders to your PixelPoint EPOS, you will need to enter your PixelPoint token again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
