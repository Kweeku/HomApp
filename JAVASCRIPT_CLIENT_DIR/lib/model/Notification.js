'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _NotificationCondition = require('./NotificationCondition');

var _NotificationCondition2 = _interopRequireDefault(_NotificationCondition);

var _SocialMessageBatch = require('./SocialMessageBatch');

var _SocialMessageBatch2 = _interopRequireDefault(_SocialMessageBatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Notification</code>.
 * @alias module:model/Notification
 * @class
 * @param condition {module:model/NotificationCondition} 
 * @param action {module:model/SocialMessageBatch} 
 */
var _exports = function _exports(condition, description, action) {
  var _this = this;

  _this['condition'] = condition;
  _this['action'] = action;
  _this['description'] = description;
};

/**
 * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Notification} obj Optional instance to populate.
 * @return {module:model/Notification} The populated <code>Notification</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('description')) {
      obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
    }
    if (data.hasOwnProperty('condition')) {
      obj['condition'] = _NotificationCondition2.default.constructFromObject(data['condition']);
    }
    if (data.hasOwnProperty('action')) {
      obj['action'] = _SocialMessageBatch2.default.constructFromObject(data['action']);
    }
    if (data.hasOwnProperty('expires')) {
      obj['expires'] = _ApiClient2.default.convertToType(data['expires'], 'String');
    }
    if (data.hasOwnProperty('throttling')) {
      obj['throttling'] = _ApiClient2.default.convertToType(data['throttling'], 'Number');
    }
    if (data.hasOwnProperty('times_sent')) {
      obj['times_sent'] = _ApiClient2.default.convertToType(data['times_sent'], 'String');
    }
    if (data.hasOwnProperty('last_notif')) {
      obj['last_notif'] = _ApiClient2.default.convertToType(data['last_notif'], 'String');
    }
    if (data.hasOwnProperty('last_success')) {
      obj['last_success'] = _ApiClient2.default.convertToType(data['last_success'], 'String');
    }
    if (data.hasOwnProperty('last_success_code')) {
      obj['last_success_code'] = _ApiClient2.default.convertToType(data['last_success_code'], 'String');
    }
    if (data.hasOwnProperty('last_failure')) {
      obj['last_failure'] = _ApiClient2.default.convertToType(data['last_failure'], 'String');
    }
    if (data.hasOwnProperty('last_failure_reason')) {
      obj['last_failure_reason'] = _ApiClient2.default.convertToType(data['last_failure_reason'], 'String');
    }
    if (data.hasOwnProperty('status')) {
      obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
    }
  }
  return obj;
};

/**
 * Id of the notification
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * Description of the notification
 * @member {String} description
 */
_exports.prototype['description'] = undefined;
/**
 * @member {module:model/NotificationCondition} condition
 */
_exports.prototype['condition'] = undefined;
/**
 * @member {module:model/SocialMessageBatch} action
 */
_exports.prototype['action'] = undefined;
/**
 * @member {Number} expires
 */
_exports.prototype['expires'] = undefined;
/**
 * minimum interval between two messages in seconds
 * @member {Number} throttling
 */
_exports.prototype['throttling'] = undefined;
/**
 * times_sent of the notification
 * @member {String} times_sent
 */
_exports.prototype['times_sent'] = undefined;
/**
 * last_notification of the notification
 * @member {String} last_notification
 */
_exports.prototype['last_notification'] = undefined;
/**
 * last_success of the notification
 * @member {String} last_success
 */
_exports.prototype['last_success'] = undefined;
/**
 * last_success_code of the notification
 * @member {String} last_success_code
 */
_exports.prototype['last_success_code'] = undefined;
/**
 * last_failure of the notification
 * @member {String} last_failure
 */
_exports.prototype['last_failure'] = undefined;
/**
 * last_failure_reason of the notification
 * @member {String} last_failure_reason
 */
_exports.prototype['last_failure_reason'] = undefined;
/**
 * status of the notification
 * @member {String} status
 */
_exports.prototype['status'] = undefined;

exports.default = _exports;