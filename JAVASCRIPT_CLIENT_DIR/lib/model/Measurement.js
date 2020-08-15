'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _MeasurementValue = require('./MeasurementValue');

var _MeasurementValue2 = _interopRequireDefault(_MeasurementValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Measurement</code>.
 * @alias module:model/Measurement
 * @class
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Measurement</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Measurement} obj Optional instance to populate.
 * @return {module:model/Measurement} The populated <code>Measurement</code> instance.
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
    if (data.hasOwnProperty('last_value')) {
      obj['last_value'] = _MeasurementValue2.default.constructFromObject(data['last_value']);
    }
    if (data.hasOwnProperty('sensing_device')) {
      obj['sensing_device'] = _ApiClient2.default.convertToType(data['sensing_device'], 'String');
    }
    if (data.hasOwnProperty('quantity_kind')) {
      obj['quantity_kind'] = _ApiClient2.default.convertToType(data['quantity_kind'], 'String');
    }
    if (data.hasOwnProperty('unit')) {
      obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
    }
  }
  return obj;
};

/**
 * ID of the measurement
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * name of the measurement
 * @member {String} name
 */
_exports.prototype['name'] = undefined;
/**
 * last value measured
 * @member {model/MeasurementValue} last_value 
 */
_exports.prototype['last_value'] = undefined;
/**
 * quantity kind measured
 * @member {model/QuantityKinds} quantity_kind 
 */
_exports.prototype['quantity_kind'] = undefined;
/**
 * unit of the measurement
 * @member {model/Units} unit
 */
_exports.prototype['unit'] = undefined;
/**
 * kind of sensor providing the measurement
 * @member {model/SensingDevices} sensing_device 
 */
_exports.prototype['sensing_device'] = undefined;

exports.default = _exports;