---
title: Conventions and special cases
position: 8
layout: documentation
meta:
  title: Conventions and special cases | API | HubRise
  description:
---

Over time, partners integrated to HubRise have established conventions to use the API and to cover edge use cases. A number of solutions follow these conventions, and we can consider them as a de facto standard.

We chose to document conventions in a separate chapter, as they are not strictly enforced by the API. Nonetheless, you should learn and follow them in order to make your solution operate seamlessly with other integrated solutions.

## Conventions for restaurants

### Half & half items

Half & half items are a relatively common occurrence in the restaurant industry, especially in the pizzeria industry. A half & half product lets you mix two recipes, and customise each of them separately. Think of a half & half pizza as a normal size pizza split in two halves, each half having its own ingredients. 

#### Example of half & half pizza in an online ordering solution:

![Half & half pizza in an online ordering solution](../../images/004-half-half.png)

#### Encoding in catalog



#### Encoding in orders

See an example of order, containing a H&H item:

```json
{
  ...
  "items": [
    {
      "price": "13.00 GBP",
      "quantity": "1",
      "product_name": "Half & half",
      "sku_name": "14\"",
      "sku_ref": null,
      "options": [
        {
          "option_list_name": "Side 1",
          "name": "Vesuvio",
          "ref": "pa_50555",
          "price": "0.00 GBP"
        },
        {
          "option_list_name": "Side 2",
          "name": "Caprino",
          "ref": "pa_50585",
          "price": "0.00 GBP"
        },
        {
          "option_list_name": "Toppings 1",
          "name": "Ricotta Cheese",
          "ref": "54641",
          "price": "1.50 GBP"
        },
        {
          "option_list_name": "Toppings 1",
          "name": "Jalapenos",
          "ref": "54643",
          "price": "1.50 GBP"
        },
        {
          "option_list_name": "Toppings 2",
          "name": "Jalapenos",
          "ref": "54643",
          "price": "1.50 GBP"
        }
      ]
    }
  ],
  ...
}
```

## Conventions for delivery


