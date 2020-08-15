'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Error</code>.
 * @alias module:model/Error
 * @class
 */
var _exports = function _exports() {
  var _this = this;
};

/**
 * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Error} obj Optional instance to populate.
 * @return {module:model/Error} The populated <code>Error</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('code')) {
      obj['code'] = _ApiClient2.default.convertToType(data['code'], 'Number');
    }
    if (data.hasOwnProperty('message')) {
      obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
    }
    if (data.hasOwnProperty('fields')) {
      obj['fields'] = _ApiClient2.default.convertToType(data['fields'], 'String');
    }
  }
  return obj;
};

/**
 * @member {Number} code
 */
_exports.prototype['code'] = undefined;
/**
 * @member {String} message
 */
_exports.prototype['message'] = undefined;
/**
 * @member {String} fields
 */
_exports.prototype['fields'] = undefined;

exports.default = _exports;