---
title: Integrating with Delivery Platforms
position: 2
layout: documentation
meta:
  title: Receiving Orders from Delivery Platforms - iKentoo by Lightspeed
  description: Integrating with major delivery platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided in this section.

iKentoo uses some predefined codes for service types and payments originated on the major delivery platforms, such as Deliveroo, Uber Eats, and Just Eat. These codes must be entered in the configuration page of the delivery platform bridge and must match those present on iKentoo.

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

**Service type**

- Fulfillment by Deliveroo ref code: `DVAP`
- Fulfillment by restaurant (Deliveroo M+) ref code: `DVMD`
- Customer collection (Deliveroo Pickup) ref code: `DVMTA`

**Delivery charges**

- Delivery charge ref code: `DELD77`

**Payment methods**

- Deliveroo payment ref code: `DVPM`
- Deliveroo M+ payment ref code: `DVMPM`

**Discounts**

- Deliveroo discount ref code: `DELD99`

### Uber Eats

To receive Uber Eats orders in iKentoo, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, you need to specify the following codes in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

**Service type**

- Fulfillment by Uber Eats ref code: `UEAP`
- Fulfillment by restaurant (BYOC - Bring Your Own Courier) ref code: `UENDAP`
- Customer collection ref code: `UEPUAP`
- Dine-in ref code: `UEDIAP`

**Delivery charges**

- Delivery charge ref code: `UE77`

**Payment methods**

- Uber Eats payment ref code: `UEPM`

**Discounts**

- Uber Eats discount ref code: `UE99`

### Just Eat

To receive Just Eat orders in iKentoo, you first need to connect Just Eat Bridge, an app included in your HubRise subscription.

To correctly receive your orders, you need to specify the following codes in the Just Eat Bridge configuration page.

**Service type**

- Fulfillment by Just Eat ref code: `JEAP`

**Charges**

- Delivery charge ref code: `JE77`
- Just Eat service charge ref code: `JE66`

**Payment methods**

- Just Eat payment ref code: `JEPM`

**Discounts**

- Just Eat discount ref code: `JE99`
