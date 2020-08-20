---
title: Ref Codes Mapping
position: 3
layout: documentation
meta:
  title: TastyCloud Connection to HubRise Configuration
  description: Instructions on how to configure TastyCloud for optimal connection to HubRise and other platforms.
---

Once your TastyCloud site is connected with a HubRise account, catalog, customer and order information is transmitted to HubRise automatically. To ensure the information is sent accurately, some configuration on the TastyCloud side is required. This is especially true when an EPOS is connected to your HubRise Account.

## Catalog Import

As you push your EPOS catalog into HubRise, TastyCloud pulls it automatically. No manual action is necessary.

## Product

Both TastyCloud and HubRise store the items that are sold to customers. The mapping between items on these two systems is managed by the TastyCloud back office.

To map the TastyCloud Menu to the HubRise Catalog, a connection between TastyCloud and HubRise must be established. For more information on connecting these two systems, see [Connect TastyCloud to HubRise](/apps/tastycloud/connect-hubrise).

---

**IMPORTANT NOTE**: For the TastyCloud mapping to work, a catalog needs to be available in HubRise. Catalogs are generally pushed into HubRise from your EPOS. Refer to your connected EPOS documentation on the HubRise website to verify that your EPOS supports this integration feature.

---

Follow these steps to map items between a TastyCloud and HubRise:

1. Login to your TastyCloud back office.
1. Click **Mapping des produits** (Products mapping) from the left navigation panel.
1. Select from the following options depending on which mapping you are updating:
   - **Produits** (Products)
   - **Options** (Options)
   - **Quantité** (Quantity)
   - **Menus** (Deals)
1. In the **Nouveau Mapping** (New mapping) section, select the TastyCloud element to be mapped from the **Produits** (Product) dropdown, then match it with the HubRise element from the **Produits POS** (POS product) dropdown. The **Produits** (Products) dropdown menu includes all TastyCloud items that have not been mapped to Hubrise.
1. Once finished, click **Enregistrer** (Save).

---

**IMPORTANT NOTE**: If you change the name of a product on your EPOS the EPOS ref code will remain the same. The change will therefore not be registered in TastyCloud. It is advised that, under such circumstances, the product be deleted and a new one created.

---

The **Mapping des produits** (Products mapping) page displays also a table showing the current mappings between TastyCloud and HubRise. The left side displays the **Id** and the **Name** on TastyCloud. The right side displays the HubRise **Id** and **Name** it is mapped to.

The mapping can be disconnected. Breaking this connection does not delete the item from TastyCloud or from HubRise.
To remove an existing mapping between TastyCloud and HubRise, click the red **Delete icon** on the far right hand side.

## Deals and Discounts

TastyCloud offers deals by way of flexible pricing and discounts which can be applied to an order. Correct EPOS ref codes are essential for orders containing discounts to be properly transmitted to your EPOS system and other apps connected to HubRise.

To create a new discount:

1. Select **Promotions** from the left navigation pane.
1. Fill in all the necessary details.
1. Click **Enregister**.

## Payment Methods

TastyCloud offers various payment methods, including cash and online payment. TastyCloud informs HubRise the payment status but does not specify the corresponding ref code required by some EPOS. Refer to your connected EPOS documentation on the HubRise website to verify if this works for you.

## Service Types

Service Type such as Delivery, Collection or Eat in are supported. These service types are not supported by unique ref codes in TastyCloud, but might require a EPOS ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

## Charges

Although TastyCloud supports delivery charges, this information is not sent through to HubRise.
