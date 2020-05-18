---
title: JSON Requests in HubRise
position: 6
layout: documentation
meta:
  title:
  description:
---

## Communication Mechanisms

HubRise allows easy sharing of data between different applications by exchanging API requests. This communication mechanism always involves a second application that either sends data to or receives data from HubRise. All these exchanges are recorded in the HubRise back office and the complete logs can be inspected and debugged. For information on how to find the logs in the back office, see the HubRise documentation. 

The typical lifecycle of such an exchange involves three components:

* Request

* Response

* Callback(s)

The request is the first part of an exchange of data, and is always sent by a connected application to HubRise. The response is the second part of this exchange, where HubRise acknowledges or not the receipt of this message. 

The typical case is the creation of an order in an app connected with HubRise. When an order is created, the app generates a request and sends the order details to HubRise with it. Then, HubRise can acknowledge the successful receipt of the order and send back a response with this information. 

Finally, a request can automatically trigger other requests to different apps. For example, an order creation request can trigger a request to a loyalty solution to obtain information about the customer. These automatic requests are callbacks, and each of them has a request and a response. Callbacks are always sent by HubRise to a third-party application. 

## Logs and Requests in HubRise

In the HubRise back office, each subsection in **DATA** provides more information through their log page. 

For example, each order in the **ORDERS** page can be expanded to reveal more information about it. The **Logs** section, in particular, lists all the API requests associated with the order. 

For each request, the following information is displayed.

* **DATE**: The date and time of the request.

* **ORIGIN**:  The connected application that started the request.

* **ENDPOINT**: The endpoint of the request.

* **CODE**: The response code.

Each row can be further expanded to reveal detailed information about the request, the response, and possible callbacks associated with it.

## A Typical HubRise Request

### Endpoint

The method and the URL together are the endpoint of the request. Although they are really a single entity, and they appear as such in the HubRise back office, these two components will be analysed separately in the next two sections.

### Method

The HTTP method of the request is the action that needs to be performed with the data contained in the request. The typical methods found in HubRise requests are the following.

<table>
  <tr>
    <td><b>HTTP Method</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>GET</td>
    <td>It is used to retrieve information, typically the details about an order or a customer. </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>It is used to create new information, typically a new order.</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>It is used to completely replace information already present in the system with the data carried by the request.</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>It is used to partially replace information already present in the system with the data carried by the request.</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>It is used, for example, by passive callbacks to delete existing events.</td>
  </tr>
</table>


### URL, Domain and Path

The URL of the request specifies the address where the request is sent. URLs have typically the following form. 

```
https://api.hubrise.com/v1/location/orders
```

They are composed of two parts: Domain and path. 

The domain is the first part of the URL, in this case:

```
https://api.hubrise.com
```

It specifies the location of the server dealing with the request. 

The path is the second part of the URL, in this case:

```
/v1/location/orders
```

Together with the HTTP method, it specifies the action that must be performed with the data contained in the request. 

### Headers

The headers are the metadata that accompany each request. The most important piece of information for debugging purposes is the following. 

* Authentication token: The unique code assigned to the client by HubRise.

It appears in each request under the **X-Access-Token** key, and is partially hidden for security reasons. 

### Body

The body is the JSON content of the request. For an example of a JSON content, see [A Practical Example](#heading=h.7990gcqp8hab). 

For more details about the JSON content of the requests in HubRise, see [HubRise Data Model](#heading=h.h13r3c4ulho0).

## A Typical HubRise Response

### Code

The response code tells the outcome of the request. The code 200 indicates a successful request, while other codes are related to various types of errors. The following table highlights the main errors. For possible troubleshooting strategies depending on the code, see [Troubleshooting Requests](#heading=h.iql60f5rzbt5). 

<table>
  <tr>
    <td><b>Response Code</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>200</td>
    <td>The request has been successfully received. </td>
  </tr>
  <tr>
    <td>400</td>
    <td>The request was invalid. </td>
  </tr>
  <tr>
    <td>401</td>
    <td>Authentication credentials are missing or not valid.</td>
  </tr>
  <tr>
    <td>403</td>
    <td>The request is correct but the server has refused to process it.</td>
  </tr>
  <tr>
    <td>404</td>
    <td>The URL of the request does not exist.</td>
  </tr>
  <tr>
    <td>422</td>
    <td>The request is formally correct and valid, but the server cannot process its content.</td>
  </tr>
  <tr>
    <td>429</td>
    <td>Too many requests were made. </td>
  </tr>
  <tr>
    <td>500</td>
    <td>There was an internal error in the HubRise server. </td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>

