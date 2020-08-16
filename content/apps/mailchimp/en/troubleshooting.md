---
title: Troubleshooting
position: 4
layout: documentation
meta:
  title: LivePepper Connection to HubRise Troubleshooting
  description: Instructions on how resolve connection issues.
---

From time to time it may be necessary to troubleshoot the connection between Mailchimp and HubRise. 

When your contacts are not synced with Mailchimp, the first step is to verify that Mailchimp is connected.

## Verify the Connection Between HubRise and Mailchimp

1. Log in to you HubRise back office.
1. In the left navigation pane, select **Connections**.
1. On the **Connections** page that opens, Mailchimp will appear if it is connected to your HubRise location.

If Mailchimp does not appear, follow the steps to [connect](/apps/mailchimp/connect-hubrise) your HubRise location to your Mailchimp account.

In the even that your contacts are not pushed to Mailchimp, you should verify that the contacts are indeed pushed to Mailchimp.

## Verify that Contacts are pushed to Mailchimp

Depending on your [configuration](/apps/mailchimp/configuration) options, contacts may be used to Mailchimp either on the creating of a new customer or when a new order is placed. To verify that the contacts are successfully pushed to Mailchimp:

1. Log in to your HubRise back office.
1. In the left navigation pane, select **Connections**.
1. On the connections page, in the Mailchimp section, select the **Actions** drop-down.
1. Select **Logs**.
1. Here you will be able to see the logs of the activities.
1. Clicking on the activity opens a drop-down with both the **Request** and **Response** logs of the activity.

In the event that the Status is not OK, a code will be given. In the **Request** and **Response** drop-downs you will obtain more information of the transfer. More specifically, and if a error occurred, you will see more details of the error in the **Response** drop-down.

An alternative way of inspecting the logs is to:

1. Log in to your HubRise back office.
1. In the left navigation pane, select **Connections**.
1. On the connections page, in the Mailchimp section, select **Open**.
1. A new window will open with the latest activity on the Mailchimp connection.
1. In the activity window you will be able to click on any of the latest activities. 
1. When clicked, you will be able to see the date and time of the activity, the direction of the data transfer and the status.
1. Clicking on the activity again, will open more details of the activity, where you can establish whether the transfer was successful.
1. A status of OK, or status code of 200, indicates that the transfer was successful.

The information contained in the **Request** and **Response** logs are in JSON format. For more information on reading and understanding JSON documents, you can look at the [HubRise Documentation](/docs/hubrise-logs) on logs. 




