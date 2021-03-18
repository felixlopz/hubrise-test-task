---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Receiving Orders from Delivery Platforms - iKentoo by Lightspeed
  description: Integrating iKentoo with food platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided below.

By convention, Lightspeed support team uses these predefined codes when they set up the integration. If you configure the iKentoo back office autonomously, we recommend that you use the same codes, as this simplifies troubleshooting.

---

**IMPORTANT NOTE:** These codes must be present in your iKentoo back office and must be included in the configuration page of the food platform bridge.

---

For detailed instructions on how to create ref codes in the iKentoo back office, see [Creating Ref Codes for Delivery Platforms](/apps/ikentoo-lightspeed/map-ref-codes/#creating-ref-codes-for-delivery-platforms).

## Deliveroo

To receive Deliveroo orders in iKentoo, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | Deliveroo fulfilled ref code  | `DVAP`        |
| Service types | Restaurant fulfilled ref code | `DVMD`        |
| Service types | Takeaway ref code             | `DVMTA`       |
| Discounts     | Offer ref code                | `DELD99`      |
| Charges       | Delivery charge ref code      | `DELD77`      |
| Charges       | Surcharge ref code            | `DELD88`      |
| Payments      | Deliveroo payment ref code    | `DVPM`        |
| Payments      | Cash payment ref code         | (leave empty) |

## Uber Eats

To receive Uber Eats orders in iKentoo, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                              | Ref code or value                                 |
| -------------- | --------------------------------- | ------------------------------------------------- |
| Service types  | Uber delivery ref code            | `UEAP`                                            |
| Service types  | Restaurant delivery ref code (\*) | `UENDAP`                                          |
| Service types  | Takeaway ref code                 | `UEPUAP`                                          |
| Service types  | Eat-in ref code                   | `UEDIAP`                                          |
| Special items  | Disposable items ref code         | Create a product in iKentoo and use its **Code**. |
| Discounts      | Discount ref code                 | `UE99`                                            |
| Payments       | Payment ref code                  | `UEPM`                                            |
| Order statuses | Mark the order as Accepted        | `When it is sent to HubRise`                      |
| Order statuses | Mark the order as Denied          | `When HubRise status changes to "Rejected"`       |
| Order statuses | Mark the order as Cancelled       | `When HubRise status changes to "Cancelled"`      |

(\*) BYOC - Bring Your Own Courier

## Just Eat

To receive Just Eat orders in iKentoo, you first need to connect Just Eat Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Bridge configuration page.

| Section       | Name                         | Ref code      |
| ------------- | ---------------------------- | ------------- |
| Service types | Just Eat delivery ref code   | `JEAP`        |
| Service types | Restaurant delivery ref code | **TODO**      |
| Service types | Takeaway ref code            | **TODO**      |
| Charges       | Delivery charge ref code     | `JE77`        |
| Charges       | Service charge ref code      | `JE66`        |
| Payments      | Just Eat payment ref code    | `JEPM`        |
| Payments      | Cash payment ref code        | (leave empty) |
