---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connecting the HubRise PixelPoint Bridge with HubRise
  description: Informs users on how to connect the PixelPoint Brigde created by HubRise to HubRise. Once this connection is actived, your PAR PixelPoint EPOS solution will pull information from HubRise.
---

PixelPoint Bridge connects a PAR PixelPoint EPOS to a HubRise location. Therefore, you must set up a connection for each of the locations you want to connect to PixelPoint.

To connect PixelPoint to a specific location:

1. Open your HubRise back office, click the down arrow <InlineImage width="28" height="21">![Down arrow icon](../images/007-arrow.jpg)</InlineImage> next to **Location** to select the location you want to connect. For help, check the HubRise User Guide > [Accounts](/docs/account) and [Locations](/docs/locations).

1. Select **CONNECTIONS** > **View available apps**.

1. Scroll down and select PixelPoint Bridge from the list of apps.

1. Click **Connect**.

1. Allow PixelPoint permission to access your location registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one and click on **Allow**. If you have multiple customer lists, you will also be prompted to confirm the one you wish to use.

1. You will be redirected to the PixelPoint Bridge user interface. The first time you connect, the **Configuration** page will appear:

   - In the **API token** field, enter your unique API token to be provided by the PAR PixelPoint support team.
   - Leave **Debug mode** unselected.
   - Click **Save**.

1. You have now connected PixelPoint to your HubRise location.

---

**IMPORTANT NOTE:** The API token you provide during the setup process is only stored in the PixelPoint back office and used for all the API calls to the EPOS. The system does not check the validity of the API token. For information on error handling, see the Troubleshooting section.

---
