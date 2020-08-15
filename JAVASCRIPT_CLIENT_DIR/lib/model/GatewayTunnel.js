'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>GatewayTunnel</code>.
 * @alias module:model/GatewayTunnel
 * @class
 * @param tunnel_port {Integer} of the gateway tunnel
 */
var _exports = function _exports(tunnel_port) {
  var _this = this;

  _this['tunnel_port'] = tunnel_port;
};

/**
 * Constructs a <code>GatewayTunnel</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/GatewayTunnel} obj Optional instance to populate.
 * @return {module:model/GatewayTunnel} The populated <code>GatewayTunnel</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('tunnel_port')) {
      obj['tunnel_port'] = _ApiClient2.default.convertToType(data['tunnel_port'], 'Number');
    }
  }

  return obj;
};

/**
 * Tunnel port of the gateway tunnel node
 * @member {Number} tunnel_port
 */
_exports.prototype['tunnel_port'] = undefined;

exports.default = _exports;