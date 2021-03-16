---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: MyOrderBox - Mapping Ref Codes in HubRise
  description: The mapping ref codes page informs users on how to find ref codes on MyOrderBox EPOS to map them on other apps in the context of an integration via HubRise.
---

## Options

Options in MyOrderBox are of two types: `Add-on` or `Reference`

MyOrderBox relies on the following naming convention:

- if an option's name starts with the word `Toppings`, it is sent as a unique `option_ist` in HubRise, with one `option` per `Option Value`. The `option_ist`'s name is "Toppings".
- otherwise the `Option` is sent as a separate `option_list` in HubRise.

If an Option is of the toppings type, its `Option Values` which are made as Default in MyOrderBox are grouped together and sent to HubRise in a new `option_list`, whose name is "Ingredients".

