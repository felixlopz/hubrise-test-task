---
title: Pull the Catalog
position: 6
layout: documentation
meta:
  title: Pull the Catalog | Smood | HubRise
  description: Find out how to pull your HubRise catalog into Smood, how items and options are encoded, and which features are supported.
---

This page explains how you can pull your HubRise catalog into Smood, what information is sent to Smood, and how you can synchronise your inventory.

## Pull Your Catalog

You can pull your HubRise catalog into Smood automatically every time it is updated on HubRise, or pull it manually when needed. As a preliminary step, populate your HubRise catalog.

### Populate a HubRise Catalog

To be able to pull your catalog into Smood, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

### Manual Catalog Pull

Once your catalog is populated on HubRise, you can manually pull it into your Smood restaurant by following these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant.
1. Click the **Settings** tab, then in the **Integrations** section, click **Pull HubRise catalog**.
1. To confirm, click **Yes**.

To understand how the HubRise catalog is mapped to Smood, see the [technical details](#technical-referece-for-catalog-pull).

### Automatic Catalog Pull

Smood can automatically pull your HubRise catalog every time it is updated in HubRise. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant.
1. Click the **Settings** tab, then under the **Integrations** section, click **Edit POS references**.
1. In the **POS Order References Settings** dialog that appears, select the **Enable automatic sync of the catalog** option, then click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.

## Technical Reference for Catalog Pull

The following sections describe in detail how HubRise catalogs are mapped to Smood.

### Categories

HubRise categories are mapped one-to-one with categories on Smood. Smood uses the categories' `name` and `description` fields.

Smood only supports one level of categories. If you use subcategories in your HubRise catalog, these will be mapped to main categories in Smood.

### Products and SKUs

Smood does not support products with SKUs. When you pull your catalog, Smood creates a new product for every HubRise SKU.

For every HubRise SKU, Smood creates a product with the following information:

- `product.name` and `skus.name`: The name of the product. For example, if the HubRise product name is `Pizza margherita` and the SKU name is `8"`, Smood creates a product named `Pizza margherita 8"`
- `product.description`: The description of the product.
- `product.image_ids`: The IDs of the images associated with the product.
- `skus.ref`: The ref code of the SKU, which will be passed along in orders.
- `skus.price`: The price of the SKU.

### Options

For every option list in the catalog, Smood uses the following information:

- `name`: The name of the option list.
- `min_selections` and `max_selections`: The minimum and maximum number of options that can be selected.

For every option in an option list, Smood uses the following information:

- `ref`: The ref code of the option.
- `name`: The option name.
- `price`: The price for a single option.

### Deals

HubRise deals are mapped to products with options in Smood.

### Discounts

Discounts are not imported into Smood. They must be set up in the Smood back office. Unlike deals, existing discounts will not be removed when a new catalog is pulled.

### Charges

Charges are not imported into Smood.

## Synchronise Inventory

Smood can mark your products unavailable based on your HubRise inventory. You can let Smood update the inventory automatically, or update it manually.

Products with a stock of `0` in HubRise will be marked unavailable in Smood, and removed from the menu. When the stock is updated in HubRise, the product will be marked available again.

### Automatic Inventory Update

Smood can automatically update the availability of your products when your inventory is updated on HubRise. By default, this option is turned off. To turn it on, follow these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then under the **Integrations** section, click **Edit POS references**.
1. In the **POS Order References Settings** dialog that appears, select the **Enable automatic sync of the inventory** option, then click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.

### Manual Inventory Update

To manually update your Smood inventory, follow these steps:

1. Log in to your [Smood back office](https://manager.smood.ch/).
1. Select the restaurant for which you want to edit products.
1. Click the **Settings** tab, then in the **Integrations** section, click **Pull HubRise inventory**.
1. To confirm, click **Yes**.
