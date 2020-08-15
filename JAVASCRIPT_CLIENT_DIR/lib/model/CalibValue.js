'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>CalibValue</code>.
 * location is a pair of [sensor_value, real_value].
 * @alias module:model/CalibValue
 * @class
 */
var _exports = function exports(sensor_value, real_value) {
  var _this = this;

  _this['sensor_value'] = sensor_value;
  _this['real_value'] = real_value;
};

/**
 * Constructs a <code>CalibValue</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalibValue} obj Optional instance to populate.
 * @return {module:model/CalibValue} The populated <code>CalibValue</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('sensor_value')) {
      obj['sensor_value'] = _ApiClient2.default.convertToType(data['sensor_value'], 'Number');
    }
    if (data.hasOwnProperty('real_value')) {
      obj['real_value'] = _ApiClient2.default.convertToType(data['real_value'], 'Number');
    }
  }
  return obj;
};

/**
 * @member {Number} sensor_value
 */
_exports.prototype['sensor_value'] = undefined;
/**
 * @member {Number} real_value
 */
_exports.prototype['real_value'] = undefined;

exports.default = _exports;