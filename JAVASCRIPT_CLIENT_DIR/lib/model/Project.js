'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Device = require('./Device');

var _Device2 = _interopRequireDefault(_Device);

var _Gateway = require('./Gateway');

var _Gateway2 = _interopRequireDefault(_Gateway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Project</code>.
 * @alias module:model/Project
 * @class
 * @param id {String} Unique ID of the project node
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Project} obj Optional instance to populate.
 * @return {module:model/Project} The populated <code>Project</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('name')) {
      obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
    }
    if (data.hasOwnProperty('owner')) {
      obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'String');
    }
    if (data.hasOwnProperty('devices')) {
      obj['devices'] = _ApiClient2.default.convertToType(data['devices'], 'Array');
    }
    if (data.hasOwnProperty('gateways')) {
      obj['gateways'] = _ApiClient2.default.convertToType(data['gateways'], 'Array');
    }
    if (data.hasOwnProperty('device_ids')) {
      obj['device_ids'] = _ApiClient2.default.convertToType(data['device_ids'], 'Array');
    }
    if (data.hasOwnProperty('gateway_ids')) {
      obj['gateway_ids'] = _ApiClient2.default.convertToType(data['gateway_ids'], 'Array');
    }
  }

  return obj;
};

/**
 * Unique ID of the project node
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * name of the project node
 * @member {String} name
 */
_exports.prototype['name'] = undefined;
/**
 * owner of the project node
 * @member {String} owner
 */
_exports.prototype['owner'] = undefined;
/**
 * @member {Array} devices
 */
_exports.prototype['devices'] = undefined;
/**
 * @member {Array} gateways
 */
_exports.prototype['gateways'] = undefined;
/**
 * @member {Array} device_ids
 */
_exports.prototype['device_ids'] = undefined;
/**
 * @member {Array} gateway_ids
 */
_exports.prototype['gateway_ids'] = undefined;

exports.default = _exports;