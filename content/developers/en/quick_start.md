---
title: Quick Start
position: 1
layout: documentation
meta:
  title:
  description:
---

## Overview

This guide will help you to get to know the HubRise API. At the end of the process, you will know how to send an order to HubRise.

## Things you need

First of all, you need to [create a HubRise account](). It is free, and only takes a few minutes!
This account will be the first user of your application, and will be useful for testing during the development process.

Then, you need to create an OAuth 2.0 client for your application. 
- Log in to the [HubRise back office](https://manager.hubrise.com/).
- Go to **SETTINGS > DEVELOPER**, then click on **Create an oAuth 2.0 client**.
- Enter a name for your application, then click the **Create** button.

Download the client secret JSON, which should look like:

```json
{
  "client_id": "459691768564.clients.hubrise.com",
  "client_secret": "c9ba1790673172ddcdee071c551d98dee4d0d6fc696c"
}
```

The client's **id** and **secret** uniquely identify your application. You will generally need to create a single client for your application: The same client can be used by several HubRise accounts.

## Request the account's authorisation

In order for your application to access a HubRise account's information, you need the authorisation from the account's owner. 

You, as the owner of your test HubRise account, must authorise access to your own application.

Open a web browser with the URL and make sure you copy the `client_id` from the secret JSON you downloaded before in place of `THE-CLIENT-ID`:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=urn:ietf:wg:oauth:2.0:oob&
  client_id=THE-CLIENT-ID&
  scope=location[orders.write,customer_list.write,catalog.read]
```

HubRise will then:
- Authenticate the user.
- Ask to choose the location, account, catalog and customer list to connect.
- Obtain consent to access the requested scope. 

If everything goes well, you should see a page similar to the following. 

![User code]()

This is the user's code that you will need in the next step.

## Obtain an access token

An access token is how you authenticate the requests you send to HubRise. To obtain an access token, you need:

- The client id
- The client secret
- The user's code

Basically, you want your application (_client id_) to be authorised (via the _client secret_) to send requests to HubRise on behalf of the account owner (_user's code_).
