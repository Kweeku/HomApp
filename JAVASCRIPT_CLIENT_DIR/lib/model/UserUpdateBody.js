'use strict';

/**
 * Constructs a new <code>UserUpdateBody</code>.
 * @alias module:model/UserUpdateBody
 * @class
 * @param firstName {String} User's First Name
 * @param lastName {String} User's Last Name
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exports = function _exports(firstName, lastName) {
  var _this = this;

  _this['firstName'] = firstName;
  _this['lastName'] = lastName;
};

/**
 * Constructs a <code>UserUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UserUpdateBody} obj Optional instance to populate.
 * @return {module:model/UserUpdateBody} The populated <code>UserUpdateBody</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('firstName')) {
      obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
    }
    if (data.hasOwnProperty('lastName')) {
      obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
    }
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
  }
  return obj;
};

/**
 * User's First Name
 * @member {String} firstName
 */
_exports.prototype['firstName'] = undefined;
/**
 * User's Last Name
 * @member {String} lastName
 */
_exports.prototype['lastName'] = undefined;
/**
 * User id
 * @member {String} id
 */
_exports.prototype['id'] = undefined;

exports.default = _exports;