---
title: Map Ref Codes
position: 5
layout: documentation
meta:
  title: Map Ref Codes | PixelPoint Bridge | HubRise
  description: Instructions on mapping the PAR PixelPoint EPOS product ref codes with other apps after connecting your EPOS with HubRise. Synchronise your data.
---

PixelPoint Bridge can push orders but is not able to pull the menu stored in the PAR PixelPoint EPOS. For this reason, all menu items and prices must be manually set in the system to connect with their corresponding product code and ensure a smooth communication between HubRise and PixelPoint.

Every order received in HubRise is forwarded to the EPOS via PixelPoint Bridge. For the transaction to work, products within the catalog, service types (delivery, collection, eat-in) and payment methods should be mapped.

## Products and SKUs

Each product in PAR PixelPoint is identified by its product code. This code appears in the top right corner of the product's edit screen.

PixelPoint has no support for SKUs, so PixelPoint product code is used as the SKU code.

## Options

PixelPoint does not differentiate between products and options. The option ref code in HubRise is the product code of the corresponding product in PixelPoint.

## Deals

Deals in HubRise are combos in PixelPoint. Combos are a particular type of product that contains a list of products and/or options.

The ref code of a deal is the product code of the combo in PixelPoint. It appears in the top right corner of the combo's edit screen.

![Combo in PixelPoint](../images/005-en-coupon-code.png)

## Discounts

Discounts in HubRise are coupons in PixelPoint.

The ref code of a discount is the product code of the coupon in PixelPoint. You can find this code in the top right corner of the coupon's edit screen.

## Service Types

Each service type (delivery, collection, eat-in) must be associated with the correct PixelPoint EPOS code. The exact values of these codes depend on the particular setup of the restaurant, but they are typically numbers in the `1000`-`1010` range. Contact your PAR representative to get the correct values.

## Payment Methods

PixelPoint has a different code for each payment method. Each payment method allowed in the system to connect must be defined in the PixelPoint EPOS and must be specified with the corresponding code. Contact your PAR representative to get the correct values.

TODO: When the customer chooses to pay upon delivery or collection, no payment information is sent to the EPOS, as doing so would close the transaction.
