---
title: User Interface
position: 4
layout: documentation
meta:
  title: User Interface | Catalog Manager | HubRise
  description: How to manage Products, Option Lists, Deals, Discounts, Charges. Synchronise catalogs between your EPOS and your apps.
---

## Catalogs

A **Catalog** is simply a container for your products and their associated details.  In Catalog Manager you can edit or create multiple catalogs to cater for different business scenarios. 

Catalogs can be created globally across all locations, or at specific locations. For more information, see [Accounts](https://www.hubrise.com/docs/account) and [Locations](https://www.hubrise.com/docs/locations).  At one location, you may, for example, create one catalog that imports products from your EPOS and synchronises with an online ordering system.  At another location, you may create a catalog which is manually maintained and is used only to populate and maintain an online menu.

When you open Catalog Manager from the **CONNECTIONS** console, the **Catalogs** page is displayed.  From here you can create new catalogs. You can also use the **Actions** dropdown to rename, duplicate or delete existing ones.

![Catalog Manager Catalog list](../images/001-en-catalog-list.png)

## Products

When you open a Catalog, the Product page is displayed.  This lists all your products grouped by Category. To add a new category, click **New category** and enter a name.  

For each product, the following can be viewed/edited in the product's details pane:

- Description
- Images
- Variations
- Options List

Variations are typically used to provide different varieties of the base product, such as size or colour.  Options allow you to specify optional additional items, such as extras.

---

**IMPORTANT NOTE:** Each variation has its own product ref code and price which must be entered if you are connecting an EPOS. If a product has no variations, then the ref code for the base product needs to be entered.

---

You can rearrange the order in which items are displayed in each category by using the drag handle to drag and drop products. The order in which products display in the Catalog Manager is the oder in which they will display in the app you push the catalog into.

![Catalog Manager Product List](../images/002-en-product-list.png)

## Option Lists

Options are additional items which customers can add to a product when ordering.  When you create a product, you can choose to create a relationship between the product and an Options List. The Options List needs to be created before you can relate them to a product item. 

![Catalog Manager Options List](../images/003-en-option-lists.png)

## Deals

Deals are special offers that you can configure for your menu. A typical example could be a `Buy One Get One Free` deal. There are several ways that you can set deals up to meet your specific requirements. This includes offering percentage or absolute discounts and limiting the deal to certain products.

![Catalog Manager Deals list](../images/005-en-deals-list.png)

## Discounts

Discounts are simple percentage or amount discounts that can be applied on a total purchase, as opposed to a specific product item.

![Catalog Manager Discounts list](../images/006-en-discounts-list.png)

## Charges

Charges are flat fees that you can apply to a total purchase for things like delivery, fees, tips or other costs.

![Catalog Manager Charges list](../images/007-en-charges-list.png)



