---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: TastyCloud Connection to HubRise Configuration
  description: Instructions on how to configure TastyCloud for optimal connection to HubRise and other platforms.
---

Once your TastyCloud site is connected with a HubRise account, customer and order information is transmitted to HubRise automatically.  To ensure the information is sent accurately, some configuration on the TastyCloud side is required.  This information is especially true for the connection between your TastyCloud Site and the EPOS connected to your HubRise Account.

Both TastyCloud and HubRise organize the items that are sold to customers.  The mapping between these two systems is managed by the TastyCloud back office system.

## Catalog Import

### Display Mapping from TastyCloud Menu to HubRise Catalog

To map the TastyCloud Menu to the HubRise Catalog, a connection between TastyCloud and HubRise must be established.  For more information on connecting these two systems, see [Connect TastyCloud with HubRise](/apps/tastycloud/connect-hubrise).

Once the connection is established, follow these steps to display the mapping between your TastyCloud menu with the catalog:

1. Login to your TastyCloud back office.
1. Click **Mapping des produits** from the left navigation panel.
1. Select from the following options depending on which mapping you are updating:
    - Produits
    - Options
    - Quantité
1. The mapping page displays a table showing the current mappings between TastyCloud and HubRise.  The left side displays the Id and the Name of the TastyCloud product, option, or quantity.  The right side displays the HubRise Id and Name that the production, option or quantity is mapped to.
1. The Produits dropdown menu includes all TastyCloud products, options or quantities that have not been mapped to Hubrise. 

### Add TastyCloud Menu to HubRise Catalog Mapping

To add a new mapping between a TastyCloud Menu product, option or quantity to HubRise:

1. Login to your TastyCloud back office.
1. Click **Mapping des produits** from the left navigation panel.
1. Select from the following options depending on which mapping you are updating:
    - Produits
    - Options
    - Quantité
1. Select the TastyCloud element to be mapped from the **Produits** dropdown, then match it with the HubRise element from the **Produits POS**.
1. Once finished, click **Enregistrar** to save the mapping.

---

**IMPORTANT NOTE**: If you change the name of a product on your EPOS instead of deleting it and recreating another, the EPOS code will remain the same. The change will therefore not be registered in TastyCloud. It is advised that, under such circumstances, the product be deleted and a new one created. 

---

### Remove TastyCloud Menu to HubRise Catalog Mapping

The mapping between a specific TastyCloud product, option or quantity to HubRise can be disconnected.  Breaking this connection does not delete the item from the menu or from HubRise.

To remove an existing mapping between TastyCloud and HubRise:

1. Login to your TastyCloud back office.
1. Click **Mapping des produits** from the left navigation panel.
1. Select from the following options depending on which mapping you are updating:
    - Produits
    - Options
    - Quantité
1. From the row with the TastyCloud and HubRise mapping, click the **Delete icon** on the right hand side.

## Deals and Discounts




## Payment Methods

TastyCloud offers various payment methods, including cash and online payment. No ref codes are specified for the different methods and TastyCloud only sends the type of payment through to HubRise.

## Service Types

Service Type such as Delivery, Collection or Eat in are supported. These service types are not supported by unique ref codes in TastyCloud, but might require a EPOS code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

Service Types may be added in your TastyCloud back office.

## Charges

Although TastyCloud supports delivery charges, this information is not sent through to HubRise. 







