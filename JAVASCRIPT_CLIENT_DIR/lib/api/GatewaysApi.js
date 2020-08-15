"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Gateway = require("../model/Gateway");

var _Gateway2 = _interopRequireDefault(_Gateway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new GatewaysApi.
 * @alias module:api/GatewaysApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * Gateway data
   *
   * @param {Object} opts Optional parameters
   * @param {String} opts.q filter the results
   * data is of type: {@link Array.<module:model/Gateway>}
   */
  this.getGateways = async function (opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      q: opts["q"],
      limit: opts["limit"],
      offset: opts["offset"],
      full: false
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [_Gateway2.default];

    return this.apiClient.callApi("/gateways", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create gateways
   * Endpoint to create sensing gateways.
   * @param {module:model/Gateway} body
   */
  this.createGateway = async function (body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createGateway";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("gateways", "POST", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete gateway
   *
   * @param {String} gatewayId
   */
  this.deleteGateway = async function (gatewayId) {
    var postBody = null;

    // verify the required parameter 'gatewayId' is set
    if (gatewayId === undefined || gatewayId === null) {
      throw "Missing the required parameter 'gatewayId' when calling deleteGateway";
    }

    var pathParams = {
      gw_id: gatewayId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/gateways/{gw_id}", "DELETE", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * get gateway
   *
   * @param {String} gatewayId
   * data is of type: {@link module:model/Gateway}
   */
  this.getGateway = async function (gatewayId) {
    var postBody = null;

    // verify the required parameter 'gatewayId' is set
    if (gatewayId === undefined || gatewayId === null) {
      throw "Missing the required parameter 'gatewayId' when calling getGateway";
    }

    var pathParams = {
      gw_id: gatewayId
    };
    var queryParams = {
      full: true
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = _Gateway2.default;

    return this.apiClient.callApi("/gateways/{gw_id}", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert a tunnel
   * @param {String} gatewayId
   * @param {module:model/Tunnel} body
   */
  this.putTunnel = async function (gatewayId, body) {
    var postBody = body;

    // verify the required parameter 'gatewayId' is set
    if (gatewayId === undefined || gatewayId === null) {
      throw "Missing the required parameter 'gatewayId' when calling putTunnel";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putTunnel";
    }

    var pathParams = {
      gw_id: gatewayId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/gateways/{gw_id}/tunnel", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
  * insert name
  * @param {String} gatewayId
  * @param {String} body
  */
  this.putGatewayName = async function (gatewayId, body) {
    var postBody = body;

    // verify the required parameter 'gatewayId' is set
    if (gatewayId === undefined || gatewayId === null) {
      throw "Missing the required parameter 'gatewayId' when calling putGatewayName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putGatewayName";
    }

    var pathParams = {
      gw_id: gatewayId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/gateways/{gw_id}/name", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
  * insert name
  * @param {String} gatewayId
  * @param {model/Location} body
  */
  this.putGatewayLocation = async function (gatewayId, body) {
    var postBody = body;

    // verify the required parameter 'gatewayId' is set
    if (gatewayId === undefined || gatewayId === null) {
      throw "Missing the required parameter 'gatewayId' when calling putGatewayName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putGatewayName";
    }

    var pathParams = {
      gw_id: gatewayId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = null;

    return this.apiClient.callApi("/gateways/{gw_id}/location", "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;