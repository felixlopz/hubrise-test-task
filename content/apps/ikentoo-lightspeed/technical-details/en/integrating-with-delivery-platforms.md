---
title: Integrating with Delivery Platforms
position: 2
layout: documentation
meta:
  title: Receiving Orders from Delivery Platforms - iKentoo by Lightspeed
  description: Integrating with major delivery platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided in this section.

iKentoo uses some predefined codes for service types and payments originated on the major delivery platforms, such as Deliveroo, Uber Eats, and Just Eat. These codes must be entered in the configuration page of the delivery platform bridge.

---

IMPORTANT NOTE: for the connection to work, the iKentoo Lightspeed K Series API should be activated by iKentoo Lightspeed support. For more details, see [Connect to HubRise](/apps/ikentoo-lightspeed/connect-hubrise).

---

## Deliveroo

To receive Deliveroo orders in iKentoo, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, you need to specify the following codes in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

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

## Uber Eats

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

## Just Eat

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
