---
title: Configuration
position: 3
layout: documentation
meta:
  title: Aquila Connection to HubRise Configuration
  description: Instructions on how to configure Aquila for optimal connection to HubRise and other platforms.
---

Once your Aquila site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in HubRise, some configuration on the Aquila side may be needed. This is particularly true for the connection with an EPOS.

To properly process orders from Aquila to your EPOS, product codes are required for each and every item included in the Aquila **Catalog**.

Products and POS codes can be set up from in the Aquila backend using the main menu on the left, by navigating to **Catalog**, then selecting **Products**. Once a product is created, the **Code cannot be changed. If a change of code is required, a new product with the new code must be created and the old one deleted.

Your Aquila menu can either be created directly in Aquila, or imported from the EPOS as described in [Getting Started](/apps/aquila/getting-started/). To properly process orders from Aquila to your EPOS, product codes are required for the following menu items:

- **Product Category** values including:
  - **Variants**: Variants are available differences in a product. For example: Pizza with thin crust versus pizza with hand tossed crust.
  - **Toppings**: Ingredients that customers can add to their product that are not available by default. For example, adding mushrooms to a cheeseburger. Toppings can be set at the product category or the product level.
  - **Options**: Options are differences in how products are delivered. For example: Adding utensils, sauces, cutting a pizza in squares instead of triangles, etc.
- **Products** and its attributes including:
  - **Ingredients**: Default ingredients within a recipe that customers can remove from their product. For example: Cheeseburger without the pickles.
  - **Price & Availability**: The options made available to the customer, usually in the form of sizes. For example: an 8" pizza versus a 12” pizza.
  - **Toppings**: Ingredients set at the product category or the product level.
- **Deals**: Deals offer customers savings based on an order. For example, if they order a pizza for €9 and a soda for €2 separately, it would be €11. A combo deal might offer customers if they buy a pizza and soda together it would be €9.

In some cases, the EPOS will also require codes to understand some of the Aquila functionalities. Always refer to your EPOS documentation on the HubRise website for details.

- **Payment Methods**: How customers can pay for their orders.
- **Service Types**: These define how orders are handled such as Delivery, Collection and Eat-In.
- **Delivery charge**: Delivery charges might apply.

----------

**IMPORTANT NOTE**: It is important that each POS code field available in Aquila be mapped with the EPOS product codes. If the POS code is missing, the EPOS will not be unable to correctly process the order.

----------

The POS codes in Aquila can be updated in two ways: manually by creating a new product in Aquila's back office, or imported from the EPOS through a HubRise Catalog import.