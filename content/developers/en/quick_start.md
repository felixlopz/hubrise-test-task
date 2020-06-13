---
title: Quick Start
position: 1
layout: documentation
meta:
  title:
  description:
---

## Overview

This guide will help you to get to know the HubRise API. At the end of the process, you will know how to send an order to HubRise. And the best part is that you will not have to write a single line of code!

## Getting Started

### Create a HubRise Account

First of all, you need to [create a HubRise account](). It is free, and only takes a few minutes!
This account will be the first user of your application, and will be useful for testing during the development process.

### Set up Postman

Postman is an API development environment that makes sending API requests very easy. 

- Download and install [Postman](https://www.getpostman.com/).
- Download the [HubRise API Postman Bundle]() and import the folder into Postman.


### Create the OAuth Client

Then, you need to create an OAuth 2.0 client for your application. 
- Log in to the [HubRise back office](https://manager.hubrise.com/).
- Go to **SETTINGS > DEVELOPER**, then click on **Create an OAuth 2.0 client**.
- Enter a name for your application, then click the **Create** button.

Download the client secret JSON, which should look like:

```json
{
  "client_id": "459691768564.clients.hubrise.com",
  "client_secret": "c9ba1790673172ddcdee071c551d98dee4d0d6fc696c"
}
```

The client's **id** and **secret** uniquely identify your application. You will generally need to create a single client for your application: The same client can be used by several HubRise accounts.

## Request the Account's Authorisation

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

![User code](../images/001-en-generate-user-code.png)

This is the **user code**: copy it and head to the next section. 

## Generate the Access Token

You now have three codes:

- The client id
- The client secret
- The user code

With these, you can generate your access token with Postman.

An access token is how you authenticate the requests you send to HubRise.
Basically, you want your application (_client id_) to be authorised (via the _client secret_) to send requests to HubRise on behalf of the account owner (_user code_), and you do this via an _access token_.

### Set up Variables in Postman

In Postman, select the **HubRise API** environment and enter the values for `client_id`, `client_secret` and `user_code`. 

![Screenshot of Postman](../images/002-postman-environment.png)

### Send the Request

Select the **Generate Access Token** request and click the **Send** button. 

Postman will send the following request to the API:

```json
POST https://manager.hubrise.com/oauth2/v1/token?code={{code}}&client_id={{client_id}}&client_secret={{client_secret}}
```

If the request is successful, Postman will automatically create the `hubrise_access_token` variable in the environment.

All the following requests in Postman will use the `X-Access-Token` header with this access token.

## Create Your First Order

Now you are ready to send valid requests to HubRise and to create new orders.

In Postman, play the **Create Order** endpoint. If the request is successful, you should see a new order in the [HubRise back office](https://manager.hubrise.com/orders).

## Experiment with the API

The Postman collection contains other typical requests to obtain the account's information, create and update customers, and update order statuses.