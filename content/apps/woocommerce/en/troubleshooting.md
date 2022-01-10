---
title: Troubleshooting
position: 6
layout: documentation
meta:
  title: Troubleshooting | WooCommerce | HubRise
  description: Troubleshooting WooCommerce connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Verify the Connection to HubRise

These steps require that you have already connected WooCommerce to HubRise. For more information on connecting WooCommerce to HubRise, see [Connect to HubRise](/apps/woocommerce/connect-hubrise/).

### Check WooCommerce Webhooks

When you connect WooCommerce Bridge, it creates two webhooks on your WooCommerce website. These webhooks are essential to transmit orders from WooCommerce to HubRise.

To check that the webhooks have been created:

1. Open your WooCommerce back office.
1. From the left navigation panel, click **WooCommerce > Settings > Advanced**.
1. Then click on **Webhooks**.
   ![Entering the ref code in the SKU field for a WooCommerce variation](../images/010-en-woocommerce-webhooks.png)
1. Find two entries with the following names:
   - `HubRise {{your_location_id}}: Order updated`
   - `HubRise {{your_location_id}}: Order created`

If these entries are present, it is a good sign that the connection to HubRise was successfully established. You can proceed to the next verification step.

However if you cannot find the two entries, you need to reconnect the bridge and check WooCommerce webhooks again. For more information on connecting the bridge, see [Connect to HubRise](/apps/woocommerce/connect-hubrise/).

### Place a Test Order in WooCommerce

To verify the connection between WooCommerce and HubRise, place a test order in WooCommerce and check that it is transmitted to HubRise.

1. Open your WooCommerce back office.
1. From the top menu, click **View Store**. This will open your WooCommerce website.
1. Place an order on your WooCommerce website.
1. Return to your WooCommerce back office, and from the left navigation panel click **WooCommerce > Orders**. The new order will be present.

When WooCommerce is connected to HubRise, orders placed in WooCommerce should be transmitted to HubRise immediately.

To verify that your test order was transmitted to HubRise, follow these steps:

1. From the HubRise back office, click **Data** > **Orders**.
1. Find your test order.

If you can see the order, the connection between WooCommerce and HubRise is working correctly.