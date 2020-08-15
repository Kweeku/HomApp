'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>NotificationCondition</code>.
 * @alias module:model/NotificationCondition
 * @class
 */
var _exports = function _exports(devices, sensors, expression) {
  var _this = this;

  _this['devices'] = devices;
  _this['sensors'] = sensors;
  _this['expression'] = expression;
};

/**
 * Constructs a <code>NotificationCondition</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/NotificationCondition} obj Optional instance to populate.
 * @return {module:model/NotificationCondition} The populated <code>NotificationCondition</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('devices')) {
      obj['devices'] = _ApiClient2.default.convertToType(data['devices'], ['String']);
    }
    if (data.hasOwnProperty('sensors')) {
      obj['sensors'] = _ApiClient2.default.convertToType(data['sensors'], ['String']);
    }
    if (data.hasOwnProperty('expression')) {
      obj['expression'] = _ApiClient2.default.convertToType(data['expression'], 'String');
    }
  }
  return obj;
};

/**
 * @member {Array.<String>} devices
 */
_exports.prototype['devices'] = undefined;
/**
 * @member {Array.<String>} sensors
 */
_exports.prototype['sensors'] = undefined;
/**
 * @member {String} expression
 */
_exports.prototype['expression'] = undefined;

exports.default = _exports;