---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Zelty EPOS Ref Code Mapping on HubRise
  description: Informs users on how to create products and export the menu to map Zelty EPOS ref codes on HubRise or other apps connected to HubRise.
---

Once your Zelty EPOS is connected with your HubRise account, you can sync information between them.

Zelty pulls order and customer information from HubRise but is not able to push information into it. Menu items stored on Zelty can however be pushed into HubRise. For it to work however, certain steps need to be taken. Each item in the Zelty EPOS is identified by a unique product code. When you set up other apps to connect via HubRise you need to provide these codes.

---

**IMPORTANT NOTE:** Order and customer information stored on Zelty cannot currently be pushed into HubRise, but Zelty is working on it. You will need this feature connect apps that need information available in your EPOS such as pay at the table, beeper, or business intelligence.

---

## Product Catalog

### Add Products

Products, deals and promotions, tags, and options can be set up in Zelty.

To create products from your Zelty back office:

1. Navigate to **La Carte** (Menu).
1. Select **Les Produits** (Products). On the top right-hand corner of the page a toolbar appears.
1. On the toolbar, click **+** which will take you to a page where a product can be created.

To create deals from your Zelty back office:

1. Navigate to **La Carte** (Menu).
1. Select **Les menus** (Deals).
1. Click **Ajouter** (Add).

### Create a Catalog

Once a product is created it can be included in a **catalogue** (Catalog). They are a subset of the entire menu. They are used to push a subset of your menu to food ordering platforms or other integrated solutions such as HubRise.

To create a catalog from your Zelty back office:

1. Navigate to **La Carte** (Menu).
1. Select **Les catalogues** (Catalog).
1. Click on the **Créer un nouveau catalogue** (Create a new catalog) button.

## Export the Catalog

There are two options available to export the menu from Zelty to HubRise and use it in other connected apps. If the app you want to connect cannot import the catalog from HubRise, you might need to export the entire menu in an external file to map product codes manually.

### Export the Entire Menu

You can export the whole menu containing all the products. To export the entire menu:

1. Go to the Zelty **Marketplace**.
1. Click on **HubRise**.
1. Select **Gérer** and **Exporter ma carte vers HubRise** from the dropdown which appears.
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

### Export a Subset of Your Menu

You can also export a subset of the menu to HubRise. Using a Zelty Catalog can be very useful if some items on your menu are not to be used by other apps connected to HubRise.

To export a subset of the menu:

1. Go to **Catalogues** (Catalog).
1. Next to the name of the catalog, click the down arrow and select **Envoyer vers** (Send to).
1. Click on the **HubRise** button available under the heading **Partenaires disponibles** (Available partners).
1. A message will indicate that the **Le catalogue est en cours de transfert vers Hubrise** (the catalog is being sent to HubRise).
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

---

**IMPORTANT NOTE**: Products, deals and options are exported into HubRise but not tags for the time being.

---

### Export the Entire Menu in an External File

If other apps connected to your HubRise account cannot use the menu exported to HubRise, it is also possible to export all the reference codes in a CSV, or an Excel file format. This export includes the reference codes for tags, products, menus, and options. With this information in hand, you can manually enter the codes in other systems.

To export the entire menu in an external file:

1. Navigate to **La Carte** (Menu).
1. Select **Les Produits** (Products).
1. In the toolbar that appear on the far right, select **Exporter la carte** (Export the menu).
1. Select the options you require, the format, and make sure the final option **Export pour les plateformes externes** (Export for external platforms) is selected.

---

**IMPORTANT NOTE**: Product reference codes cannot be seen on the Zelty user interface. You can see them in both the HubRise catalog or external file exports.

---

## Service Types

Each service type you provide (delivery, collection, eat-in) might need to be associated with the correct Zelty EPOS ref code on other apps connected to HuBRise. The exact values of these codes depend on the particular setup of the restaurant. You will need ask Zelty for it.

[comment]: # 'Waiting on feedback from Zelty on this'

## Payment Methods

Your Zelty EPOS offers various payment methods, including cash and online payment as well as client account.
It might be necessary to specify the corresponding payment method code for each payment method allowed in the system to connect via HubRise.

When the customer chooses to pay upon delivery or collection, no payment information is sent to the Zelty EPOS, as doing so would close the transaction.

[comment]: # 'Waiting on feedback from Zelty on this'