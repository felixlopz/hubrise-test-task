---
title: How Do I Create Ref Codes In Lightspeed?
position: 3
layout: documentation
meta:
  title: Create Ref Codes | Lightspeed Restaurant | HubRise
  description: Instructions to create Lightspeed Restaurant ref codes needed for your EPOS to work with other connected apps, like online ordering platforms.
---

If you connect Lightspeed Restaurant to delivery platforms such as Deliveroo, Uber Eats, and Just Eat, or to other online ordering solutions, you need to create special service types, payments, charges, and discounts for every platform you support.
To simplify troubleshooting, we recommend that you use the specific codes provided in the [Food ordering platforms](/apps/lightspeed-restaurant/food-ordering-platforms) page.

To create the ref codes in your Lightspeed account, you have two options:

1. You can contact Lightspeed support and ask them to include the codes in your back office for you.
1. You can include the ref codes in your back office autonomously. In this case, follow the procedures below.

## Service Types

Service types are called _account profiles_ on Lightspeed. To create a service type, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Account profiles**.
1. Click **Add an account profile**, then click **OK**.
1. In the **Base options** section, specify the ref code for your service type in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the service types you support on every platform.

The following account profile codes are typically used, but may vary depending on the specific Lightspeed setup:

- `PICKUP`, for takeaway orders.
- `DELIVERY`, for delivery orders.
- `LOCAL`, for eat-in orders.

Other specific service type ref codes must be used when you connect Lightspeed Restaurant to delivery platforms such as Deliveroo, Uber Eats, and Just Eat. For more details, see [Food Ordering Platforms](/apps/lightspeed-restaurant/food-ordering-platforms).

## Discounts

To create a discount that is compatible with the HubRise data model, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Items** > **Items**.
1. Click **Add item**.
1. In the **Create new item** page, enter the following values:
   - In the **Item receipt name** field, enter the name of the discount.
   - Next to **Sku**, select **Click here to add your custom SKU manually**. A field appears where you can include the ref code for your discount.
   - From the **Price structure** list, select **Interactive negative price**.
   - Leave the **Cost price** field empty.
   - Optionally, fill in the other sections in the page.
1. To finish, click **Save**.
1. Repeat the process for all the discounts you support on every platform.

## Deals

To create a deal that is compatible with the HubRise data model, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Items** > **Items**.
1. Click **Add item sequence**.
1. In the **Create new item sequence** page, enter the following values:
   - In the **Sequence receipt name** field, enter the name of the deal.
   - Next to **Sku**, select **Click here to add your custom SKU manually**. A field appears where you can include the ref code for your deal.
   - From the **Price structure** list, select **Interactive negative price**.
   - Leave the **Cost price** field empty.
   - Optionally, fill in the other sections in the page.
1. Click **Save**. A page opens where you can further configure the deal.
1. In the **Edit item sequence** page, under **Items that are part of this sequence**, click **Edit the item list**.
1. In the **Item list** section, enter the name of the products that are part of the deal, and click the **+ Add** icon to add them.
1. To finish, click **Save**.
1. Repeat the process for all the deals you support on every platform.

## Charges

To create a charge, you need to create an item by following these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Items** > **Items**.
1. Click **Add item**.
1. In the **Create new item** page, enter the following values:
   - In the **Item receipt name** field, enter the name of the discount.
   - Next to **Sku**, select **Click here to add your custom SKU manually**. A field appears where you can include the ref code for your charge.
   - From the **Price structure** list, select **Single price**.
   - In the **Cost price** field, enter the price of the charge.
   - Optionally, fill in the other sections in the page.
1. To finish, click **Save**.
1. Repeat the process for all the charges you support on every platform.

## Payment Methods

To create a payment method, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Payment methods**.
1. Click **Add a payment method**.
1. In the **Add new payment method** page, specify the code for your payment method in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the payment methods you support on every platform.
