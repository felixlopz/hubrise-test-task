---
title: Troubleshooting
position: 5
layout: documentation
meta:
  title: HubRise PixelPoint Windows API Troubleshooting Guide
  description: Informs users on how to troubleshoot errors.
---

Analysing the logs associated with an order is the first action to perform when troubleshooting.

In case of problems, start by analysing the PixelPoint Windows API response log, and then dig deeper in the HubRise back office to check the requests coming from the ordering system connected to your HubRise account.

## PixelPoint Response Log

The response log in PixelPoint Windows API is very useful to understand what has gone wrong in the order. As for requests, information in the response logs is encoded in [XML format](/apps/pixelpoint-windows-api/understanding-logs/#an-xml-primer).

The most important piece of information is the `ErrorNum` node. This value is either `0` if the order is successful, or `-1` if there has been an error. The resulting response log will be different depending on this value.

### Successful Orders

If the order is successful, the response log will present the following fields:

- `ErrorNum`: This value is `0` if the order is successful.
- `Transaction`:
  - `Status`: Inside the `Transaction` node, if its value is `3`, the transaction has been closed.
- `Payment`: This node and its subnodes are only present if the payment is completed online.
  - `Status`: Inside the `Payment` node, if its value is `3`, the payment has been processed.

### Failed Orders

- `ErrorNum`: This value is `-1` if there has been an error.
- `Exception`: If it is present, it gives information about internal errors in the PixelPoint system.
- `SubErrorNum`: If it is present, it provides the HTTP error code of the associated request.
- `EOITransfer`: If it is present, it gives additional information in plain English about the error.

## Typical Error Cases

### Wrong API Token

A wrong API token used in the PixelPoint Windows API is generally associated with the following error in the response body.

```
<ErrorNum>-1</ErrorNum>
<SubErrorNum>401</SubErrorNum>
<EOITransfer>
   <EOIMessage>Access Token Denied</EOIMessage>
</EOITransfer>

```

### Connection Issues with the Store

If there are issues with the connection to the store, the following error appears in the response body.

```
<ErrorNum>-1</ErrorNum>
<SubErrorNum>401</SubErrorNum>
<EOITransfer>
   <EOIMessage>Order Rejected. Reason: Store is disconnected</EOIMessage>
</EOITransfer>

```

## HubRise vs PixelPoint Requests

Possible issues can be due to a mismatch of configuration between the PAR PixelPoint POS and HubRise. To verify this, you need to compare the requests on HubRise with those on PixelPoint Windows API. The information about an order that appears in the PixelPoint Windows API logs is also visible in the HubRise back office, under **DATA** > **ORDERS**.

PixelPoint requests are in [XML format](/apps/pixelpoint-windows-api/understanding-logs/#an-xml-primer), while the HubRise API uses JSON. One of the duties of the app is to translate one format into the other.

Besides, they also use different keys to refer to the same value. When investigating a problem with support teams, you might want to use their respective API key to avoid confusion.

A table has been created to help map keys from HubRise to PixelPoint. For more information, see [HubRise vs PixelPoint Terms](/apps/pixelpoint/hubrise-pixelpoint-terms/).

## PAR PixelPoint Support

Slowey Systems PAR PixelPoint support team can be contacted at [support@slowey.ie](mailto:support@slowey.ie) for issues with the configuration of the EPOS.
