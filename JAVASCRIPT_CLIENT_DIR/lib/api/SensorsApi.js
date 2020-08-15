'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Sensor = require('../model/Sensor');

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorValue = require('../model/SensorValue');

var _SensorValue2 = _interopRequireDefault(_SensorValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new SensorsApi. 
 * @alias module:api/SensorsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * insert new sensor
   * @param {String} deviceId 
   * @param {module:model/Sensor} body 
   */
  this.addSensor = async function (deviceId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling addSensor";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling addSensor";
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

    return this.apiClient.callApi('/devices/{device_id}/sensors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * get sensor
   * @param {String} deviceId 
   * @param {String} sensorId 
   * data is of type: {@link module:model/Sensor}
   */
  this.getSensor = async function (deviceId, sensorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling getSensor";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling getSensor";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _Sensor2.default;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * get sensor values
   * @param {Object} opts Optional parameters
   * @param {String} opts.deviceId 
   * @param {String} opts.sensorId
   * @param {String} opts.sort
   * @param {Boolean} opts.calibrated
   * @param {String} opts.limit In case of pagination, number of entris per page
   * @param {String} opts.offset In case of pagination, offset for the starting entry
   * @param {String} opts.dateFrom The starting date and time from which the entries are desired. It is an optional parameter.
   * @param {String} opts.dateTo The final date and time until which the entries are desired. It is an optional parameter. 
   * data is of type: {@link Array.<module:model/SensorValue>}
   */
  this.getSensorsData = async function (opts) {
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      'device_id': opts['device_id'],
      'sensor_id': opts['sensor_id'],
      'sort': opts['sort'],
      'calibrated': opts['calibrated'],
      'limit': opts['limit'],
      'offset': opts['offset'],
      'date_from': opts['date_from'],
      'date_to': opts['date_to']
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [_SensorValue2.default];

    return this.apiClient.callApi('/sensors_data', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put sensor name
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorName = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putSensorName";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling putSensorName";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putSensorName";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/name', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put sensor quantity kind 
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorQK = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putSensorQK";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling putSensorQK";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putSensorQK";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/quantity_kind', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * insert device kind
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorDeviceKind = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putSensorDeviceKind";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling putSensorDeviceKind";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putSensorDeviceKind";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/sensor_kind', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put sensor unit
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorUnit = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putSensorUnit";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling putSensorUnit";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putSensorUnit";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/unit', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put sensor calibration
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {String} body 
   */
  this.putSensorCalibration = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling putSensorCalibration";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling putSensorCalibration";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putSensorCalibration";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/calib', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create new sensor value
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {module:model/SensorValue} body 
   */
  this.createSensorValue = async function (deviceId, sensorId, body) {
    var postBody = body;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling createSensorValue";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling createSensorValue";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling createSensorValue";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}/value', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete sensor
   * 
   * @param {String} deviceId 
   * @param {String} sensorId 
   * @param {module:api/DevicesApi~deleteSensorCallback} callback The callback function, accepting three arguments: error, data, response
   */
  this.deleteSensor = async function (deviceId, sensorId) {
    var postBody = null;

    // verify the required parameter 'deviceId' is set
    if (deviceId === undefined || deviceId === null) {
      throw "Missing the required parameter 'deviceId' when calling deleteSensor";
    }

    // verify the required parameter 'sensorId' is set
    if (sensorId === undefined || sensorId === null) {
      throw "Missing the required parameter 'sensorId' when calling deleteSensor";
    }

    var pathParams = {
      'device_id': deviceId,
      'sensor_id': sensorId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/devices/{device_id}/sensors/{sensor_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;