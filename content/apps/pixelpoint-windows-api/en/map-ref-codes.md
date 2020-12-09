---
title: Map the Ref Codes
position: 3
layout: documentation
meta:
  title: Mapping the EPOS Ref Codes on HubRise PixelPoint Windows API
  description: Informs users on how to find EPOS ref codes on the PAR PixelPoint EPOS to map them on other apps, in the context of an integration with HubRise via the PAR PixelPoint Windown API integration.
---

PixelPoint Windows API pushes but is not able to pull information stored in the PAR PixelPoint EPOS. For this reason, all menu items and prices must be manually set in the system to connect with their corresponding product code to ensure a smooth communication between HubRise and PixelPoint.

Every order received in HubRise is forwarded to the EPOS via PixelPoint Windows API. For the transaction to work, products within the catalog, service types (delivery, collection, eat-in) and payment methods should to be mapped.

For a detailed description of how to map the EPOS ref codes in the system connected to HubRise, see [Mapping Ref codes](/apps/pixelpoint/map-ref-codes).

## Integrating with Deliveroo

If you plan to integrate your PAR PixelPoint EPOS with Deliveroo, the ref codes on your EPOS must match those on Deliveroo.

To ensure a smooth integration between PixelPoint Windows API, HubRise, and Deliveroo, follow these steps:

1. Request a spreadsheet with your Deliveroo menu from your Deliveroo account manager.
1. Send a copy of the spredsheet to Slowey Systems at [support@slowey.ie](mailto:support@slowey.ie). They will check that all the ref codes on Deliveroo match those in your PAR PixelPoint EPOS, and they will contact you in case of errors.
1. Correct any mismatch in your Deliveroo menu before the integration goes live. To learn how to modify the ref codes on Deliveroo, see the [Deliveroo documentation](/apps/deliveroo/map-ref-codes/).
