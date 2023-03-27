---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | SwooPOS | HubRise
  description: Integrating SwooPOS with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in SwooPOS. You can also push your menu from SwooPOS to food platforms.

This page describes the settings to use to connect food ordering platforms to SwooPOS.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

## Configuration on SwooPOS

Depending on your needs, you will need to create PRODUCTS, PROMOTIONS, PAYMENT METHODS... specific to the platforms in SwooPOS.

If you don't use these features, you can skip the creation of these items, and leave the corresponding fields empty.

### PRODUCTS, PROMOTIONS...

Describe the items to create before connecting food platforms.

## Deliveroo

To receive Deliveroo orders in SwooPOS, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | (leave empty)                                     |
| Service types  | Restaurant fulfilled ref code         | (leave empty)                                     |
| Service types  | Takeaway ref code                     | (leave empty)                                     |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code              | (leave empty)                                     |
| Charges        | Surcharge ref code                    | (leave empty)                                     |
| Charges        | Bag fee ref code                      | (leave empty)                                     |
| Payments       | Online payment ref code               | (leave empty)                                     |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Just Eat

To receive Just Eat orders in SwooPOS via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service charge ref code                  | (leave empty)                                     |
| Charges        | Bag fee ref code                         | (leave empty)                                     |
| Charges        | Driver tip ref code                      | (leave empty)                                     |
| Charges        | Other charge ref code                    | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in SwooPOS, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                         | Ref code or value                                      |
| -------------- | -------------------------------------------- |--------------------------------------------------------|
| Service types  | Uber delivery ref code                       | (leave empty)                                          |
| Service types  | Restaurant delivery ref code                 | (leave empty)                                          |
| Service types  | Takeaway ref code                            | (leave empty)                                          |
| Service types  | Eat-in ref code                              | (leave empty)                                          |
| Service types  | Send orders delivered by Uber Eats as        | `collection orders`                                    |
| Special items  | Disposable items ref code                    | Create a product in SwooPOS and use its ref code. (\*) |
| Discounts      | Discount ref code                            | (leave empty)                                          |
| Charges        | Delivery charge ref code                     | (leave empty)                                          |
| Charges        | Small order fee ref code                     | (leave empty)                                          |
| Charges        | Tip ref code                                 | (leave empty)                                          |
| Payments       | Online payment ref code                      | (leave empty)                                          |
| Payments       | Cash payment ref code                        | (leave empty)                                          |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"`      |
| Menu           | Enable preparation notes on individual items | Tick if you wish to enable them / Leave unchecked      |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
