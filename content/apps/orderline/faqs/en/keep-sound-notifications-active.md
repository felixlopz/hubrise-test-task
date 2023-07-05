---
title: How Do I Keep Sound Notifications Active?
position: 4
layout: documentation
meta:
  title: Keep Sound Notifications Active | OrderLine | HubRise
  description: How to keep sound notifications active for OrderLine on your desktop browser.
---

By default, some web browsers do not activate sound notifications upon opening OrderLine. Instead, a red pop-up will appear requesting you to manually activate the sound on this tab. This behaviour is documented in the [Sound Notifications Disabled Popup](/apps/orderline/troubleshooting/#sound-notifications-disabled-popup) section of the Troubleshooting page.

If you're using OrderLine on a Windows device, you can follow these steps to always keep your sound notifications enabled.

**Chrome:**

1. Right-click on the Google Chrome icon on your desktop.
2. Select the **Properties** option from the context menu.
3. In the **Target** field, add `--autoplay-policy=no-user-gesture-required` at the end of the line, after chrome.exe.
4. Click **Apply** and then **OK** to save the changes.

**Firefox:**

1. Type `about:config` in the address bar and press Enter.
2. Click **Accept the Risk and Continue** if a warning page appears.
3. In the search box, type `media.autoplay.default`.
4. Set its value to **0** to enable autoplay.

**Safari:**

1. Open Safari and go to **Preferences**.
2. Go to the **Websites** tab and then select **Auto-Play** in the left sidebar.
3. Choose **Allow All Auto-Play** for www.orderline.com.

Remember to save the changes you've made to the browser's settings.
