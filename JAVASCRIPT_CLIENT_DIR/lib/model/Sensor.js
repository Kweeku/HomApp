'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SensorValue = require('./SensorValue');

var _SensorValue2 = _interopRequireDefault(_SensorValue);

var _Calib = require('./Calib');

var _Calib2 = _interopRequireDefault(_Calib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Sensor</code>.
 * @alias module:model/Sensor
 * @class
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Sensor</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Sensor} obj Optional instance to populate.
 * @return {module:model/Sensor} The populated <code>Sensor</code> instance.
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
      obj['value'] = _SensorValue2.default.constructFromObject(data['value']);
    }
    if (data.hasOwnProperty('sensor_kind')) {
      obj['sensor_kind'] = _ApiClient2.default.convertToType(data['sensor_kind'], 'String');
    }
    if (data.hasOwnProperty('quantity_kind')) {
      obj['quantity_kind'] = _ApiClient2.default.convertToType(data['quantity_kind'], 'String');
    }
    if (data.hasOwnProperty('unit')) {
      obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
    }
    if (data.hasOwnProperty('calib')) {
      obj['calib'] = _Calib2.default.constructFromObject(data['calib']);
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
 * @member {model/SensorValue} value 
 */
_exports.prototype['value'] = undefined;
/**
 * quantity kind measured
 * @member {model/QuantityKinds} quantity_kind 
 */
_exports.prototype['quantity_kind'] = undefined;
/**
 * unit of the sensor
 * @member {model/Units} unit
 */
_exports.prototype['unit'] = undefined;
/**
 * kind of device providing the sensor
 * @member {model/SensorKinds} sensor_kind 
 */
_exports.prototype['sensor_kind'] = undefined;
/**
 * calibration
 * @member {model/Calib} value 
 */
_exports.prototype['calib'] = undefined;

exports.default = _exports;