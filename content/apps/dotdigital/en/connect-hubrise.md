---
title: Connection to HubRise
position: 2
layout: documentation
meta:
  title: dotdigital Connection to HubRise
  description: Instructions for connecting dotdigital to HubRise
---

Connecting dotdigital to HubRise requires valid credentials to access the dotdigital API.
These can be obtained from the dotdigital back office, by creating an API managed user.

## Create an API Managed User

To create an API managed user on dotdigital, follow these steps.

1. Login to your dotdigital back office.
1. Click on the gear icon <InlineImage width="20" height="20">![Gear icon](../images/gear-icon.png)</InlineImage> on the bottom left corner of the page.
1. Select the **API users** tab, then click on the **New user** button.
1. Fill in the fields in the **Manage users** page:
   - The **Email address** field will be autopopulated for. It will be of the form `apiuser-xxxxxxxxxxxx@apiconnector.com`, where the `x`'s represent a random id code.
   - Provide an optional **Description** to identify the user (for example, _HubRise credentials_).
   - Choose a **Password** and confirm it.
   - Make sure that the **Enabled** status is selected.
   - Take note of both the email address and the password, as you will need them to authenticate in the dotdigital Bridge.
1. Once you are finished, click on the **Save** button.

Your API managed user will now appear in the list.

## Connect the dotdigital Bridge to HubRise

To connect dotdigital to HubRise, you first need to log in to your HubRise account.
If you don't have a HubRise account, go to the [HubRise Signup Page](https://manager.hubrise.com/signup) and follow the instructions.

1. Select **CONNECTIONS** from the HubRise back office, then **View available apps**.
1. Select **dotdigital** from the list of apps.
1. Click **Connect**.
1. Grant dotdigital permission to access the location of your restaurant registered in HubRise.
   1. If your account has not yet been created on HubRise, select **Create a new location**.
   1. For accounts with multiple locations, expand the **Choose location** section to select the correct one and click on **Allow**.

You have now added dotdigital to your HubRise apps.
