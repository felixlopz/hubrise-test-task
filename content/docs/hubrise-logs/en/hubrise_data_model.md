---
title: HubRise Data Model
position: 7
layout: documentation
meta:
  title:
  description:
---

## Order Requests in HubRise

### Data Model

All the orders received by HubRise are logged in the back office. For information on how to access the order logs, see the HubRise documentation. 

The following keys can appear in a HubRise order request. 

<table>
  <tr>
    <td><b>Key</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>private_ref</td>
    <td>The internal ID for the order. It can be used to find an order. </td>
  </tr>
  <tr>
    <td>service_type</td>
    <td>The type of service requested by the customer. Typical values are "delivery", “collection”, “eat_in”.</td>
  </tr>
  <tr>
    <td>service_type_ref</td>
    <td>The code associated with service_type in the EPOS system. </td>
  </tr>
  <tr>
    <td>expected_time</td>
    <td>The date and time the customer expects to receive the order. </td>
  </tr>
  <tr>
    <td>confirmed_time</td>
    <td>The delivery date and time confirmed by the sender. It can be specified in case this is different from the customer’s expected delivery time. </td>
  </tr>
  <tr>
    <td>status</td>
    <td>The status of the order. A few typical values are “new”, “accepted”, “received”, and “rejected”. For a complete list, see the Developers documentation.</td>
  </tr>
  <tr>
    <td>total</td>
    <td>The amount paid by the customer.</td>
  </tr>
  <tr>
    <td>coupon_codes</td>
    <td>The coupon codes used by the customer. </td>
  </tr>
  <tr>
    <td>customer_id</td>
    <td>The unique customer ID. It can be used to fetch the customer’s details from the database. </td>
  </tr>
  <tr>
    <td>items</td>
    <td>The list of items in the order. For more information on each item, see The Item Object.</td>
  </tr>
  <tr>
    <td>payments</td>
    <td>The list of payment methods used by the customer. For more information on each payment method, see The Payment Object.</td>
  </tr>
  <tr>
    <td>deals </td>
    <td>The list of deals present in the order. A deal is a combination of products that have a discounted price when bought together.</td>
  </tr>
  <tr>
    <td>discounts</td>
    <td>The list of discount codes applied to the entire order. A discount is either a percentage or a fixed value that is discounted from the total price of the order.</td>
  </tr>
  <tr>
    <td>loyalty_operations</td>
    <td>The list of operations applied to the customer’s loyalty card. Each object in the list specifies the number of points added or removed and the reason.</td>
  </tr>
  <tr>
    <td>charges</td>
    <td>The list of additional charges applied to the order. Typical cases could be delivery charges, payment fees, taxes, etc. </td>
  </tr>
</table>


### The Item Object

Each item object in the items list contains information about a product purchased by the customer. The following keys can appear in an order Item.

<table>
  <tr>
    <td><b>Key</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>product_name</td>
    <td>The name of the product.</td>
  </tr>
  <tr>
    <td>sku_name</td>
    <td>The sku name of the product, typically indicating the size or colour.</td>
  </tr>
  <tr>
    <td>sku_ref</td>
    <td>The code associated with the product. It indicates the POS code. </td>
  </tr>
  <tr>
    <td>price</td>
    <td>The price of a single product.</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>The quantity ordered.</td>
  </tr>
  <tr>
    <td>subtotal</td>
    <td>The total price of the product (price x quantity). </td>
  </tr>
  <tr>
    <td>options</td>
    <td>The optional changes (ingredients or toppings) associated with the product. </td>
  </tr>
  <tr>
    <td>deal_line</td>
    <td>If the item is part of a deal, it indicates the information about the deal.</td>
  </tr>
  <tr>
    <td>points_earned</td>
    <td>The points earned by the customer with this product. They are counted in the loyalty_operations objects. </td>
  </tr>
  <tr>
    <td>points_used</td>
    <td>The points used by the customer with this product. They are counted in the loyalty_operations objects. </td>
  </tr>
</table>


### The Payment Object

The payments list contains the payment methods used by the customer. In typical cases, only one payment method is present per order. However,  HubRise allows several payment methods simultaneously, for example when a customer pays an order partially with a gift card and partially online.

The following keys can appear in a payment object.

<table>
  <tr>
    <td><b>Key</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>type</td>
    <td>The payment type. Can be "cash", “online”, or “gift_card”.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>The name associated with the payment method.</td>
  </tr>
  <tr>
    <td>info</td>
    <td>The additional information associated with the payment, which depends on the actual payment method. For example, a PayPal payment would include the email address associated with the account; for card payments, it contains all the details about the card. </td>
  </tr>
  <tr>
    <td>ref</td>
    <td>The POS code associated with this payment type.</td>
  </tr>
  <tr>
    <td>amount</td>
    <td>The total amount paid by the customer.</td>
  </tr>
</table>

