---
title: Payment
position: 10
layout: documentation
meta:
  title: Payment | HubRise
  description: How to manage payments and quotes on HubRise.
---

Accounts and Locations setup with a paid plan will pay a monthly subscription to HubRise when it exceeds the free [usage](/docs/usage-plan#usage-plans) limitation. For complete pricing information, see the [HubRise Price page](/pricing/).

You can set up your payment method in the **SETTINGS** > **Payment** section.
You must have a credit card to automate payments. Direct debit is not available. Wire transfer is accepted for a minimum of 12 months usage.

All payments are made in EUR, even if the Account currency setting is different.

## Account or Location Payments

You can pay your HubRise subscription at the Account level, or at the Location level.

Account level payments are the default and preferred choice. If you have multiple Locations, you can set up a single payment method and manage a single invoice for all your Locations.

However, if you have specific billing requirements or other business needs, you can set up a different payment method at the Location level. 

### Switching To Location Level Payment

To set up a Location level payment for a specific Location, follow these steps:

1. If you have access to multiple Accounts, select the **Account** containing the specific Location.
1. Select the Location from the **Location** list.
1. Go to **SETTINGS**.
1. Under **Payment**, click **Make the location pay**.
   ![Switch to Location level payment](../images/071-en-make-location-pay.png)

### Switching To Account Level Payment

To set up an Account level payment for a specific Location, follow these steps:

1. If you have access to multiple Accounts, select the **Account** containing the specific Location.
1. Select the Location from the **Location** list.
1. Go to **SETTINGS**.
1. Under **Payment**, click **Make the account pay the subscription**.
   ![Switch to Location level payment](../images/072-en-make-account-pay.png)

## Billing Cycles

Billing Cycles are always a month in duration, and start on the same calendar day as the Account is created. The start date of the Billing Cycle cannot be changed.

For example, if you open your HubRise Account on March 17, your Billing Cycle goes from that day to April 16.
The next billing date is April 17, and you will always be billed on the 17th of every following month.

If you have set up a Location level payment for a specific Location, the Location Billing Cycle will match the Account Billing Cycle.
If the current billing date for the Location is different from that of the Account, the following situations can happen:

- If the Location next billing date is before the Account next billing date, you immediately receive a prorated charge to align the Location next billing date to the Account's.
- If the Location next billing date is after the Account next billing date, nothing changes until the Account next billing date. At that point, you receive a prorated charge and the Location next billing date aligns with the Account's.

## Billing Information

Depending on your setup, you might want to edit or verify your billing information at Account level or Location level. For more information, see [Account or Location Payments](/docs/payment#account-or-location-payments).

### Billing Information at Account Level 

To edit or verify your billing inormation at Account level, follow these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com/login).
1. Click on **SETTINGS**.
1. For billing details at Account level, verify that **All locations** is selected. 
1. In the **Account** section, click **Modify account**.
1. Fill in the information required under **Billing details**. It is a legal requirement to include the Intra-Community VAT number.
1. Click **Update**.

### Billing Information at Location Level

1. Log in to your [HubRise account](https://manager.hubrise.com/login).
1. Click on **SETTINGS**.
1. For billing details at Location level, select the Location from the **Location** list.
1. In the **Location** section, click **Modify location**.
1. Fill in the information required under **Billing details**. It is a legal requirement to include the Intra-Community VAT number.
1. Click **Update**.

## Add a Payment Method

To add or update a payment method at the Account level, follow these steps:

1. Go to **SETTINGS**.
1. If you have access to multiple Accounts, select the **Account**, then scroll down to the **Payment** section.
   ![Add payment method at the Account level](../images/073-en-add-account-payment.png)
1. If there is no existing payment method, click **Add payment method**. If there is a previously set method, click **Change your payment method**.
1. Enter your credit card information. Credit cards must be valid to be accepted.
1. When finished, click **Save**.

To add or update a payment method at the Location level, follow these steps:

1. Go to **SETTINGS**.
1. If you have access to multiple Accounts, select the **Account** containing the specific Location.
1. Select the Location from the **Location** list, then scroll down to the **Payment** section.
   ![Add payment method at the Location level](../images/072-en-make-account-pay.png)
1. If there is no existing payment method, click **Add payment method**. If there is a previously set method, click **Change your payment method**.
1. Enter your credit card information. Credit cards must be valid to be accepted.
1. When finished, click **Save**.

## Process Pending Quotes

When you change your plan, the payment must be authorized before the credit card can be charged. Admin users will receive notifications reminding them to complete the payment process. For more information on notifications, see [Plans Notifications](/docs/usage-plan/#plan-notifications).

To process a payment from the notification:

1. Connect to your HubRise back office.
1. Make sure a credit card is saved on your Account or Location. If not, see the instructions in [Add a Payment Method](#add-a-payment-method).
1. Click **View the earliest quote**, then click **Pay**. To check on all unpaid quotes, click **Check your account** from the notification.

---

**Related FAQ**: <Link to="/docs/faqs/free-plan-quota-exceeded-what-happens/">What Happens If My Free Plan Quota Is Exceeded?</Link>, <Link to="/docs/faqs/quota-exceeded-one-location-how-do-i-pay/">My Quota is Exceeded and I Have One Location. How do I Pay?</Link>, <Link to="/docs/faqs/quota-exceeded-multiple-locations-with-different-payment-methods-how-do-i-pay/">My Quota is Exceeded and I Have Multiple Locations with Different Payment Methods. How do I Pay?</Link>, <Link to="/docs/faqs/pause-plan-during-setup-and-test-phases/">Can My Plan Be Paused During Setup and Test Phases?</Link>

---


## Payment History

Admin users receive payment notifications and invoices via email. Invoices are also available for download from the HubRise back office. 

To view your payments history: 

1. Go to **SETTINGS**.
1. If you have access to multiple Accounts, select the **Account** you are interested in.
1. If payment is done at Account level, verify that **All locations** is selected. If payment is done at Location level, select the Location from the **Location** list.
1. Under **Payment**, click on **Payment history**. Payments are listed in reverse historical order, with the most recent payments displayed first. 

The first time you make a payment, the payment is listed as an upgrade. Subsequent payments will be listed for the date of the [billing period](docs/payment#billing-cycles). Once you have a valid payment method saved, payments are automated.

The payment history for locations will display invoices paid by the Account and its Location.
Payment history for Accounts will group Location payments for the date.

![Payment history example](../images/044-en-payment-history.png)

Details within each invoice can be viewed directly on the HubRise back office by clicking on the date. Invoices can also be saved as a PDF file by selecting the download icon <InlineImage width="15" height="14">![Download icon](../images/058-download.png)</InlineImage>.
   
Each payment will display:

- **Date**: The date the payment was made.
- **Amount excl. VAT**: The amount of the payment excluding value-added tax (VAT). HubRise being headquartered in France, VAT only applies to companies based in France.
- **Description**: The purpose of the charge.
- **Payment Method**: The specific payment method used for this charge.

![Invoice example](../images/043-en-2x-invoice-example.png)

