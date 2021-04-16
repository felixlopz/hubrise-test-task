---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | MyOrderBox | HubRise
  description: Instructions on mapping MyOrderBox product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

---

**IMPORTANT NOTE:** Documentation in progress.

---

## Options

Options in MyOrderBox are of two types: `Add-on` or `Reference`

MyOrderBox relies on the following naming convention:

- if an option's name starts with the word `Toppings`, it is sent as a unique `option_ist` in HubRise, with one `option` per `Option Value`. The `option_ist`'s name is "Toppings".
- otherwise the `Option` is sent as a separate `option_list` in HubRise.

If an Option is of the toppings type, its `Option Values` which are made as Default in MyOrderBox are grouped together and sent to HubRise in a new `option_list`, whose name is "Ingredients".
