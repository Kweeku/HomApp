'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>SensorValue</code>.
 * @alias module:model/SensorValue
 * @class
 */
var _exports = function _exports(value) {
  var _this = this;
  _this['value'] = value;
};

/**
 * Constructs a <code>SensorValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SensorValue} obj Optional instance to populate.
 * @return {module:model/SensorValue} The populated <code>SensorValue</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('value')) {
      obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Blob');
    }
    if (data.hasOwnProperty('timestamp')) {
      obj['timestamp'] = _ApiClient2.default.convertToType(data['timestamp'], 'String');
    }
    if (data.hasOwnProperty('sensor_id')) {
      obj['sensor_id'] = _ApiClient2.default.convertToType(data['sensor_id'], 'String');
    }
    if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = _ApiClient2.default.convertToType(data['device_id'], 'String');
    }
    if (data.hasOwnProperty('date_received')) {
      obj['date_received'] = _ApiClient2.default.convertToType(data['date_received'], 'String');
    }
  }
  return obj;
};

/**
 * value of the sensor
 * @member {Number} value
 */
_exports.prototype['value'] = undefined;
/**
 * time of the sensor
 * @member {String} timestamp
 */
_exports.prototype['timestamp'] = undefined;
/**
 * id of the sensor
 * @member {String} sensor_id
 */
_exports.prototype['sensor_id'] = undefined;
/**
 * device id of the sensor
 * @member {String} device_id
 */
_exports.prototype['device_id'] = undefined;
/**
 * time received on Cloud side
 * @member {String} date_received
 */
_exports.prototype['date_received'] = undefined;

exports.default = _exports;