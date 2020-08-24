---
title: Troubleshooting
position: 5
layout: documentation
meta:
  title: LivePepper Connection to HubRise Troubleshooting
  description: Instructions on how resolve connection issues.
---

From time to time it may be necessary to troubleshoot the connection between Mailchimp and HubRise.

## Verify the Connection Between HubRise and Mailchimp

When your contacts are not synced with Mailchimp, the first step is to verify that Mailchimp is connected.

1. Log in to you HubRise back office.
1. Select **CONNECTIONS**.
1. The Mailchimp Bridge will appear if it is connected to your HubRise location.

If Mailchimp does not appear, follow the steps to [connect](/apps/mailchimp/connect-hubrise) your HubRise location to your Mailchimp account.

## Verify that Contacts are pushed to Mailchimp

In the even that your HubRise contacts do not synch with Mailchimp, you should verify that the contacts are pushed to Mailchimp.

Depending on your [configuration](/apps/mailchimp/configuration) options, contacts may be used to Mailchimp either on the creating of a new customer or when a new order is placed. To verify that the contacts are successfully pushed to Mailchimp:

1. Log in to your HubRise back office.
1. Select **CONNECTIONS**.
1. Find the Mailchimp location and select **Actions** > **Logs**.
1. Here you will be able to see the logs of the activities.
1. Clicking on the activity opens a drop-down with both the **Request** and **Response** logs of the activity.

For a successful data transfer to have taken place, a status code of 200 will appear. If the data transfer was unsuccessful, another code will appear.

An alternative way of inspecting the logs is to:

1. Log in to your HubRise back office.
1. Select **CONNECTIONS**.
1. Find the Mailchimp location and click **Open**.
1. A new window will open with the latest activity on the Mailchimp connection, click on any of the latest activities. You will be able to see the date and time of the activity, the direction of the data transfer and the status.
1. Clicking on the activity again, will open more details of the activity, where you can establish whether the transfer was successful.
1. A status of `OK`, or status code of `200`, indicates that the transfer was successful.

In the event that the status is not OK, a code will be given. In the **Request** and **Response** drop-downs you will obtain more information of the transfer. More specifically, and if an error occurred, you will see more details of the error in the **Response** drop-down.

The information contained in the **Request** and **Response** logs are in JSON format. For more information on reading and understanding JSON documents, you can look at the [HubRise Documentation](/docs/hubrise-logs) on logs.
