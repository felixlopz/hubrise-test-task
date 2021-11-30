---
title: Conventions and special cases
position: 4
layout: documentation
meta:
  title: Conventions and special cases | HubRise
  description:
---

The HubRise API aims to address multiple markets by carefully avoiding over specialisation.

To cover the edge cases for specific markets, such as the restaurant industry, some partners have started to enforce some rules and conventions. Some of these conventions have spread to other partners, turning them into a de facto standard.

This page attempts to be a comprehensive list of the most widespread conventions used by HubRise partners. The conventions described here are not strictly enforced by the API, but using them in your solution will improve interoperability with other integrated solutions.

## General conventions

### Tags on categories

| Tag      | Description                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| `hidden` | The category is hidden, but its products are available. Typically used to hide products only available within deals. |

### Tags on SKUs

The following tag can be set at the SKU level:

| Tag         | Description                                  |
| ----------- | -------------------------------------------- |
| `deal_only` | The SKU is only available as part of a deal. |

## Conventions for restaurants

### Tags on products

The following tags can be set at the product level. They apply to every SKU of the product.

| Tag                         | Description             |
| --------------------------- | ----------------------- |
| `alcoholic`                 | Contains alcohol.       |
| `spicy_1`                   | Midly spicy.            |
| `spicy_2`                   | Spicy.                  |
| `spicy_3`                   | Very spicy.             |
| `vegan`                     | Vegan dish.             |
| `vegetarian`                | Vegetarian dish.        |
| `no_allergens`              | Contains no allergens.  |
| `celery`                    | Contains this allergen. |
| `crustaceans`               | Contains this allergen. |
| `eggs`                      | Contains this allergen. |
| `fish`                      | Contains this allergen. |
| `gluten`                    | Contains this allergen. |
| `lupin`                     | Contains this allergen. |
| `milk`                      | Contains this allergen. |
| `molluscs`                  | Contains this allergen. |
| `mustard`                   | Contains this allergen. |
| `nuts`                      | Contains this allergen. |
| `peanuts`                   | Contains this allergen. |
| `sesame_seeds`              | Contains this allergen. |
| `soybeans`                  | Contains this allergen. |
| `sulphur_dioxide_sulphites` | Contains this allergen. |

### Half & half items

Half & half items are a relatively common occurrence in the restaurant industry, especially in the pizzeria industry. A half & half product lets you mix two recipes, and customise each of them separately. Think of a half & half pizza as a normal size pizza split in two halves, each half having its own ingredients.

<details>

<summary>Example of half & half pizza in an online ordering solution</summary>

![Half & half pizza in an online ordering solution](../../images/004-half-half.png)

</details>

#### Catalogs

#### Orders

The recipe and toppings on each half are passed in 4 option lists: `Side 1`, `Side 2`, `Toppings 1`, and `Toppings 2`. These names should be treated as reserved words. In particular, they should not be translated when used in the API.

<details>

<summary>Example of an order containing a H&H item</summary>

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

</details>

## Conventions for delivery
