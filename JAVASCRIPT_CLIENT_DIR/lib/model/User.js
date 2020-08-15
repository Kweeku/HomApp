'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>User</code>.
 * @alias module:model/User
 * @class
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/User} obj Optional instance to populate.
 * @return {module:model/User} The populated <code>User</code> instance.
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
    if (data.hasOwnProperty('firstName')) {
      obj['firstName'] = _ApiClient2.default.convertToType(data['firstName'], 'String');
    }
    if (data.hasOwnProperty('lastName')) {
      obj['lastName'] = _ApiClient2.default.convertToType(data['lastName'], 'String');
    }
    if (data.hasOwnProperty('createdTime')) {
      obj['createdTime'] = _ApiClient2.default.convertToType(data['createdTime'], 'String');
    }
    if (data.hasOwnProperty('email')) {
      obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
    }
    if (data.hasOwnProperty('phone')) {
      obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
    }
    if (data.hasOwnProperty('facebook')) {
      obj['facebook'] = _ApiClient2.default.convertToType(data['facebook'], 'String');
    }
    if (data.hasOwnProperty('twitter')) {
      obj['twitter'] = _ApiClient2.default.convertToType(data['twitter'], 'String');
    }
    if (data.hasOwnProperty('sms_credit')) {
      obj['sms_credit'] = _ApiClient2.default.convertToType(data['sms_credit'], 'Integer');
    }
  }
  return obj;
};

/**
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * @member {String} username
 */
_exports.prototype['username'] = undefined;
/**
 * @member {String} firstName
 */
_exports.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */
_exports.prototype['lastName'] = undefined;
/**
 * @member {String} createdTime
 */
_exports.prototype['createdTime'] = undefined;
/**
 * @member {String} email
 */
_exports.prototype['email'] = undefined;
/**
 * @member {String} phone
 */
_exports.prototype['phone'] = undefined;
/**
 * @member {String} address
 */
_exports.prototype['address'] = undefined;
/**
 * @member {String} facebook
 */
_exports.prototype['facebook'] = undefined;
/**
 * @member {String} twitter
 */
_exports.prototype['twitter'] = undefined;
/**
 * @member {Integer} smsCredit
 */
_exports.prototype['sms_credit'] = undefined;

exports.default = _exports;