'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Actuator</code>.
 * @alias module:model/Actuator
 * @class
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Actuator</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Actuator} obj Optional instance to populate.
 * @return {module:model/Actuator} The populated <code>Actuator</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('name')) {
      obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
    }
    if (data.hasOwnProperty('value')) {
      obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
    }
    if (data.hasOwnProperty('actuator_kind')) {
      obj['actuator_kind'] = _ApiClient2.default.convertToType(data['actuator_kind'], 'String');
    }
    if (data.hasOwnProperty('actuator_value_type')) {
      obj['actuator_value_type'] = _ApiClient2.default.convertToType(data['actuator_value_type'], 'String');
    }
  }
  return obj;
};

/**
 * ID of the sensor
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * name of the sensor
 * @member {String} name
 */
_exports.prototype['name'] = undefined;
/**
 * last value measured
 * @member {String} value 
 */
_exports.prototype['value'] = undefined;
/**
 * actuator value type
 * @member {String} actuator_value_type 
 */
_exports.prototype['actuator_value_type'] = undefined;
/**
 * kind of device providing the sensor
 * @member {model/ActuatorKinds} actuator_kind 
 */
_exports.prototype['actuator_kind'] = undefined;

exports.default = _exports;