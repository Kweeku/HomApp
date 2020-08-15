# WaziupApi.GatewaysApi

All URIs are relative to _https://api.waziup.io/api/v1_

| Method                                                          | HTTP request                              | Description     |
| --------------------------------------------------------------- | ----------------------------------------- | --------------- |
| [**getGateways**](GatewaysApi.md#getGateways)                   | **GET** /gateways                         | Gateway data    |
| [**createGateway**](GatewaysApi.md#createGateway)               | **POST** /gateways                        | Create gateways |
| [**getGateway**](GatewaysApi.md#getGateway)                     | **GET** /gateways/{gateway_id}            | get gateway     |
| [**deleteGateway**](GatewaysApi.md#deleteGateway)               | **DELETE** /gateways/{gateway_id}         | Delete gateway  |
| [**putGatewayName**](GatewaysApi.md#putGatewayName)             | **PUT** /gateways/{gateway_id}/name       | put name        |
| [**putTunnel**](GatewaysApi.md#putTunnel)                       | **PUT** /gateways/{gateway_id}/tunnel     | put tunnel      |
| [**putGatewayVisibility**](GatewaysApi.md#putGatewayVisibility) | **PUT** /gateways/{gateway_id}/visibility | put visibility  |

## Preliminaries

Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require("waziup-js");
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = "WAZIUP_BASE_URL" + "/v2";

// Configure API key authorization: Bearer
defaultClient.authentications["Bearer"].apiKey = "Bearer " + "YOUR API KEY";

var apiInstance = new WaziupApi.GatewaysApi();
```

<a name="getGateways"></a>

# **getGateways**

> [Gateway] getGateways(opts)

Gateway data

### Example

```javascript
let gateways = await apiInstance.getGateways();
//You can use the gateways here
```

### Return type

[**[Gateway]**](Gateway.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createGateway"></a>

# **createGateway**

> createGateway(gateway)

Create gateways

Endpoint to create sensing gateways.

### Example

```javascript
var gateway = new WaziupApi.Gateway("ID");
gateway.name = ... //Set up the gateway here
apiInstance.createGateways(gateway);
```

### Parameters

| Name     | Type                      | Description | Notes |
| -------- | ------------------------- | ----------- | ----- |
| **body** | [**Gateway**](Gateway.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteGateway"></a>

# **deleteGateway**

> deleteGateway(gatewayId)

Delete gateway

### Example

```javascript
var gatewayID = "test";
apiInstance.deleteGateway(gatewayID);
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **gatewayId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getGateway"></a>

# **getGateway**

> Gateway getGateway(gatewayId)

get gateway

### Example

```javascript
var gatewayID = "test";
let gateway = await apiInstance.getGateway(gatewayID);
//You can use the gateway here
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **gatewayId** | **String** |             |

### Return type

[**Gateway**](Gateway.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putGatewayName"></a>

# **putGatewayName**

> putGatewayName(gatewayId, body)

insert name

### Example

```javascript
var gatewayID = "test";
apiInstance.putGatewayName(gatewayID, "My Gateway 1");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **gatewayId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putTunnel"></a>

# **putTunnel**

> putTunnel(gatewayId, body)

insert tunnel

### Example

```javascript
var gatewayID = "test";
apiInstance.putTunnel(gatewayID, "0");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **gatewayId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putGatewayVisibility"></a>

# **putGatewayVisibility**

> putGatewayVisibility(gatewayId, body)

put gateway visibility

### Example

```javascript
var gatewayID = "test";
apiInstance.putGatewayVisibility(gatewayID, "public");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **gatewayId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json
