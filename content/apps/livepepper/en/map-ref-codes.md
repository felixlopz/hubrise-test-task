---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | LivePepper | HubRise
  description: Instructions on mapping LivePepper product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Once your LivePepper site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in HubRise, some configuration on the LivePepper side may be needed. This is particularly true for the connection with an EPOS.

To properly process orders from LivePepper to your EPOS, product ref codes are required for each and every item in the menu, including product variants, toppings and options as well as ingredients, product sizes and deals.

In some cases, the EPOS will also require ref codes for payment methods, service types and delivery charges to understand some of the LivePepper functionalities. Always refer to your EPOS documentation on the HubRise website for details.

Your LivePepper menu can either be created directly in LivePepper, or imported from a HubRise catalog.

---

**IMPORTANT NOTE:** It is important for each POS code field available in LivePepper to be mapped with the corresponding EPOS ref codes. If the EPOS ref code is missing, the EPOS will not be unable to correctly process the order.

---

## Catalog Import

If you have already exported your products from your EPOS or other connected app to HubRise, the entire catalog can be imported from HubRise. This will include:

- Products with variants, options, prices, within their respective product categories.
- Deals.

---

**IMPORTANT NOTE:** Importing a catalog from HubRise will replace the products in your LivePepper Menu. You can edit the menu in LivePepper after the import. Catalogs cannot be edited in HubRise.

---

To import from a HubRise Catalog into LivePepper:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see [Connect HubRise](/apps/livepepper/#connect-hubrise/).
1. From LivePepper, click **Menu** > **Import** / **Export**.
1. Scroll down to HubRise connection and click **Import**.
1. Authenticate your credentials and click **Import from HubRise**.
1. The import process will remove your current products and replace them with the ones from your HubRise catalog.

In this example, one of the sizes for the Coke offerings was removed from LivePepper, and then restored when imported from the connected HubRise catalog along with its EPOS ref code.

<video controls title="Import HubRise Catalog">
  <source src="../images/009-import-hubrise-catalog.webm" type="video/webm"/>
</video>

## Product

If you cannot import the catalog from HubRise, you will need to map product EPOS ref codes manually in LivePepper. The first step is to export a list of EPOS ref codes from your EPOS system. This may be exported as a CSV or Excel file. Whatever format they are exported to, the next step will be to copy those codes into LivePepper.

LivePepper support does support inserting those EPOS ref codes for you, if contracted to do so. See your LivePepper support representative for more information.

### Add EPOS Ref Codes to Products

Products have different EPOS ref codes for each **Prices & Availability**.

To update the EPOS code for each product and its prices & availability:

1. Select the product to update.
2. For each value in the **Price & Availability** section, update the EPOS code.
3. Click **Save** when complete.

At the end of the process you can check if all products have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting/#verify-product-mapping/)

<video controls title="Update Product EPOS Code">
  <source src="../images/016-product-pos-code-update.webm" type="video/webm"/>
</video>

### Add EPOS Ref Codes to Toppings, Variants, Ingredients, and Options

The process to add EPOS ref codes to toppings, variants, ingredients, and options is the same for product categories and products.

- Product **Category** values include:

  - **Variants**: Variants are available differences in a product. For example: Pizza with thin crust versus pizza with hand tossed crust.
  - **Toppings**: Ingredients that customers can add to their product that are not available by default. For example, adding mushrooms to a cheeseburger. Toppings can be set at the product category or the product level.
  - **Options**: Options are differences in how products are delivered. For example: Adding utensils, sauces, cutting a pizza in squares instead of triangles, etc.

- **Products** values and attributes include:
  - **Ingredients**: Default ingredients within a recipe that customers can remove from their product. For example: Cheeseburger without the pickles.
  - **Price & Availability**: The options made available to the customer, usually in the form of sizes. For example: an 8" pizza versus a 12” pizza.
  - **Toppings**: Ingredients set at the product category or the product level.

The instructions below are specific to updating the EPOS ref codes for a product's ingredients, and can be replicated for the items listed above.

To update the EPOS code for each product ingredient:

1. Select the product.
1. Select the **Ingredients** row.
1. Select the ingredient to update.
1. For each **Price & availability** option, enter the **POS code**.
1. If the ingredient is used in other products and they share the same EPOS code, they can be copied with the **Quick Copy** setting:
   1. From the dropdown select whether the Toppings apply to **All menu** items, or all products in a category.
   2. Click **Use POS codes above**. If the toppings share the same cost and availability, those options can be checked as well.
1. When finished, click **Save**.

At the end of the process you can check if all product values and attributes have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting/#verify-product-mapping/)

<video controls title="Update Ingredients EPOS Code">
  <source src="../images/018-ingredients-pos-code-update.webm" type="video/webm"/>
</video>

## Deals & Discounts

Deals in LivePepper offer savings to products or to the entire order. Correct EPOS ref codes are essential for orders containing deals to be properly transmitted to your EPOS system and other apps connected to HubRise.

To add an EPOS Code to a deal:

1. Select **Deals** from the left navigation pane.
1. For the deal to update, select **Edit**.
1. Under **Advanced Settings**, set the EPOS code.
1. Click **Save** when finished.

At the end of the process you can check if all deals have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting/#verify-product-mapping/)

<video controls title="Update Deals EPOS Code">
  <source src="../images/019-deals-pos-code-update.webm" type="video/webm"/>
</video>

---

**IMPORTANT NOTE:** Depending on your EPOS, Deals may be transmitted to the EPOS without an EPOS code required. Verify that your Deals are properly set up to comply with your EPOS requirements.

---

## Payment Methods

POS codes may be required for each **Online payment** and **On delivery payment** methods setup in LivePepper. Refer to your connected EPOS documentation on the HubRise website to verify.

To add an EPOS Code to a Payment Method:

1. Select **Settings** > **Payment settings**.
1. Click the payment method to update.
1. Click the edit icon.
1. Enter the **POS code**.
1. Click **Save**.

<video controls title="Add EPOS Code to Payment Method">
  <source src="../images/024-payment-method-add-pos-code.webm" type="video/webm"/>
</video>

## Service Types

Service Type such as Delivery, Collection or Eat in might require an EPOS code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

Service Types POS codes must be added by your LivePepper support representative. It cannot be done from the LivePepper back office.

## Charges

If delivery charges apply for the service offered an EPOS code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.

To add an EPOS Code to a Delivery charge:

1. Select **Settings** > **Delivery Settings**.
2. Add the EPOS code to the Delivery charge EPOS code.
3. Click **Save** when complete.

<video controls title="Add EPOS to Delivery Method">
  <source src="../images/025-delivery-method-add-pos.webm" type="video/webm"/>
</video>

## Catalog Export

If needed, your LivePepper menu can be exported to your HubRise account catalog to be shared with other connected Apps.

To export your LivePepper products to a HubRise catalog:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see [Connect HubRise](/apps/livepepper/#connect-hubrise/).
2. From LivePepper, click **Menu** > **Import** / **Export**.
3. The HubRise connection will be listed. Click **Export**.
4. The HubRise catalog will be updated.

<video controls title="Export to HubRise Catalog">
  <source src="../images/006-export-to-hubrise-catalog.webm" type="video/webm"/>
</video>
