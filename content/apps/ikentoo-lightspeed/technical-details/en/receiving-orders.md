---
title: Receiving Orders
position: 1
layout: documentation
meta:
  title: Receiving Orders - iKentoo by Lightspeed
  description: Find out the technical details of how orders are sent to iKentoo from HubRise, which fields are passed and which are not.
---

Connecting iKentoo to HubRise allows you to receive orders from different connected solutions directly in your EPOS.

## Items

Every item on iKentoo must have a ref code. Orders containing items with incorrect or missing ref codes are rejected by iKentoo. For this reason, when sending an order to iKentoo, HubRise skips all items without a ref code.

## Payments

When an order has a `payments` section containing at least one payment, HubRise sends to iKentoo only the first payment, while the others are discarded. In other words, there is no support for split payments.

The `payment_ref` value, that is the ref code of the payment, is used to map the HubRise order to the correct payment method in iKentoo.

To verify or edit the ref codes of the payment methods allowed on iKentoo, follow these steps.

- Log in to your iKentoo back office.
- Navigate to **Configuration** > **Settings** > **Payment methods**.
- Verify that all supported payment methods have a ref code in the **Code** column.
- To edit a payment method, click the **Edit** link in the **Actions** column.
- To add a new payment method, click the **Add a payment method** button at the bottom of the page.

## Service Types

iKentoo requires each service type (delivery, collection, eat-in) to be defined as an account profile.

The `service_type_ref` value, that is the ref code of the service type, is used to map the HubRise order to the correct account profile on iKentoo.

You can view, edit, or add account profiles from your iKentoo back office, by going to **Configuration** > **Settings** > **Account profiles**.

The following account profile codes are typically used, but may vary depending on the specific iKentoo setup:

- `PICKUP`, for takeaway orders
- `DELIVERY`, for delivery orders
- `LOCAL`, for eat-in orders

Other specific service type ref codes must be used when you connect iKentoo to delivery platforms such as Deliveroo, Uber Eats, and Just Eat. For more details, see [Integrating with Delivery Platforms](/apps/ikentoo-lightspeed/integrating-with-delivery-platforms).
