"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Project = require("../model/Project");

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new ProjectsApi.
 * @alias module:api/ProjectsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * Project data
   *
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Project>}
   */
  this.getProjects = async function (opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      q: opts["q"],
      limit: opts["limit"],
      offset: opts["offset"],
      full: opts["full"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [_Project2.default];

    return this.apiClient.callApi("/projects", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create projects
   * Endpoint to create sensing projects.
   * @param {module:model/Project} body
   */
  this.createProject = async function (body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createProject";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = 'String';

    return this.apiClient.callApi("projects", "POST", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete project
   *
   * @param {String} projectId
   */
  this.deleteProject = async function (projectId) {
    var postBody = null;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling deleteProject";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/projects/{id}", "DELETE", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * get project
   *
   * @param {String} projectId
   * data is of type: {@link module:model/Project}
   */
  this.getProject = async function (projectId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling getProject";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {
      full: opts["full"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = _Project2.default;

    return this.apiClient.callApi("/projects/{id}", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert devices
   * @param {String} projectId
   * @param {module:model/Device} body
   */
  this.putDeviceIds = async function (projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putDevices";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putDevices";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/projects/{id}/device_ids", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert gateways
   * @param {String} projectId
   * @param {module:model/Gateway} body
   */
  this.putGatewayIds = async function (projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putGateways";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putGateways";
    }

    var pathParams = {
      id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/projects/{id}/gateway_ids", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert name
   * @param {String} projectId
   * @param {String} body
   */
  this.putProjectName = async function (projectId, body) {
    var postBody = body;

    // verify the required parameter 'projectId' is set
    if (projectId === undefined || projectId === null) {
      throw "Missing the required parameter 'projectId' when calling putProjectName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putProjectName";
    }

    var pathParams = {
      project_id: projectId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json;charset=utf-8"];
    var accepts = ["application/json;charset=utf-8"];
    var returnType = null;

    return this.apiClient.callApi("/projects/{project_id}/name", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;