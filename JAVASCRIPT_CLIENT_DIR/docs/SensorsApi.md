# WaziupApi.SensorsApi

All URIs are relative to _https://api.waziup.io/api/v2_

| Method                                                         | HTTP request                                                   | Description              |
| -------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------ |
| [**addSensor**](SensorsApi.md#addSensor)                       | **POST** /devices/{device_id}/sensors                          | insert new sensor        |
| [**getSensor**](SensorsApi.md#getSensor)                       | **GET** /devices/{device_id}/sensors/{sensor_id}               | get sensor               |
| [**deleteSensor**](SensorsApi.md#deleteSensor)                 | **DELETE** /devices/{device_id}/sensors/{sensor_id}            | Delete sensor            |
| [**putSensorQK**](SensorsApi.md#putSensorQK)                   | **PUT** /devices/{device_id}/sensors/{sensor_id}/quantity_kind | put sensor quantity kind |
| [**putSensorName**](SensorsApi.md#putSensorName)               | **PUT** /devices/{device_id}/sensors/{sensor_id}/name          | put sensor name          |
| [**putSensorSD**](SensorsApi.md#putSensorDeviceKind)           | **PUT** /devices/{device_id}/sensors/{sensor_id}/sensor_kind   | put sensor kind          |
| [**putSensorUnit**](SensorsApi.md#putSensorUnit)               | **PUT** /devices/{device_id}/sensors/{sensor_id}/unit          | put sensor unit          |
| [**putSensorCalibration**](SensorsApi.md#putSensorCalibration) | **PUT** /devices/{device_id}/sensors/{sensor_id}/calib         | put sensor calibration   |
| [**createSensorValue**](SensorsApi.md#createSensorValue)       | **POST** /devices/{device_id}/sensors/{sensor_id}/value        | Create new sensor value  |
| [**getSensorsData**](SensorsApi.md#getSensorsData)             | **GET** /sensors_data                                          | get sensor values        |

## Preliminaries

Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require("waziup-js");
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = "WAZIUP_BASE_URL" + "/v2";

// Configure API key authorization: Bearer
defaultClient.authentications["Bearer"].apiKey = "Bearer " + "YOUR API KEY";

var apiInstance = new WaziupApi.SensorsApi();
```

<a name="addSensor"></a>

# **addSensor**

> addSensor(deviceId, body)

insert new sensor

### Example

```javascript
var deviceID = "test";
var sens = new WaziupApi.Sensor("TC");
apiInstance.addSensor(deviceID, sens);
```

### Parameters

| Name         | Type                    | Description | Notes |
| ------------ | ----------------------- | ----------- | ----- |
| **deviceId** | **String**              |             |
| **body**     | [**Sensor**](Sensor.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getSensor"></a>

# **getSensor**

> Sensor getSensor(deviceId, sensorId)

get sensor

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
var sensors = await apiInstance.getSensor(deviceID, sensID);
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |

### Return type

[**Sensor**](Sensor.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteSensor"></a>

# **deleteSensor**

> deleteSensor(deviceId, sensorId)

Delete sensor

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
var sensors = await apiInstance.deleteDeviceSensor(deviceID, sensID);
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putSensorQK"></a>

# **putSensorQK**

> putSensorQK(deviceId, sensorId, body)

put sensor quantity kind

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
apiInstance.putSensorQK(deviceID, sensID, "Temperature");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putSensorName"></a>

# **putSensorName**

> putSensorName(deviceId, sensorId, body)

put sensor name

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
apiInstance.putSensorName(deviceID, "My temperature");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putSensorDeviceKind"></a>

# **putSensorDeviceKind**

> putSensorDeviceKind(deviceId, sensorId, body)

insert device kind

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
apiInstance.putSensorDeviceKind(deviceID, sensID, "Thermometer");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putSensorUnit"></a>

# **putSensorUnit**

> putSensorUnit(deviceId, sensorId, body)

put sensor unit

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
apiInstance.putSensorUnit(deviceID, sensID, "DegreeCelcius");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putSensorCalibration"></a>

# **putSensorCalibration**

> putSensorCalibration(deviceId, sensorId, body)

put sensor unit

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
apiInstance.putSensorCalibration(deviceID, sensID, "true");
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **deviceId** | **String** |             |
| **sensorId** | **String** |             |
| **body**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="createSensorValue"></a>

# **createSensorValue**

> createSensorValue(deviceId, sensorId, sensorValue)

Create new sensor value

### Example

```javascript
var deviceID = "test";
var sensID = "TC";
var value = new WaziupApi.SensorValue("25.6", "2018-03-15T15:27:17+01:00");
apiInstance.createSensorValue(deviceID, sensID, value);
```

### Parameters

| Name         | Type                              | Description | Notes |
| ------------ | --------------------------------- | ----------- | ----- |
| **deviceId** | **String**                        |             |
| **sensorId** | **String**                        |             |
| **value**    | [**SensorValue**](SensorValue.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getSensorsData"></a>

# **getSensorsData**

> [SensorValue] getSensorsData(options)

get sensor values

### Example

```javascript
//Options for fetching the values. Use ('limit', 'offset') for pagination. date_from and date_to can be use to further limit the time window.
var opts = {
  device_id: "MyDevice",
  sensor_id: "MySensor",
  sort: "asc", // String | Sorting direction
  limit: "50", // String | In case of pagination, number of entris per page
  offset: "0", // String | In case of pagination, offset for the starting entry
  date_from: "2016-01-01T00:00:00.000Z", // String | The starting date and time from which the entries are desired. It is an optional parameter.
  date_to: "2019-01-31T23:59:59.999Z" // String | The final date and time until which the entries are desired. It is an optional parameter.
  calibrated: "true" // String | Flag for calibration
};
var values = await apiInstance.getSensorsData(opts);
```

### Parameters

| Name           | Type       | Description                                                                                 | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| **deviceId**   | **String** |                                                                                             |
| **sensorId**   | **String** |                                                                                             |
| **sort**       | **String** | Sorting direction                                                                           | [optional] |
| **limit**      | **String** | In case of pagination, number of entris per page                                            | [optional] |
| **offset**     | **String** | In case of pagination, offset for the starting entry                                        | [optional] |
| **date_from**  | **String** | The starting date and time from which the entries are desired. It is an optional parameter. | [optional] |
| **date_to**    | **String** | The final date and time until which the entries are desired. It is an optional parameter.   | [optional] |
| **calibrated** | **String** | Flag for calibration                                                                        | [optional] |

### Return type

[**[SensorValue]**](SensorValue.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
