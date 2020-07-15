---
title: Screenshots Guide
position: 3
layout: documentation
meta:
  title: HubRise Screenshots Guide
  description: How to contribute screenshots to the HubRise website.
---

## Introduction

This guide includes useful information that can be used when contributing screenshots to the HubRise website.

## Illustrative Screenshots

Screenshots should be placed after the first descriptive text in a section.

Screenshots of an interface should not be referred to in documentation unless they represent a specific example. No need for “_This screenshot…_”

Placing a screenshot or animated GIF may be accompanied with “_This example demonstrates_” or “_This example shows…._” if the example demonstrates non-standard behaviour.

## Source Screenshots

When working on a document, store source images in the **Screenshots** folder of the corresponding app in the Drive.

## Image Shooting

Screenshots should ideally be taken on 4K High Definition screens. The width of the website screenshots are being taken on should be reduced to 1200px.

It is not necessary to scale the image in GIMP, Photoshop or other image editors.

Always keep a copy of the initial screenshot in the corresponding app directory for reference.

Screenshots should be taken in both English and French when applicable. Follow the file naming convention and add [screenshot] at the very beginning of the file name of the initial screenshots saved in the Drive for reference. For more information see [Image Naming Convention](#image-naming-convention).

## Image Naming Convention

Named images with the following naming convention Format: **[000]-[en]-2x-[description].[extension]**:

- **[000]** is a three digit number. Not needed for icons, and images that does not require localisation.

- **[en]** is the language acronym. **[en]** for English. **[fr]** for French. No need for the language acronym if we have no text for localisation within the image.

- **2x** to be included only if you screenshots are taken from a HD 4K screen. Screenshots should not be scaled. For more information, see [Image Shooting](#image-shooting).

- **[description]** is a placeholder for a short description.

For example if the image contains text within:

- **001-en-login-example.png**

- **001-fr-login-example.png**

For example if the image contains text within and the screen capture taken on a HD 4K screen:

- **001-en-2x-login-example.png**

- **001-fr-2x-login-example.png**

For example if the image does not contain any text and the screen capture was taken on a HD 4K screen:

- **001-2x-arrow-icon.png**

Also, add [screenshot] at the very beginning of the file name of the initial screenshots saved in the Drive for reference: **[screenshot]\_[000]-[en]-2x-[description].[extension]**.

## Image alt attributes

The image alt attributes should include the name of the app and a brief context, description. No full stop is required even if the description resembles a sentence.

For example: `![Create an account on HubRise](../images/064-en-2x-create-account.png)`
