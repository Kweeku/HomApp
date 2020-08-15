'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

var _Sensor = require('./Sensor');

var _Sensor2 = _interopRequireDefault(_Sensor);

var _Actuator = require('./Actuator');

var _Actuator2 = _interopRequireDefault(_Actuator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Device</code>.
 * @alias module:model/Device
 * @class
 * @param id {String} Unique ID of the device node
 */
var _exports = function _exports(id) {
  var _this = this;

  _this['id'] = id;
};

/**
 * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Device} obj Optional instance to populate.
 * @return {module:model/Device} The populated <code>Device</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('gateway_id')) {
      obj['gateway_id'] = _ApiClient2.default.convertToType(data['gateway_id'], 'String');
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
    if (data.hasOwnProperty('sensors')) {
      obj['sensors'] = _ApiClient2.default.convertToType(data['sensors'], [_Sensor2.default]);
    }
    if (data.hasOwnProperty('actuators')) {
      obj['actuators'] = _ApiClient2.default.convertToType(data['actuators'], [_Actuator2.default]);
    }
    if (data.hasOwnProperty('location')) {
      obj['location'] = _Location2.default.constructFromObject(data['location']);
    }
    if (data.hasOwnProperty('date_created')) {
      obj['date_created'] = _ApiClient2.default.convertToType(data['date_created'], 'String');
    }
    if (data.hasOwnProperty('date_modified')) {
      obj['date_modified'] = _ApiClient2.default.convertToType(data['date_modified'], 'String');
    }
    if (data.hasOwnProperty('domain')) {
      obj['domain'] = _ApiClient2.default.convertToType(data['domain'], 'String');
    }
  }

  return obj;
};

/**
 * Unique ID of the device node
 * @member {String} id
 */
_exports.prototype['id'] = undefined;
/**
 * Unique ID of the gateway
 * @member {String} gateway_id
 */
_exports.prototype['gateway_id'] = undefined;
/**
 * name of the device node
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
 * @member {Array.<module:model/Sensor>} sensors
 */
_exports.prototype['sensors'] = undefined;
/**
 * @member {Array.<module:model/Actuator>} actuators
 */
_exports.prototype['actuators'] = undefined;
/**
 * @member {module:model/Location} location
 */
_exports.prototype['location'] = undefined;
/**
 * date at which the device has been modified
 * @member {String} date_modified
 */
_exports.prototype['date_modified'] = undefined;
/**
 * date at which the device has been created
 * @member {String} date_created
 */
_exports.prototype['date_created'] = undefined;
/**
 * domain of the device
 * @member {String} domain
 */
_exports.prototype['domain'] = undefined;

exports.default = _exports;