---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: App4 Connection to HubRise Configuration
  description: Instructions on how to configure App4 for optimal connection to HubRise and other platforms.
---

Once your App4 site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in HubRise, some configuration on the App4 side may be needed. This is particularly true for the connection with an EPOS.

To properly process orders from LivePepper to your EPOS, product codes are required for each and every item in the menu, including product variants, toppings and options as well as ingredients, product sizes and deals. Your App4 can be imported from a HubRise catalog to ensure that these codes are included.

In some cases, the EPOS will also require codes for payment methods, service types and delivery charges to understand some of the App4 functionalities. Always refer to your EPOS documentation on the HubRise website for details.

## Catalog Import

You can import a HubRise Catalog into your App4 menu. When you do this, the following data is imported:

- Category and Product names.
- Product and Category assignments. (For example, if you have a Category for Beverages, and a product called Coffee in a HubRise Category, this import will assign Coffee into the Beverages Category).
- Images.

---

**IMPORTANT NOTICE**: This will not create new categories and products in App4. As of this time, this will only update existing categories and products.

---

To import a HubRise Catalog into App4 after App4 and HubRise have been connected, it will be necessary to contact App4 support, who will take the following steps:

1. Connect to your App4 back office.
1. Click **HubRise Settings**.
1. For the restaurant to sync, select **Sync Settings**.
1. Select from the following options:
   - Move existing products into the imported categories. This will update existing menu items into the categories imported from HubRise. This will not create new products in App4: they must already exist first.
   - Update the product names: This will update existing product names in App4 to match the entries from HubRise.
   - Update imported category names: This will update existing category names in App4 to match the entries from HubRise.
   - Update existing images: This will update the existing images in App4 to match the imports from HubRise.
1. When finished, click **Import**. This will import and update your restaurant's App4 menu based on the HubRise Category.

## Product Mapping

Product codes are required for each and every item in the App4 menu to successfully complete an order. Product items imported from HubRise might include these codes.

## Deals & Discounts Mapping

POS codes may be required for deals and discounts setup in App4. Refer to your connected EPOS documentation on the HubRise website to verify.

## Payment Methods Mapping

POS codes may be required for each online payment methods setup in App4. Refer to your connected EPOS documentation on the HubRise website to verify.

## Service Types Mapping

Service Type such as Delivery, Collection or Eat in might require a POS code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

## Charges Mapping

If delivery charges apply for the service offered a POS code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.
