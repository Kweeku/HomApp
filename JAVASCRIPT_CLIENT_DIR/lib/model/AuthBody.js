'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>AuthBody</code>.
 * @alias module:model/AuthBody
 * @class
 * @param username {String} username
 * @param password {String} password
 */
var _exports = function _exports(username, password) {
  var _this = this;

  _this['username'] = username;
  _this['password'] = password;
};

/**
 * Constructs a <code>AuthBody</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AuthBody} obj Optional instance to populate.
 * @return {module:model/AuthBody} The populated <code>AuthBody</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('username')) {
      obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
    }
    if (data.hasOwnProperty('password')) {
      obj['password'] = _ApiClient2.default.convertToType(data['password'], 'String');
    }
  }
  return obj;
};

/**
 * username
 * @member {String} username
 */
_exports.prototype['username'] = undefined;
/**
 * password
 * @member {String} password
 */
_exports.prototype['password'] = undefined;

exports.default = _exports;