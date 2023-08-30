---
title: Variants
path_override: variants
position: 10
layout: documentation
meta:
  title: Variants | Catalog Manager | HubRise
  description: Instructions on how to create and edit Variants in Catalog Manager. Synchronise catalogs between your EPOS and your apps.
---

Variants let you manage different prices and availability across multiple platforms with a single catalog.
For example, you can specify a different price for products that you sell on food delivery platforms than the price for eat-in orders, or you can limit the availability of some products to specific channels.

After you create variants in Catalog Manager, you can use your apps connected with HubRise to push a specific catalog variant to your connected platform. 
Apps connected to the same HubRise Location can push different catalog variants to different apps.
For example, you can push the Deliveroo variant to Deliveroo with Deliveroo Bridge, and the Uber Eats variant to Uber Eats using Uber Eats Bridge, both connected to the same HubRise Location.

![Catalog Manager Grid View](./images/020-grid-view.png)

---

**IMPORTANT NOTE:** All HubRise Bridges support catalog variants, but not all the other connected apps for now. See your app documentation to know if this feature is supported.

---

For more information about variants, see the [Catalog Variants blog post](/blog/catalog-variants/).

## Create Variants

To create a variant, follow these steps:

1. In Catalog Manager, click **Grid**.
1. In the **Grid** view, click **Manage variants**.
1. In the dialog that appears, click **New variant**, then enter a name for your variant.
1. To finish, click **Close**.

Repeat the process for any additional variant that you want to create.

## Manage Variants Availability and Prices

After you create all the variants, you can edit the availability and price for each product, option, and deal in your catalog.
When you create a new product, option, or deal in your catalog, this is duplicated for all the variants, and you can then adjust its price and availability.
Disabling the **Default** version of an item automatically disables it for all variants.

When you finish editing your variants, to update the catalog in HubRise click **Save**.