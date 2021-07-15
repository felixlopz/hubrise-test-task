---
title: Create Ref Codes
position: 5
layout: documentation
meta:
  title: Create Ref Codes | Lightspeed K Series | HubRise
  description: Instructions to create Lightspeed K Series ref codes needed for your EPOS to work with other connected apps, like online ordering platforms.
---

If you connect Lightspeed to delivery platforms such as Deliveroo, Uber Eats, and Just Eat, you need to create special service types, payments, charges, and discounts for every delivery platform you support.
To simplify troubleshooting, we recommend that you use the specific codes provided in the page [Integrating with delivery platforms](/apps/ikentoo-lightspeed/food-ordering-platforms).

To create the ref codes in your Lightspeed account, you have these two options:

1. You can contact Lightspeed support and ask them to include the codes in your back office for you.
2. You can include these codes in your back office autonomously. In this case, follow the procedures below.

## Service Types

Service types are called _account profiles_ on Lightspeed. To create a service type for a delivery platform, follow these steps.

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Account profiles**.
1. Click **Add an account profile**, then click **OK**.
1. In the **Base options** section, specify the ref code for your service type in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the service types you support for each delivery platform.

## Discounts

To create a discount for a delivery platform, follow these steps.

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Discounts**.
1. Click **Add a discount**.
1. In the **Add new discount** page, specify the discount code in the first field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the discounts you support for each delivery platform.

## Charges

To create a charge for a delivery platform, you need to create an item by following these steps.

1. From your Lightspeed back office, select **Configuration**, then select **Items** > **Items**.
2. Click **Add item**.
3. Next to **Sku**, select **Click here to add your custom SKU manually**.
4. A field appears where you can include the ref code for your charge.
5. For **Price structure**, make sure you select **Single price** from the dropdown menu.
6. Fill in the other sections in the page as needed, then click **Save**.
7. Repeat the process for all the charges you support for each delivery platform.

## Payment Methods

To create a payment method for a delivery platform, follow these steps.

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Payment methods**.
1. Click **Add a payment method**.
1. In the **Add new payment method** page, specify the code for your payment method in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the payment methods you support for each delivery platform.
