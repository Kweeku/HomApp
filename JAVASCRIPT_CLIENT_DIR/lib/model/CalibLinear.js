'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _CalibValue = require('./CalibValue');

var _CalibValue2 = _interopRequireDefault(_CalibValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>CalibLinear</code>.
 * CalibLinear is a pair of [value_min, value_max].
 * @alias module:model/CalibValue
 * @alias module:model/CalibValue
 * @class
 */
var _exports = function exports(value_min, value_max) {
  var _this = this;

  _this['value_min'] = value_min;
  _this['value_max'] = value_max;
};

/**
 * Constructs a <code>CalibLinear</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalibLinear} obj Optional instance to populate.
 * @return {module:model/CalibLinear} The populated <code>CalibLinear</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();
    if (data.hasOwnProperty('enabled')) {
      obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
    }
    if (data.hasOwnProperty('value_min')) {
      obj['value_min'] = _CalibValue2.default.constructFromObject(data['value_min']);
    }
    if (data.hasOwnProperty('value_max')) {
      obj['value_max'] = _CalibValue2.default.constructFromObject(data['value_max']);
    }
  }
  return obj;
};

/**
 * @member {Boolean} enabled
 */
_exports.prototype['enabled'] = undefined;
/**
 * @member {module:model/CalibValue} valueMin
 */
_exports.prototype['value_min'] = undefined;
/**
 * @member {module:model/CalibValue} valueMax
 */
_exports.prototype['value_max'] = undefined;

exports.default = _exports;