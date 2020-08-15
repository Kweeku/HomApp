# WaziupApi.DevicesApi

All URIs are relative to _https://api.waziup.io/api/v1_

| Method                                                       | HTTP request                            | Description       |
| ------------------------------------------------------------ | --------------------------------------- | ----------------- |
| [**getDevices**](DevicesApi.md#getDevices)                   | **GET** /devices                        | Device data       |
| [**createDevice**](DevicesApi.md#createDevice)               | **POST** /devices                       | Create devices    |
| [**getDevice**](DevicesApi.md#getDevice)                     | **GET** /devices/{device_id}            | get device        |
| [**deleteDevice**](DevicesApi.md#deleteDevice)               | **DELETE** /devices/{device_id}         | Delete device     |
| [**putDeviceLocation**](DevicesApi.md#putDeviceLocation)     | **PUT** /devices/{device_id}/location   | insert location   |
| [**putDeviceName**](DevicesApi.md#putDeviceName)             | **PUT** /devices/{device_id}/name       | insert name       |
| [**putDeviceOwner**](DevicesApi.md#putDeviceOwner)           | **PUT** /devices/{device_id}/owner      | insert owner      |
| [**putDeviceVisibility**](DevicesApi.md#putDeviceVisibility) | **PUT** /devices/{device_id}/visibility | insert visibility |
| [**putDeviceGatewayId**](DevicesApi.md#putDeviceGatewayId)   | **PUT** /devices/{device_id}/gateway_id | insert gateway id |
| [**getDeviceSensors**](DevicesApi.md#getDeviceSensors)       | **GET** /devices/{device_id}/sensors    | get sensors       |

## Preliminaries

Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require("waziup-js");
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = "WAZIUP_BASE_URL" + "/v2";

// Configure API key authorization: Bearer
defaultClient.authentications["Bearer"].apiKey = "Bearer " + "YOUR API KEY";

var apiInstance = new WaziupApi.DevicesApi();
```

<a name="getDevices"></a>

# **getDevices**

> [Device] getDevices(opts)

Device data

### Example

```javascript
var opts = { q: "owner=cdupont" }; // filter the results
let devices = await apiInstance.getDevices(opts);
//You can use the devices here
```

### Parameters

| Name  | Type       | Description        | Notes      |
| ----- | ---------- | ------------------ | ---------- |
| **q** | **String** | filter the results | [optional] |

### Return type

[**[Device]**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDevice"></a>

# **createDevice**

> createDevice(device)

Create devices

Endpoint to create sensing devices.

### Example

```javascript
var device = new WaziupApi.Device("ID");
device.name = ... //Set up the device here
apiInstance.createDevices(device);
```

### Parameters

| Name     | Type                    | Description | Notes |
| -------- | ----------------------- | ----------- | ----- |
| **body** | [**Device**](Device.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteDevice"></a>

# **deleteDevice**

> deleteDevice(deviceId)

Delete device

### Example

```javascript
var deviceID = "test";
apiInstance.deleteDevice(deviceID);
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getDevice"></a>

# **getDevice**

> Device getDevice(deviceId)

get device

### Example

```javascript
var deviceID = "test";
let device = await apiInstance.getDevice(deviceID);
//You can use the device here
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |

### Return type

[**Device**](Device.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putDeviceLocation"></a>

# **putDeviceLocation**

> putDeviceLocation(deviceId, body)

insert location

### Example

```javascript
var deviceID = "test";
var location = new WaziupApi.Location(4.0, 1.0);
apiInstance.putDeviceLocation(deviceID, location);
```

### Parameters

| Name         | Type                        | Description | Notes |
| ------------ | --------------------------- | ----------- | ----- |
| **deviceId** | **String**                  |             |
| **body**     | [**Location**](Location.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putDeviceName"></a>

# **putDeviceName**

> putDeviceName(deviceId, body)

insert name

### Example

```javascript
var deviceID = "test";
apiInstance.putDeviceName(deviceID, "My Device 1");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putDeviceOwner"></a>

# **putDeviceOwner**

> putDeviceOwner(deviceId, body)

insert owner

### Example

```javascript
var deviceID = "test";
apiInstance.putDeviceOwner(deviceID, "cdupont");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putDeviceVisibility"></a>

# **putDeviceVisibility**

> putDeviceOwner(deviceId, body)

insert owner

### Example

```javascript
var deviceID = "test";
apiInstance.putDeviceVisibility(deviceID, "public");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putDeviceGatewayId"></a>

# **putDeviceGatewayId**

> putDeviceGatewayId(deviceId, body)

insert owner

### Example

```javascript
var deviceID = "test";
apiInstance.putDeviceGatewayId(deviceID, "MyGatewayId");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="getDeviceSensors"></a>

# **getDeviceSensors**

> [Sensor] getDeviceSensors(deviceId)

get sensors

### Example

```javascript
var deviceID = "test";
var sensors = await apiInstance.getDeviceSensors(deviceID);
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |

### Return type

[**[Sensor]**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
