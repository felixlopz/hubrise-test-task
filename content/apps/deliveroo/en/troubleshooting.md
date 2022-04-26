---
title: Troubleshooting
position: 8
layout: documentation
meta:
  title: Troubleshooting | Deliveroo Bridge | HubRise
  description: Troubleshooting Deliveroo Bridge connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Publish the menu

### Invalid site assignment

When you publish the menu, you may see the following error in the Deliveroo Bridge response:

```
{
  "error": "invalid site assignment: one or more sites IDs are missing from the current site_ids array. Before removing a site from a menu, please reassign the site to another menu to avoid this error. Invalid site_ids: XXXXX"
}
```

This error is a bug in Deliveroo that they are working on. The temporary workaround is to create a new menu in Deliveroo.

To create a new menu, follow these steps:

- In Deliveroo Bridge, open the **Configuration** tab.
- In the **Menu** section, choose a new name for the **Menu ID**. This name must be different from the name of the menu that caused the error.
- Click **Save**.
- Open the **Actions** tab and publish the menu.

If you are still having issues after attempting the workaround, contact [support@hubrise.com](mailto:support@hubrise.com).
