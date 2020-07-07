---
title: Screenshots Guide
position: 3
layout: documentation
meta:
  title:
  description:
---

## Illustrative Screenshots

Screenshots should be placed after the first descriptive text in a section.

By default, screenshots should not be referred to in documentation unless they represent a specific example.  For example:  placing a screenshot of an interface does not require “*This screenshot…*”

Placing a screenshot or animated GIF of may be accompanied with “*This example demonstrates*” or “*This example shows….*” if the example demonstrates non-standard behavior.

When working on a document, store images in the directory Screenshots in the same directory as the document you are working on.  

## Image shooting

Screenshots should ideally be taken on 4K High Definition screens. The width of the website screenshots are being taken on should be reduced to 1200px. It is not necessary to scale the image in GIMP, Photoshop or other image editors.

Always keep a copy of the initial screenshot in the Drive for reference.

When applicable, always make an **[en]** and and **[fr]** copy simultaneously.

## Image naming convention

All images are named with the following naming convention Format: **[000]-[en]-2x-[description].[extension]**:

* **[000]**- A three digit number. Not needed for icons, and images that does not require localisation.

* **[en]**- A language acronym. **[en]** for English. **[fr]** for French. No need for the language acronym if we have no text for localisation within the image. For localized screenshots, the three digit number and name should stay the same, with only the language acronym changing.

* **2x**- if you screenshots are taken from a HD 4K screen. Screenshots should not be scaled.

* **[description]** - A short description

For example if the image contains text within:

* **001-en-login-example.png**

* **001-fr-login-example.png**

For example if the image contains text within and the screen capture taken on a HD 4K screenshot:

* **001-en-2x-login-example.png **

* **001-fr-2x-login-example.png**

For example if the image does not need to be localised and the screen capture was taken on a HD 4K screen:

* **2x-arrow-icon.png**

You can add [screenshot] at the very beginning of the file name of the initial screenshots saved in the Drive for reference: **[screenshot]_[000]-[en]-2x-[description].[extension]**. 

## Image alt attributes

The image alt attributes should include the name of the app and a brief context, description. No full stop is needed if the description resembles a sentence.  

For example: ```![Create an account on HubRise](../images/064-en-2x-create-account.png)```
