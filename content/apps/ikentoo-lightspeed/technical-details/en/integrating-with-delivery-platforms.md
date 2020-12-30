---
title: Integrating with Delivery Platforms
position: 1
layout: documentation
meta:
  title: Connect iKentoo to HubRise - Receiving Orders from Delivery Platforms
  description: Integrating with major delivery platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

If you plan to connect iKentoo to Deliveroo, Uber Eats, or Just Eat, you should take note of the configuration parameters provided in this section.

iKentoo uses some predefined codes for service types and payments originated on the major delivery platforms, such as Deliveroo, Uber Eats, and Just Eat. These codes must be entered in the configuration page of the food delivery bridge.

## Deliveroo

If you want to receive Deliveroo orders in iKentoo, you can use Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, you need to specify the following codes in the Deliveroo Bridge configuration page.
To learn how to view and modify the configuration page for Deliveroo Bridge, see the Deliveroo [Configuration](/apps/deliveroo/configuration) page.

**Service type**

- Fulfillment by Deliveroo ref code: DVAP
- Fulfillment by restaurant (Deliveroo M+) ref code: DVMD
- Customer collection (Deliveroo Pickup) ref code: DVMTA

**Delivery charges**

- Delivery charge ref code: DELD77

**Payment methods**

- Deliveroo payment ref code: DVPM

**Discounts**

- Deliveroo discount ref code: DELD99

## Uber Eats

If you want to receive Uber Eats orders in iKentoo, you can use Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, you need to specify the following codes in the Uber Eats Bridge configuration page.
To learn how to view and modify the configuration page for Uber Eats Bridge, see the Uber Eats [Configuration](/apps/uber-eats/configuration) page.

**Service type**

- Fulfillment by Uber Eats ref code: UEAP
- Fulfillment by restaurant (BYOC - Bring Your Own Courier) ref code:
- Customer collection ref code:
- Dine-in ref code:

**Delivery charges**

- Delivery charge ref code: UE77

**Payment methods**

- Uber Eats payment ref code: UEPM

**Discounts**

- Uber Eats discount ref code: UE99
