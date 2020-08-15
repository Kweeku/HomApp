'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>MeasurementValue</code>.
 * @alias module:model/MeasurementValue
 * @class
 */
var _exports = function _exports(value) {
  var _this = this;
  _this['value'] = value;
};

/**
 * Constructs a <code>MeasurementValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/MeasurementValue} obj Optional instance to populate.
 * @return {module:model/MeasurementValue} The populated <code>MeasurementValue</code> instance.
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
    if (data.hasOwnProperty('date_received')) {
      obj['date_received'] = _ApiClient2.default.convertToType(data['date_received'], 'String');
    }
  }
  return obj;
};

/**
 * value of the measurement
 * @member {Number} value
 */
_exports.prototype['value'] = undefined;
/**
 * time of the measurement
 * @member {String} timestamp
 */
_exports.prototype['timestamp'] = undefined;
/**
 * time received on Cloud side
 * @member {String} date_received
 */
_exports.prototype['date_received'] = undefined;

exports.default = _exports;