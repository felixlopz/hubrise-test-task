---
title: Troubleshooting
position: 4
layout: documentation
meta:
  title: Aquila Connection to HubRise Troubleshooting
  description: Instructions on how resolve connection issues
---

## Verify Aquila Connection

Verifying your connection between Aquila and HubRise involves tracking the path between orders to HubRise through the following steps:

1. Create test orders in Aquila.
2. Verify the test orders in Aquila.
3. View test orders transmitted to HubRise.

### Create Test Orders in Aquila

The first step in verifying the connection between Aquila and HubRise is by creating test orders.

These steps require that you have already connected Aquila to HubRise. For more information on connecting Aquila to HubRise, see [Getting Started](/apps/aquila/getting-started/).

Once the connection is complete, test orders generated from Aquila will be transmitted to HubRise. Follow this process to create a test order and verify it has been transmitted to HubRise.

1. Login to your Aquila back office.
2. Select **View your website** from the top of the page. This will open your Aquila site in another browser tab or window.
3. Generate an order.
4. Return to Aquila, and from the left navigation panel click **Orders**. The new order will be present.

### View Test Orders Transmitted to HubRise

With the test order created in Aquila, the next step is to verify that the order was transmitted to HubRise through the following steps:

1. Login to your HubRise account. This can be done from your Aquila back office by selecting **Settings > Add-ons**, then click **Go to your HubRise account**.
2. If prompted, log into your HubRise user account.
3. From HubRise, click **Data** > **Orders**. The new Order will be displayed.
4. Click the new Order to verify the customer and order information is accurate.
5. The **Logs** section will contain the detailed JSON records of the communication between Aquila and HubRise. For more information on how to read these logs, see [Understanding Logs in HubRise](/docs/hubrise-logs).

## Verify POS codes for All Products

To verify that all Aquila menu items have had a POS code assigned, select **Catalog > Products** menu from the left navigation panel and check if there is a code filled under "Code". 