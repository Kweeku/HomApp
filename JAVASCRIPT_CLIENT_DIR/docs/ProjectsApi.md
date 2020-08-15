# WaziupApi.ProjectsApi

All URIs are relative to _https://api.waziup.io/api/v1_

| Method                                              | HTTP request                            | Description     |
| --------------------------------------------------- | --------------------------------------- | --------------- |
| [**getProjects**](ProjectsApi.md#getProjects)       | **GET** /projects                       | Project data    |
| [**createProject**](ProjectsApi.md#createProject)   | **POST** /projects                      | Create projects |
| [**getProject**](ProjectsApi.md#getProject)         | **GET** /projects/{project_id}          | get project     |
| [**deleteProject**](ProjectsApi.md#deleteProject)   | **DELETE** /projects/{project_id}       | Delete project  |
| [**putProjectName**](ProjectsApi.md#putProjectName) | **PUT** /projects/{project_id}/name     | insert name     |
| [**putDevices**](ProjectsApi.md#putDevices)         | **PUT** /projects/{project_id}/devices  | insert devices  |
| [**putGateways**](ProjectsApi.md#putGateways)       | **PUT** /projects/{project_id}/gateways | insert gateways |

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

<a name="getProjects"></a>

# **getProjects**

> [Project] getProjects(opts)

Project data

### Example

```javascript
var opts = { full: "true" }; // filter the results
let projects = await apiInstance.getProjects(opts);
//You can use the projects here
```

### Parameters

| Name     | Type       | Description                               | Notes      |
| -------- | ---------- | ----------------------------------------- | ---------- |
| **full** | **String** | if true it returns device/gateway objects | [optional] |

### Return type

[**[Project]**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProject"></a>

# **createProject**

> createProject(project)

Create projects

Endpoint to create sensing projects.

### Example

```javascript
var project = new WaziupApi.Project("ID");
project.name = ... //Set up the project here
apiInstance.createProjects(project);
```

### Parameters

| Name     | Type                      | Description | Notes |
| -------- | ------------------------- | ----------- | ----- |
| **body** | [**Project**](Project.md) |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProject"></a>

# **deleteProject**

> deleteProject(projectId)

Delete project

### Example

```javascript
var projectID = "test";
apiInstance.deleteProject(projectID);
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **projectId** | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getProject"></a>

# **getProject**

> Project getProject(projectId)

get project

### Example

```javascript
var projectID = "test";
let project = await apiInstance.getProject(projectID);
//You can use the project here
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **projectId** | **String** |             |

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putProjectName"></a>

# **putProjectName**

> putProjectName(projectId, body)

insert name

### Example

```javascript
var projectID = "test";
apiInstance.putProjectName(projectID, "My Project 1");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **projectId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putDevices"></a>

# **putDevices**

> putDevices(projectId, body)

insert devices

### Example

```javascript
var projectID = "test";
apiInstance.putDevices(projectID, "['MyDevice']");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **projectId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

<a name="putGateways"></a>

# **putGateways**

> putGateways(projectId, body)

insert gateways

### Example

```javascript
var projectID = "test";
apiInstance.putGateways(projectID, "['MyGateway']");
```

### Parameters

| Name          | Type       | Description | Notes |
| ------------- | ---------- | ----------- | ----- |
| **projectId** | **String** |             |
| **body**      | **String** |             |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json
