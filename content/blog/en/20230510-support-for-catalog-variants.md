---
title: "New Feature: Catalog Variants"
date: 2023-05-10
author: Antoine Monnier
meta:
  title: Catalog variants | Blog | HubRise
  description: HubRise now supports catalog variants. This new feature allows businesses to manage a single catalog across multiple channels and locations while maintaining the flexibility to customize prices and availability of SKUs, options, and deals for each channel and location.
---

We are happy to announce support for catalog variants! Catalog variants are a powerful new feature on HubRise that allows businesses to manage a single catalog across multiple sales channels and locations, while maintaining the flexibility to customize prices and availability of SKUs, options, and deals for each channel and location. This new feature not only saves time and effort but also ensures consistency and accuracy across all your sales channels. In this blog post, we'll explore how this new feature works and explain the API changes for developers.

## What are Catalog Variants?

At its core, catalog variants enable you to create unique pricing and availability rules for your items, depending on the context or platform they're being sold on. This level of customization is achieved by defining variants within your catalog and then specifying price overrides and restrictions at the SKU, option, and deal level for each variant.

For example, if you want to offer a different price for a pizza on food platforms compared to your website, you can create a "Food platforms" variant and then set price overrides for the specific SKUs and options within this variant. Similarly, you can disable specific deals or options by using restrictions within the variant. This granular control allows you to tailor your catalog to the unique requirements of each sales channel, without having to manage separate catalogs.

## Mapping Catalog Variants to Sales Channels

It's important to note that the mapping between a specific channel/location and a variant is done outside of the catalog itself, in the app's configuration page. This gives you the freedom to define variants based on any criteria you want.

For example, imagine that you want to differentiate prices and availability between food platforms in Paris and those outside Paris, as well as your website. Instead of creating a separate variant for each platform and location combination, you can create the following variants: "Food platforms Paris," "Food platforms outside Paris," and "Website". This approach enables you to manage prices and availability for every possible scenario without the need to create individual variants for each combination of channel and location.

## Updates to Catalog Manager and Integrations

To support catalog variants, we have updated our Catalog Manager app to allow defining different prices for each SKU/option for each variant, as well as disabling SKU/options/deals in specific variants.

Furthermore, we have upgraded our integrations with Uber Eats, Deliveroo, Just Eat, Shopify, WooCommerce, and Glovo. Now you can specify the variant to sync, or leave the variant empty to sync the default catalog.

## API Changes

When uploading a catalog to HubRise, you can now optionally include a `variants` array, at the same level as the `categories` array. This array contains one object per variant, with each object having a unique `ref` and a non-empty `name`:

```json
{
  "data": {
    "variants": [
      {
        "ref": "1",
        "name": "Food platforms"
      }
    ],
    ...
  }
}
```

You can then refer to these variants in the `price_overrides` arrays and `restrictions` objects at the SKU, option, and deal level. For example:

```json
{
  "data": {
    "variants": [
      {
        "ref": "1",
        "name": "Food platforms"
      },
      {
        "ref": "2",
        "name": "Kiosk"
      }
    ],
    "categories": [...],
    "products": [
      {
        "name": "Regina ham",
        "category_ref": "pizza",
        "skus": [
          {
            "price": "6.80 EUR",
            "price_overrides": [
              {
                "variant_refs": ["1"],
                "price": "8.00 EUR"
              }
            ]
          }
        ]
      },
      {
        "name": "Expresso",
        "category_ref": "drinks",
        "skus": {
          "price": "1.50 EUR",
          "restrictions": {
            "variant_refs": ["2"]
          }
        }
      }
    ]
  }
}
```

In this example:

- The "Regina ham" pizza has a default price of €6.80, but the price is overridden to €8.00 when ordered through food platforms.
- "Expresso" is only available when ordered through the kiosk.
