'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _CalibLinear = require('./CalibLinear');

var _CalibLinear2 = _interopRequireDefault(_CalibLinear);

var _CalibFunction = require('./CalibFunction');

var _CalibFunction2 = _interopRequireDefault(_CalibFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Calib</code>.
 * Calib is a pair of [linear, calFunction].
 * @alias module:model/Calib
 * @alias module:model/CalibLinear
 * @alias module:model/CalibFunction
 * @class
 */
var _exports = function exports(linear, calFunction) {
  var _this = this;

  _this['linear'] = linear;
  _this['function'] = calFunction;
};

/**
 * Constructs a <code>Calib</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Calib} obj Optional instance to populate.
 * @return {module:model/Calib} The populated <code>Calib</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();
    if (data.hasOwnProperty('linear')) {
      obj['linear'] = _CalibLinear2.default.constructFromObject(data['linear']);
    }
    if (data.hasOwnProperty('function')) {
      obj['function'] = _CalibFunction2.default.constructFromObject(data['function']);
    }
  }
  return obj;
};

/**
 * @member {module:model/CalibLinear} linear
 */
_exports.prototype['linear'] = undefined;
/**
 * @member {module:model/CalibFunction} function
 */
_exports.prototype['function'] = undefined;

exports.default = _exports;