'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Resource = require('./Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _Scope = require('./Scope');

var _Scope2 = _interopRequireDefault(_Scope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Constructs a new <code>Permission</code>.
   * @alias module:model/Permission
   * @class
   */
var _exports = function _exports() {
  var _this = this;
};

/**
 * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Permission} obj Optional instance to populate.
 * @return {module:model/Permission} The populated <code>Permission</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('resource')) {
      obj['resource'] = _Resource2.default.constructFromObject(data['resource']);
    }
    if (data.hasOwnProperty('scopes')) {
      obj['scopes'] = data['scopes'].map(function (s) {
        return _Scope2.default.constructFromObject(s);
      });
    }
  }
  return obj;
};

/**
 * @member {module:model/Resource} resource
 */
_exports.prototype['resource'] = undefined;
/**
 * @member {Array.<module:model/Scope>} scopes
 */
_exports.prototype['scopes'] = undefined;

exports.default = _exports;