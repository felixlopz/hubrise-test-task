---
title: Configuration
position: 3
layout: documentation
meta:
  title: Aquila Connection to HubRise Configuration
  description: Instructions on how to configure Aquila for optimal connection to HubRise and other platforms.
---

Once your Aquila site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in HubRise, some configuration on the Aquila side may be needed. This is particularly true for the connection with an EPOS.

To properly process orders from Aquila to your EPOS, product codes are required for each and every item included in the Aquila **Catalog**.

Products and their POS codes can be set up from in the Aquila backend using the main menu on the left, by navigating to **Catalog**, then selecting **Products**. Once a product is created, the POS Code cannot be changed. If a change of POS Code is required, a new product with the new POS Code must be created and the old one deleted.

Your Aquila menu can either be created directly in Aquila, or imported from the EPOS as described in [Catalog Import](/apps/aquila/configuration/#catalog-import). To properly process orders from Aquila to your EPOS, product codes are required for all products.

----------

**IMPORTANT NOTE**: It is important that each POS code field available in Aquila be mapped with the EPOS product codes. If the POS code is missing, the EPOS will not be unable to correctly process the order.

----------

The POS codes in Aquila can be updated in two ways: manually by creating a new product in Aquila's back office, or imported from the EPOS through a HubRise Catalog import.


## Catalog Import
The catalog is imported automatically when you [connect your Hubrise account](/apps/aquila/connect-hubrise).
Manual catalog import is not available.

## Product Mapping
It is possible to add products manually in Aquila. Setting the POS code is done during the product creation.
To create a new product manually: 

1. In Aquila back office, navigate to **Catalog** > **Products**.
1. In the top right corner press the **+ NEW** button.
1. This brings up the New Product menu. Select the applicable product type, whether it is Simple, Composé or Dématerialisé. Press **Submit**.
1. Under **General** > **General informations**, the first item, **Code** is the POS Code.


Changing an existing product's POS Code is not possible, if a change is needed, a new product must be created, or the catalog re-imported.

## Deals & Discounts Mapping
Deals are not supported in Aquila. 
Discount codes are available in Aquila.

## Payment Methods Mapping
Payment methods define how customers can pay for their orders.

## Service Types Mapping
Service types define how orders are handled such as Delivery, Collection and Eat-In.

## Charges Mapping
Delivery charges might apply and they can be handled in Aquila.

## Catalog Export
Catalog Export is not supported in Aquila.




