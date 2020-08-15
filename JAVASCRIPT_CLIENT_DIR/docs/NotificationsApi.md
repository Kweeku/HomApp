# WaziupApi.NotificationsApi

All URIs are relative to _https://api.waziup.io/api/v2_

| Method                                                                                 | HTTP request                         | Description                         |
| -------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------- |
| [**getNotificationsGet**](NotificationsApi.md#getNotificationsGet)                     | **GET** /notifications               | Get all notifications               |
| [**getNotificationsNotifIdDelete**](NotificationsApi.md#getNotificationsNotifIdDelete) | **DELETE** /notifications/{notif_id} | delete a message to social networks |
| [**getNotificationsNotifIdGet**](NotificationsApi.md#getNotificationsNotifIdGet)       | **GET** /notifications/{notif_id}    | Get one message                     |
| [**getNotificationsPost**](NotificationsApi.md#getNotificationsPost)                   | **POST** /notifications              | post a message to social networks   |

<a name="getNotificationsGet"></a>

# **getNotificationsGet**

> Notification getNotificationsGet()

Get all notifications

### Example

```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

//Options for fetching the values. Use ('limit', 'offset').
var opts = {
  'limit': "50", // String | In case of pagination, number of entris per page
  'offset': "0", // String | In case of pagination, offset for the starting entry
};
var apiInstance = new WaziupApi.NotificationsApi(opts);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNotificationsGet(, , callback);
```

### Parameters

| Name       | Type       | Description                                          | Notes      |
| ---------- | ---------- | ---------------------------------------------------- | ---------- |
| **limit**  | **String** | In case of pagination, number of entris per page     | [optional] |
| **offset** | **String** | In case of pagination, offset for the starting entry | [optional] |

### Return type

[**Notification**](Notification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getNotificationsNotifIdDelete"></a>

# **getNotificationsNotifIdDelete**

> getNotificationsNotifIdDelete(notifId)

delete a message to social networks

### Example

```javascript
var WaziupApi = require("waziup_api");
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications["Bearer"];
Bearer.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.NotificationsApi();

var notifId = "notifId_example"; // String |

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.getNotificationsNotifIdDelete(notifId, callback);
```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **notifId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getNotificationsNotifIdGet"></a>

# **getNotificationsNotifIdGet**

> Notification getNotificationsNotifIdGet(notifId)

Get one message

### Example

```javascript
var WaziupApi = require("waziup_api");
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications["Bearer"];
Bearer.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.NotificationsApi();

var notifId = "notifId_example"; // String |

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
apiInstance.getNotificationsNotifIdGet(notifId, callback);
```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **notifId** | **String** |             |

### Return type

[**Notification**](Notification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getNotificationsPost"></a>

# **getNotificationsPost**

> getNotificationsPost(data)

post a message to social networks

### Example

```javascript
var WaziupApi = require("waziup_api");
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications["Bearer"];
Bearer.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.NotificationsApi();

var data = new WaziupApi.Notification(); // Notification | social message

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.getNotificationsPost(data, callback);
```

### Parameters

| Name     | Type                                | Description    | Notes |
| -------- | ----------------------------------- | -------------- | ----- |
| **data** | [**Notification**](Notification.md) | social message |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
