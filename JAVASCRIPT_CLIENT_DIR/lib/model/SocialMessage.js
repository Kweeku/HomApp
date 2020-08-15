'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>SocialMessage</code>.
 * One social network message
 * @alias module:model/SocialMessage
 * @class
 * @param channel {String} 
 * @param message {String} 
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>SocialMessage</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SocialMessage} obj Optional instance to populate.
 * @return {module:model/SocialMessage} The populated <code>SocialMessage</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('username')) {
      obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
    }
    if (data.hasOwnProperty('channel')) {
      obj['channel'] = _ApiClient2.default.convertToType(data['channel'], 'String');
    }
    if (data.hasOwnProperty('message')) {
      obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
    }
    if (data.hasOwnProperty('timestamp')) {
      obj['timestamp'] = _ApiClient2.default.convertToType(data['timestamp'], 'String');
    }
  }
  return obj;
};

/**
 * ID of the message
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * User name in Keycloak
 * @member {String} username
 */
_exports.prototype['username'] = undefined;
/**
 * @member {String} channel
 */
_exports.prototype['channel'] = undefined;
/**
 * @member {String} message
 */
_exports.prototype['message'] = undefined;
/**
 * timestamp of the message
 * @member {String} timestamp
 */
_exports.prototype['timestamp'] = undefined;

exports.default = _exports;