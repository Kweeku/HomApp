# WaziupApi.ActuatorsApi

All URIs are relative to _https://api.waziup.io/api/v2_

| Method                                                         | HTTP request                                                       | Description             |
| -------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------- |
| [**addActuator**](ActuatorsApi.md#addActuator)                 | **POST** /devices/{device_id}/actuators                            | insert new actuator     |
| [**getActuator**](ActuatorsApi.md#getActuator)                 | **GET** /devices/{device_id}/actuators/{actuator_id}               | get actuator            |
| [**deleteActuator**](ActuatorsApi.md#deleteActuator)           | **DELETE** /devices/{device_id}/actuators/{actuator_id}            | Delete actuator         |
| [**putActuatorName**](ActuatorsApi.md#putActuatorName)         | **PUT** /devices/{device_id}/actuators/{actuator_id}/name          | put actuator name       |
| [**putActuatorVT**](ActuatorsApi.md#putActuatorVT)             | **PUT** /devices/{device_id}/actuators/{actuator_id}/value_type    | put actuator value type |
| [**putActuatorKind**](ActuatorsApi.md#putActuatorKind)         | **PUT** /devices/{device_id}/actuators/{actuator_id}/actuator_kind | put actuator kind       |
| [**createActuatorValue**](ActuatorsApi.md#createActuatorValue) | **POST** /devices/{device_id}/actuators/{actuator_id}/value        | add actuator value      |

## Preliminaries

Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require("waziup-js");
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = "WAZIUP_BASE_URL" + "/v2";

// Configure API key authorization: Bearer
defaultClient.authentications["Bearer"].apiKey = "Bearer " + "YOUR API KEY";

var apiInstance = new WaziupApi.ActuatorsApi();
```

<a name="addActuator"></a>

# **addActuator**

> addActuator(deviceId, body)

insert new actuator

### Example

```javascript
var deviceID = "test";
var actu = new WaziupApi.Actuator("MT");
apiInstance.addActuator(deviceID, actu);
```

### Parameters

| Name         | Type                        | Description | Notes |
| ------------ | --------------------------- | ----------- | ----- |
| **deviceId** | **String**                  |             |
| **body**     | [**Actuator**](Actuator.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getActuator"></a>

# **getActuator**

> Actuator getActuator(deviceId, actuatorId)

get actuator

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
var actuators = await apiInstance.getActuator(deviceID, actuID);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |

### Return type

[**Actuator**](Actuator.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteActuator"></a>

# **deleteActuator**

> deleteActuator(deviceId, actuatorId)

Delete actuator

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
var actuators = await apiInstance.deleteDeviceActuator(deviceID, actuID);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putActuatorName"></a>

# **putActuatorName**

> putActuatorName(deviceId, actuatorId, body)

put actuator name

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
apiInstance.putActuatorName(deviceID, "My motor");
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |
| **body**       | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putActuatorKind"></a>

# **putActuatorKind**

> putActuatorKind(deviceId, actuatorId, body)

put actuator quantity kind

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
apiInstance.putActuatorKind(deviceID, actuID, "Motor");
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |
| **body**       | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putActuatorVT"></a>

# **putActuatorVT**

> putActuatorVT(deviceId, actuatorId, body)

insert device kind

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
apiInstance.putActuatorVT(deviceID, actuID, "bool");
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |
| **body**       | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="createActuatorValue"></a>

# **createActuatorValue**

> createActuatorValue(deviceId, actuatorId, actuatorValue)

Create new actuator value

### Example

```javascript
var deviceID = "test";
var actuID = "MT";
apiInstance.createActuatorValue(deviceID, actuID, "true");
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **deviceId**   | **String** |             |
| **actuatorId** | **String** |             |
| **value**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
