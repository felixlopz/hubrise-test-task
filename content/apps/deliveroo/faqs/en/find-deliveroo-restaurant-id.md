---
title: How Do I Find My Deliveroo Restaurant ID?
position: 2
layout: documentation
meta:
  title: Find My Restaurant ID | Deliveroo FAQs | HubRise
  description: Instructions on how to find your Deliveroo Restaurant ID to connect your restaurant and start receiving orders on HubRise.
---

The Restaurant ID is the unique identifier for your Deliveroo store. It is also referred to as Branch ID, Admin ID, Tablet ID, or Location ID, depending on the context.
This ID is in numeric characters only and includes 6 or sometimes 5 digits.

To find your Deliveroo Restaurant ID, follow these steps.

## Option 1

From your Deliveroo tablet:

1. Tap the navigation button on the top right of the page.
1. Your ID is the number between brackets, next to the restaurant name.

## Option 2

On your browser:

1. Log in to your [Deliveroo back office](https://restaurant-hub.deliveroo.net/).
1. Go to the **Home** tab, then select the correct location and account from the dropdown menus.
1. Look at the URL of the page, and find the parameter called `branchId`. Your Deliveroo Restaurant ID will be the number after the `=` sign. For example, if the URL is `https://restaurant-hub.deliveroo.net/analytics?branchId=278233&dateRangePreset=last_7_days&orgId=190921`, the Deliveroo Restaurant ID is `278233`.

![Deliveroo Restaurant ID in the URL of the back office](../../images/011-en-deliveroo-branchid.png)

If you cannot find your Restaurant ID, contact your Deliveroo Account Manager.

## Option 3

For the most IT savvy, the Restaurant ID can also be found in the store source code.

To find the Restaurant ID in the website source code, follow these steps:

- Go to your store URL link, the restaurant page on the Deliveroo website. 
- Right-click on the page and select **View Page Source** on your web-browser.
- On the source code page, search for `"restaurant":{"id":`.

> For example, the Camile Thai restaurant in Clapham indicates `77430` Restaurant ID in the website page source code [https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham](https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham).

