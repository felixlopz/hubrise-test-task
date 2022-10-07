---
title: Push the Catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Shopify | HubRise
  description: Find out how to push your HubRise catalog to Shopify, how items and options are encoded, and which features are supported.
---

You can use Shopify Bridge to push your HubRise catalog directly into your Shopify store with a single click.

This page explains how you can push your catalog and what information is sent to Shopify.

## Populate a HubRise Catalog

To be able to push your catalog into Shopify, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

## Push the Catalog

Once your catalog is populated on HubRise, you can publish it on your Shopify store by following these steps.

1. Log in to your HubRise account.
1. Select the location connected with your Shopify store.
1. Select **Shopify Bridge** from the list of connected apps.
1. From the Shopify Bridge operations page, click the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> in the top right corner of the page to expand the menu, then click **Configuration**.
1. On the configuration page, from the **Actions** section at the bottom of the page, select **Push the catalog**.

When you push your catalog to Shopify, only new products are added. Your existing Shopify products are neither updated nor replaced.

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to Shopify.

### Categories

Shopify does not support categories. When you upload HubRise products to Shopify, they will not be divided into separate categories.

### Products and Skus

HubRise products and skus are mapped one-to-one to Shopify products and variants.
For more information about products in HubRise catalogs, see [Products](/developers/api/catalog-management/#products).

For every HubRise `product` object, Shopify Bridge sends the following information to Shopify:

- `name`: The name of the product
- `description`: The description of the product
- `tags`: The tags associated with the product
- `image_ids`: The IDs of the images associated with the product
- `skus`: The list of skus attached to the product

For every sku in the `skus` array, Shopify Bridge sends the following information to Shopify:

- `ref`: The ref of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalog-management/#skus).

### Options

Options are not supported on Shopify. The options present in your HubRise catalog are ignored and are not sent to Shopify.

### Deals and Discounts

Deals and discounts are not supported on Shopify. Deals and discounts present in your HubRise catalog are ignored and are not sent to Shopify.

## Update Inventory Availability

Every time your HubRise inventory is updated, Shopify Bridge automatically updates the products' availability in your Shopify inventory.
