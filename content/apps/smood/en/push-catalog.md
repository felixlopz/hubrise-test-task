---
title: Push the Catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Smood | HubRise
  description: Find out how to push your HubRise catalog to Smood, how items and options are encoded, and which features are supported.
---

This page explains how you can push your HubRise catalog to Smood, what information is sent to Smood, and how you can synchronise your inventory.

## Push Your Catalog

You can push your HubRise catalog to Smood automatically every time it is updated on HubRise, or push it manually when needed.
As a preliminary step, populate your HubRise catalog.

### Populate a HubRise Catalog

To be able to push your catalog into Smood, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

### Manual Catalog Push

Once your catalog is populated on HubRise, you can manually push it to your Smood store by following these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then in the **Integrations** section, click **Pull HubRise catalog**.
1. To confirm, click **Yes**.

To understand how the HubRise catalog is mapped to Smood, see the [technical details](#technical-referece-for-catalog-push). 

### Automatic Catalog Push

You can automatically push your HubRise catalog into Smood every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then under the **Integrations** section, click **Edit POS references**.
1. In the **POS Order References Settings** dialog that appears, select the **Enable automatic sync of the catalog** option, then click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.

## Technical Reference for Catalog Push

The following sections describe in detail how HubRise catalogs are mapped to Smood.

### Categories

HubRise categories are mapped one-to-one to categories of products on Smood. The category name and description are sent to Smood.
However, Smood supports only one level of categories—if you use subcategories in your HubRise catalog, these are mapped to categories on Smood. 

### Products and Skus

Smood does not support products with skus. When you push your catalog, Smood creates a new product for every HubRise sku.

For every HubRise sku, Smood creates a product with the following information:

- `product.name` and `skus.name`: The name of the product. For example, if the HubRise product name is `Pizza margherita` and the sku name is `8"`, the Smood product name is `Pizza margherita 8"`. Smood uses a similar mapping for all the other skus in the product.
- `product.description`: The description of the product.
- `product.image_ids`: The IDs of the images associated with the product.
- `skus.ref`: The ref code of the sku, which will be passed along in orders.
- `skus.price`: The price of the sku.

### Options

For every option list in the catalog, Smood uses the following information:

- `name`: The name of the option list.
- `min_selections` and `max_selections`: The minimum and maximum number of options that can be selected from the list.

For every option in an option list, Smood uses the following information:

- `ref`: The ref code of the option.
- `name`: The option name.
- `price`: The price for a single option.

### Deals and Discounts

HubRise deals are mapped to products with options in Smood.

## Synchronise Inventory

Smood lets you update the inventory counters of your Smood products based on your HubRise inventory.
You can let Smood update the inventory automatically, or update it manually.

### Automatic Inventory Update

Smood can automatically update your inventory every time it is updated on HubRise.
By default, this option is turned off. To turn it on, follow these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then under the **Integrations** section, click **Edit POS references**.
1. In the **POS Order References Settings** dialog that appears, select the **Enable automatic sync of the inventory** option, then click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.

### Manually Update Inventory Availability

To manually update your Smood inventory, follow these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then in the **Integrations** section, click **Pull HubRise inventory**.
1. To confirm, click **Yes**.
