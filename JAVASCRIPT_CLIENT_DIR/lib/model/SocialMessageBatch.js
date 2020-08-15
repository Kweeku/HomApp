'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>SocialMessageBatch</code>.
 * A message to be sent to several users and socials
 * @alias module:model/SocialMessageBatch
 * @class
 * @param channels {Array.<String>} channels where to send the messages
 * @param message {String} 
 */
var _exports = function _exports(channels, message, usernames) {
  var _this = this;

  _this['channels'] = channels;
  _this['message'] = message;
  _this['usernames'] = usernames;
};

/**
 * Constructs a <code>SocialMessageBatch</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SocialMessageBatch} obj Optional instance to populate.
 * @return {module:model/SocialMessageBatch} The populated <code>SocialMessageBatch</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('usernames')) {
      obj['usernames'] = _ApiClient2.default.convertToType(data['usernames'], ['String']);
    }
    if (data.hasOwnProperty('channels')) {
      obj['channels'] = _ApiClient2.default.convertToType(data['channels'], ['String']);
    }
    if (data.hasOwnProperty('message')) {
      obj['message'] = _ApiClient2.default.convertToType(data['message'], 'String');
    }
  }
  return obj;
};

/**
 * names of the destination users
 * @member {Array.<String>} usernames
 */
_exports.prototype['usernames'] = undefined;
/**
 * channels where to send the messages
 * @member {Array.<String>} channels
 */
_exports.prototype['channels'] = undefined;
/**
 * @member {String} message
 */
_exports.prototype['message'] = undefined;

exports.default = _exports;