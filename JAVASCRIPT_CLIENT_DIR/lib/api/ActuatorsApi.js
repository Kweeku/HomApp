'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Actuator = require('../model/Actuator');

var _Actuator2 = _interopRequireDefault(_Actuator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new ActuatorsAPI. 
 * @alias module:api/ActuatorsAPI
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * insert new actuator
   * @param {String} deviceId 
   * @param {module:model/Actuator} body 
   */
  this.addActuator = async function (deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling addActuator";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling addActuator";
    }

    var pathParams = {
      'device_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * get actuator
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * data is of type: {@link module:model/Actuator}
   */
  this.getActuator = async function (deviceId, actuatorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling getActuator";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling getActuator";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _Actuator2.default;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put actuator name
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * @param {String} body 
   */
  this.putActuatorName = async function (deviceId, actuatorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putActuatorName";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling putActuatorName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putActuatorName";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}/name', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put actuator value type 
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * @param {String} body 
   */
  this.putActuatorVT = async function (deviceId, actuatorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putActuatorQK";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling putActuatorQK";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putActuatorQK";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}/value_type', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert device kind
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * @param {String} body 
   */
  this.putActuatorKind = async function (deviceId, actuatorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putActuatorDeviceKind";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling putActuatorDeviceKind";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putActuatorDeviceKind";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}/actuator_kind', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create new actuator value
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * @param {module:model/ActuatorValue} body 
   */
  this.createActuatorValue = async function (deviceId, actuatorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling createActuatorValue";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling createActuatorValue";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createActuatorValue";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ["application/json;charset=utf-8"];
    var accepts = ["application/json;charset=utf-8"];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}/value', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete actuator
   * 
   * @param {String} deviceId 
   * @param {String} actuatorId 
   * @param {module:api/DevicesApi~deleteActuatorCallback} callback The callback function, accepting three arguments: error, data, response
   */
  this.deleteActuator = async function (deviceId, actuatorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling deleteActuator";
    }

    // verify the required parameter 'actuatorId' is set
    if (actuatorId === undefined || actuatorId === null) {
      throw "Missing the required parameter 'actuatorId' when calling deleteActuator";
    }

    var pathParams = {
      'device_id': deviceId,
      'actuator_id': actuatorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/actuators/{actuator_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;