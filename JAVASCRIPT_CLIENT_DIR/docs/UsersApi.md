# WaziupApi.UsersApi

All URIs are relative to _https://api.waziup.io/api/v2_

| Method                                               | HTTP request                        | Description              |
| ---------------------------------------------------- | ----------------------------------- | ------------------------ |
| [**getUsers**](UsersApi.md#getUsers)                 | **GET** /users/                     | Get all users in a realm |
| [**GetUser**](UsersApi.md#getUser)                   | **GET** /users/{userid}             | Get a single user        |
| [**putUserSmsCredit**](UsersApi.md#putUserSmsCredit) | **PUT** /users/{user_id}/sms_credit | put sms credit           |

<a name="getUsers"></a>

# **getUsers**

> [User] getUsers(opts)

User data

### Example

```javascript
//Options for fetching the values. Use ('limit', 'offset').
var opts = {
  username: "cdupont",
  limit: "50", // String | In case of pagination, number of entris per page
  offset: "0" // String | In case of pagination, offset for the starting entry
};
let users = await apiInstance.getUsers(opts);
//You can use the users here
```

### Parameters

| Name         | Type       | Description                                          | Notes      |
| ------------ | ---------- | ---------------------------------------------------- | ---------- |
| **username** | **String** |
| **limit**    | **String** | In case of pagination, number of entris per page     | [optional] |
| **offset**   | **String** | In case of pagination, offset for the starting entry | [optional] |

### Return type

[**[User]**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getUser"></a>


# **getUser**

> User getUser(userId)

get user

### Example

```javascript
var userID = "test";
let user = await apiInstance.getUser(userID);
//You can use the user here
```

### Parameters

| Name       | Type       | Description | Notes |
| ---------- | ---------- | ----------- | ----- |
| **userId** | **String** |             |

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putUserSmsCredit"></a>

# **putUserSmsCredit**

> putUserSmsCredit(userId, body)

insert name

### Example

```javascript
var userID = "test";
apiInstance.putUserSmsCredit(userID, {});
```

### Parameters

| Name       | Type       | Description | Notes |
| ---------- | ---------- | ----------- | ----- |
| **userId** | **String** |             |
| **body**   | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json
