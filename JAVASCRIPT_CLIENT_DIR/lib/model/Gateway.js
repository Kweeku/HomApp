'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _GatewayTunnel = require('./GatewayTunnel');

var _GatewayTunnel2 = _interopRequireDefault(_GatewayTunnel);

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Gateway</code>.
 * @alias module:model/Gateway
 * @class
 * @param id {String} Unique ID of the project node
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Gateway</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Gateway} obj Optional instance to populate.
 * @return {module:model/Gateway} The populated <code>Gateway</code> instance.
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
    if (data.hasOwnProperty('visibility')) {
      obj['visibility'] = _ApiClient2.default.convertToType(data['visibility'], 'String');
    }
    if (data.hasOwnProperty('devices')) {
      obj['devices'] = _ApiClient2.default.convertToType(data['devices'], 'Array');
    }
    if (data.hasOwnProperty('date_created')) {
      obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
    }
    if (data.hasOwnProperty('date_modified')) {
      obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'String');
    }
    if (data.hasOwnProperty('connected')) {
      obj['connected'] = _ApiClient2.default.convertToType(data['connected'], 'Bool');
    }
    if (data.hasOwnProperty('last_seen')) {
      obj['last_seen'] = _ApiClient2.default.convertToType(data['last_seen'], 'String');
    }
    if (data.hasOwnProperty('location')) {
      obj['location'] = _Location2.default.constructFromObject(data['location']);
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
 * owner of the device node
 * @member {String} owner
 */
_exports.prototype['owner'] = undefined;
/**
 * visibility of the device node (either "private" or "public")
 * @member {String} visibility
 */
_exports.prototype['visibility'] = undefined;
/**
 * @member {module:model/GatewayTunnel} tunnel
 */
_exports.prototype['tunnel'] = undefined;
/**
 * @member {Array} devices
 */
_exports.prototype['devices'] = undefined;
/**
 * time created on Cloud side
 * @member {String} date_created
 */
_exports.prototype['date_created'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
_exports.prototype['date_modified'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
_exports.prototype['connected'] = undefined;
/**
 * time modified on Cloud side
 * @member {String} date_modified
 */
_exports.prototype['last_seen'] = undefined;
/**
 * time modified on Cloud side
 * @member {module:model/Location} location
 */
_exports.prototype['location'] = undefined;

exports.default = _exports;