# WaziupApi.SocialsApi

All URIs are relative to _https://api.waziup.io/api/v2_

| Method                                                           | HTTP request                 | Description                             |
| ---------------------------------------------------------------- | ---------------------------- | --------------------------------------- |
| [**createSocialMsgsBatch**](SocialsApi.md#createSocialMsgsBatch) | **POST** /socials/batch      | post several message to social networks |
| [**getSocialMsgs**](SocialsApi.md#getSocialMsgs)                 | **GET** /socials             | Get all messages sent                   |
| [**deleteSocialsMsg**](SocialsApi.md#deleteSocialsMsg)           | **DELETE** /socials/{msg_id} | delete a message to social networks     |
| [**getSocialsMsg**](SocialsApi.md#getSocialsMsg)                 | **GET** /socials/{msg_id}    | Get one message                         |
| [**createSocialMsg**](SocialsApi.md#createSocialMsg)             | **POST** /socials            | post a message to social networks       |

<a name="createSocialMsgsBatch"></a>

# **createSocialMsgsBatch**

> createSocialMsgsBatch(data)

post several message to social networks

### Example

```javascript
var WaziupApi = require("waziup_api");
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications["Bearer"];
Bearer.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var data = new WaziupApi.SocialMessageBatch(); // SocialMessageBatch | social message

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.createSocialMsgsBatch(data, callback);
```

### Parameters

| Name     | Type                                            | Description    | Notes |
| -------- | ----------------------------------------------- | -------------- | ----- |
| **data** | [**SocialMessageBatch**](SocialMessageBatch.md) | social message |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getSocialMsgs"></a>

# **getSocialMsgs**

> SocialMessage getSocialMsgs()

Get all messages sent

### Example

```javascript
var WaziupApi = require('waziup_api');
var defaultClient = WaziupApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new WaziupApi.SocialsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSocialMsgs(, callback);
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |


### Return type

[**SocialMessage**](SocialMessage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteSocialsMsg"></a>

# **deleteSocialsMsg**

> deleteSocialsMsg(msgId)

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

var apiInstance = new WaziupApi.SocialsApi();

var msgId = "msgId_example"; // String |

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.deleteSocialsMsg(msgId, callback);
```

### Parameters

| Name      | Type       | Description | Notes |
| --------- | ---------- | ----------- | ----- |
| **msgId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getSocialsMsg"></a>

# **getSocialsMsg**

> SocialMessage getSocialsMsg(msgId)

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

var apiInstance = new WaziupApi.SocialsApi();

var msgId = "msgId_example"; // String |

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
apiInstance.getSocialsMsg(msgId, callback);
```

### Parameters

| Name      | Type       | Description | Notes |
| --------- | ---------- | ----------- | ----- |
| **msgId** | **String** |             |

### Return type

[**SocialMessage**](SocialMessage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createSocialMsg"></a>

# **createSocialMsg**

> createSocialMsg(data)

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

var apiInstance = new WaziupApi.SocialsApi();

var data = new WaziupApi.SocialMessage(); // SocialMessage | social message

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.createSocialMsg(data, callback);
```

### Parameters

| Name     | Type                                  | Description    | Notes |
| -------- | ------------------------------------- | -------------- | ----- |
| **data** | [**SocialMessage**](SocialMessage.md) | social message |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
