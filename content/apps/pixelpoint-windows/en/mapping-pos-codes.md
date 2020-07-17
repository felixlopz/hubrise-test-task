---
title: Configuration
position: 3
layout: documentation
meta:
  title: Configuration
  description: Informs users on how to Map POS Codes.
---

## Mapping the EPOS codes

**PixelPoint Windows API** pushes but is not able to pull information stored in the **PAR PixelPoint EPOS**. For this reason, all menu items and prices must be **manually** set in the system to connect with their corresponding product code to ensure a smooth communication between HubRise and PixelPoint.

Every order received in **HubRise** is forwarded to the **EPOS** via the **PixelPoint Windows API**. Each request is saved locally in the server and can be inspected to find possible issues with the configuration. 

For a detailed description of how to map the EPOS codes in the system connected to HubRise, see **Section** in **PixelPoint Bridge documentation**.
