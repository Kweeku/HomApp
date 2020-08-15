# WaziupApi.AuthApi

All URIs are relative to _https://api.waziup.io/api/v1_

| Method                                                            | HTTP request                       | Description                               |
| ----------------------------------------------------------------- | ---------------------------------- | ----------------------------------------- |
| [**getAuthToken**](ProjectsApi.md#getAuthToken)                   | **POST** /auth/token               | Get the access token for subsequent calls |
| [**getProjectPermissions**](ProjectsApi.md#getProjectPermissions) | **GET** /auth/permissions/projects | Get project permissions                   |
| [**getDevicePermissions**](ProjectsApi.md#getDevicePermissions)   | **GET** /auth/permissions/devices  | Get device permissions                    |
| [**getGatewayPermissions**](ProjectsApi.md#getGatewayPermissions) | **GET** /auth/permissions/gateways | Get gateway permissions                   |

## Preliminaries

Insert this code in your file, before using any endpoint:

```javascript
var WaziupApi = require("waziup-js");
var defaultClient = WaziupApi.ApiClient.instance;
defaultClient.basePath = "WAZIUP_BASE_URL" + "/v2";

// Configure API key authorization: Bearer
defaultClient.authentications["Bearer"].apiKey = "Bearer " + "YOUR API KEY";

var apiInstance = new WaziupApi.ProjectsApi();
```

<a name="getAuthToken"></a>

# **getAuthToken**

> getAuthToken(opts)

get auth token

### Example

```javascript
var credentials = {
  username: "cdupont",
  password: "password"
}; // user credentials
let projects = await apiInstance.getAuthToken(credentials);
//You can use the projects here
```

### Parameters

| Name            | Type                        | Description      | Notes |
| --------------- | --------------------------- | ---------------- | ----- |
| **credentials** | [**AuthBody**](AuthBody.md) | user credentials |

### Return type

**String**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getProjectPermissions"></a>

# **getProjectPermissions**

> getProjectPermissions()

get project permissions

### Example

```javascript
let permissions = await apiInstance.getProjectPermissions();
```

### Return type

[**Permission**](Permission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getDevicePermissions"></a>

# **getDevicePermissions**

> getDevicePermissions()

get device permissions

### Example

```javascript
let permissions = await apiInstance.getDevicePermissions();
```

### Return type

[**Permission**](Permission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getGatewayPermissions"></a>

# **getGatewayPermissions**

> getGatewayPermissions()

get gateway permissions

### Example

```javascript
let permissions = await apiInstance.getGatewayPermissions();
```

### Return type

[**Permission**](Permission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
