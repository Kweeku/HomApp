'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>CalibFunction</code>.
 * location is a pair of [enabled, func].
 * @alias module:model/CalibFunction
 * @class
 */
var _exports = function exports(enabled, func) {
  var _this = this;

  _this['enabled'] = enabled;
  _this['func'] = func;
};

/**
 * Constructs a <code>CalibFunction</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalibFunction} obj Optional instance to populate.
 * @return {module:model/CalibFunction} The populated <code>CalibFunction</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('enabled')) {
      obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
    }
    if (data.hasOwnProperty('func')) {
      obj['func'] = _ApiClient2.default.convertToType(data['func'], 'Number');
    }
  }
  return obj;
};

/**
 * @member {Boolean} enabled
 */
_exports.prototype['enabled'] = undefined;
/**
 * @member {Number} func
 */
_exports.prototype['func'] = undefined;

exports.default = _exports;