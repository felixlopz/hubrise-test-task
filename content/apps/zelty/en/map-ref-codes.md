---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Zelty EPOS Ref Code Mapping on HubRise
  description: Informs users on how to create products and export the menu to map Zelty EPOS ref codes on HubRise or other apps connected to HubRise.
---

Once your Zelty EPOS is connected with your HubRise account, you can sync information between them. For it to work however, certain steps need to be taken. Each item in the Zelty EPOS is identified by a unique product code. When you set up other apps to connect via HubRise you need to provide these codes.

## Export the Catalog

Menus can be exported into HubRise for other connected apps to pull, if they offer this integration feature. Refer to your connected apps documentation on the HubRise website to verify.

There are two options available to export the menu from Zelty to HubRise and use it in other connected apps. You can export the entire menu or a subset of your menu. If the app you want to connect cannot import the catalog from HubRise, you might need to export the entire menu in an external file to map product codes manually. For more information, see [Product](/apps/zelty/map-ref-codes/#product).

### Export the Entire Menu

You can export the whole menu containing all the products. To export the entire menu:

1. Go to the Zelty **Marketplace**.
1. Click on **HubRise**.
1. Select **Gérer** and **Exporter ma carte vers HubRise** from the dropdown which appears.
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

### Export a Subset of Your Menu

You can also export a subset of the menu to HubRise. It can be very useful if some items on your menu are not to be used by other apps connected to HubRise.

To export a subset of the menu, you need to create a **catalogue** (catalog). They are a subset of the entire menu. They are used to push a subset of your menu to food ordering platforms or other integrated solutions such as HubRise.

To create a catalog from your Zelty back office:

1. Navigate to **La Carte** (Menu).
1. Select **Les catalogues** (Catalog).
1. Click on the **Créer un nouveau catalogue** (Create a new catalog) button.

To export a subset of the menu:

1. Go to **Catalogues** (Catalog).
1. Next to the name of the catalog, click the down arrow and select **Envoyer vers** (Send to).
1. Click on the **HubRise** button available under the heading **Partenaires disponibles** (Available partners).
1. A message will indicate that the **Le catalogue est en cours de transfert vers Hubrise** (the catalog is being sent to HubRise).
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

---

**IMPORTANT NOTE**: Products, deals and options are exported into HubRise but not tags for the time being.

---

## Products

If other apps connected to your HubRise account cannot use the menu exported to HubRise, it is possible to export all the reference codes in a CSV, or an Excel file format. This export includes the reference codes for tags, products, menus, and options. With this information in hand, you can manually enter the codes in other systems.

---

**IMPORTANT NOTE**: Product reference codes cannot be seen on the Zelty user interface. You can see them in both the HubRise catalog or external file exports.

---

To export the entire menu in an external file:

1. Navigate to **La Carte** (Menu).
1. Select **Les Produits** (Products).
1. In the toolbar that appear on the far right, select **Exporter la carte** (Export the menu).
1. Select the options you require, the format, and make sure the final option **Export pour les plateformes externes** (Export for external platforms) is selected.

## Payment Methods

Your Zelty EPOS offers various payment methods, including cash and online payment as well as client account.
It might be necessary to specify the corresponding payment method code for each payment method allowed in the system to connect via HubRise. You will need ask Zelty for it.

## Service Types

Each service type you provide (delivery, collection, eat-in) might need to be associated with the correct Zelty EPOS ref code on other apps connected to HubRise. The exact values of these codes depend on the particular setup of the restaurant. You will need ask Zelty for it.
