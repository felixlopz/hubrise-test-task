---
title: Integrating with Delivery Platforms
position: 6
layout: documentation
meta:
  title: Receiving Orders from Delivery Platforms - iKentoo by Lightspeed
  description: Integrating with major delivery platforms like Deliveroo, Uber Eats, and Just Eat requires you to specify particular ref codes in the configuration page for the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided in this section.

By convention, Lightspeed support team uses predefined codes when they set up the integration with the major delivery platforms, such as Deliveroo, Uber Eats, and Just Eat. Such codes are needed for service types, payments, charges, and discounts. If you configure the iKentoo back office autonomously, we recommend that you use the same codes, which are provided below, as this simplifies troubleshooting in case of errors.
For detailed instructions on how to create the ref codes in the iKentoo back office, see [Creating Ref Codes for Delivery Platforms](/apps/ikentoo-lightspeed/map-ref-codes/#creating-ref-codes-for-delivery-platforms).

You then need to include the same codes in the configuration page of the delivery platform bridge, as well, so that they match those present on iKentoo.

---

**IMPORTANT NOTE:** For the connection to work, the iKentoo Lightspeed K Series API should be activated by Lightspeed support. For more details, see [Connect to HubRise](/apps/ikentoo-lightspeed/connect-hubrise).

---


## Ref Code for Delivery Platforms

The following sections provide you with the relevant codes you need to use to connect iKentoo to a specific delivery platform. These codes must be present in your iKentoo back office and must be included in the configuration page for each integration.

### Deliveroo

To receive Deliveroo orders in iKentoo, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section       | Name                          | Code          |
| ------------- | ----------------------------- | ------------- |
| Service types | Deliveroo fulfilled ref code  | `DVAP`        |
| Service types | Restaurant fulfilled ref code | `DVMD`        |
| Service types | Takeaway ref code             | `DVMTA`       |
| Discounts     | Offer ref code                | `DELD99`      |
| Charges       | Delivery charge ref code      | `DELD77`      |
| Charges       | Surcharge ref code            | `DELD88`      |
| Payments      | Deliveroo payment ref code    | `DVPM`        |
| Payments      | Cash payment ref code         | (leave empty) |

### Uber Eats

To receive Uber Eats orders in iKentoo, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                              | Code                                              |
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

### Just Eat

To receive Just Eat orders in iKentoo, you first need to connect Just Eat Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Bridge configuration page.

| Section       | Name                         | Code          |
| ------------- | ---------------------------- | ------------- |
| Service types | Just Eat delivery ref code   | `JEAP`        |
| Service types | Restaurant delivery ref code | **TODO**      |
| Service types | Takeaway ref code            | **TODO**      |
| Charges       | Delivery charge ref code     | `JE77`        |
| Charges       | Service charge ref code      | `JE66`        |
| Payments      | Just Eat payment ref code    | `JEPM`        |
| Payments      | Cash payment ref code        | (leave empty) |
