---
title: Integrating with Delivery Platforms
position: 2
layout: documentation
meta:
  title: Receiving Orders from Delivery Platforms - iKentoo by Lightspeed
  description: Integrating with major delivery platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided in this section.

By convention, Lightspeed support team uses predefined codes when they set up the integration with the major delivery platforms, such as Deliveroo, Uber Eats, and Just Eat. Such codes are needed for service types, payments, charges, and discounts. If you configure the iKentoo back office autonomously, we recommend that you use the same codes, which are provided below, as this  simplifies troubleshooting in case of errors. 

You then need to include the same codes in the configuration page of the delivery platform bridge, as well, so that they match those present on iKentoo.

---

IMPORTANT NOTE: for the connection to work, the iKentoo Lightspeed K Series API should be activated by Lightspeed support. For more details, see [Connect to HubRise](/apps/ikentoo-lightspeed/connect-hubrise).

---

## Mapping Ref Codes in iKentoo

For every delivery platform you support, you need to create special service types, payments, charges, and discounts on iKentoo.
To simplify troubleshooting, we recommend that you use the specific codes you find in this page.

To create the ref codes on your iKentoo account, you have these two options:

1. You can contact Lightspeed support and ask them to include the codes in your back office for you.
2. You can include these codes in your back office autonomously. In this case, follow the procedures below.

### Creating Service Types in iKentoo

Service types are known as _account profiles_ on iKentoo. To create a service type for a delivery platform, follow these steps.

1. From your iKentoo back office, select **Configuration**, then select **Settings** > **Account profiles**.
1. Click **Add an account profile**, then click **OK**.
1. In the **Base options** section, specify the ref code for your service type in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the service types you support for each delivery platform.

### Creating Payment Methods in iKentoo

To create a payment method for a delivery platform, follow these steps.

1. From your iKentoo back office, select **Configuration**, then select **Settings** > **Payment methods**.
1. Click **Add a payment method**.
1. In the **Add new payment method** page, specify the code for your payment method in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the payment methods you support for each delivery platform.

### Creating Discounts in iKentoo

To create a discount for a delivery platform, follow these steps.

1. From your iKentoo back office, select **Configuration**, then select **Settings** > **Discounts**.
1. Click **Add a discount**.
1. In the **Add new discount** page, specify the discount code in the first field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the discounts you support for each delivery platform.

### Creating Charges in iKentoo

To create a charge for a delivery platform, you need to create an item by following these steps.

1. From your iKentoo back office, select **Configuration**, then select **Items** > **Items**.
2. Click **Add item**.
3. Next to **Sku**, select **Click here to add your custom SKU manually**.
4. A field appears where you can include the ref code for your charge.
5. For **Price structure**, make sure you select **Single price** from the dropdown menu.
6. Fill in the other sections in the page as needed, then click **Save**.
7. Repeat the process for all the charges you support for each delivery platform.

## Ref Code for Delivery Platforms

The following sections provide you with the relevant codes you need to use to connect iKentoo to a specific delivery platform. These codes must be present in your iKentoo back office and must be included in the configuration page for each integration.

### Deliveroo

To receive Deliveroo orders in iKentoo, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, you need to specify the following codes in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Type           | Name                                   | Code     |
| -------------- | -------------------------------------- | -------- |
| Service type   | Fulfillment by Deliveroo               | `DVAP`   |
| Service type   | Fulfillment by restaurant              | `DVMD`   |
| Service type   | Customer collection (Deliveroo Pickup) | `DVMTA`  |
| Charge         | Delivery charge                        | `DELD77` |
| Payment method | Deliveroo payment                      | `DVPM`   |
| Payment method | Deliveroo M+ payment                   | `DVMPM`  |
| Discount       | Deliveroo discount                     | `DELD99` |

### Uber Eats

To receive Uber Eats orders in iKentoo, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, you need to specify the following codes in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Type           | Name                                                      | Code     |
|----------------|-----------------------------------------------------------|----------|
| Service type   | Fulfillment by Uber Eats                                  | `UEAP`   |
| Service type   | Fulfillment by restaurant (BYOC - Bring Your Own Courier) | `UENDAP` |
| Service type   | Customer collection                                       | `UEPUAP` |
| Service type   | Dine-in                                                   | `UEDIAP` |
| Charge         | Delivery charge                                           | `UE77`   |
| Payment method | Uber Eats payment                                         | `UEPM`   |
| Discount       | Uber Eats discount                                        | `UE99`   |

### Just Eat

To receive Just Eat orders in iKentoo, you first need to connect Just Eat Bridge, an app included in your HubRise subscription.

To correctly receive your orders, you need to specify the following codes in the Just Eat Bridge configuration page.

| Type           | Name                    | Code   |
|----------------|-------------------------|--------|
| Service type   | Fulfillment by Just Eat | `JEAP` |
| Charge         | Delivery charge         | `JE77` |
| Charge         | Service charge          | `JE66` |
| Payment method | Just Eat payment        | `JEPM` |
| Discount       | Just Eat discount       | `JE99` |
