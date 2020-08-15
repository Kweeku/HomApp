'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new <code>Location</code>.
 * location is a pair [latitude, longitude] with the coordinates on earth in decimal notation (e.g. [40.418889, 35.89389]).
 * @alias module:model/Location
 * @class
 */
var _exports = function _exports(latitude, longitude) {
  var _this = this;

  _this['latitude'] = latitude;
  _this['longitude'] = longitude;
};

/**
 * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Location} obj Optional instance to populate.
 * @return {module:model/Location} The populated <code>Location</code> instance.
 */
_exports.constructFromObject = function (data, obj) {
  if (data) {
    obj = obj || new _exports();

    if (data.hasOwnProperty('latitude')) {
      obj['latitude'] = _ApiClient2.default.convertToType(data['latitude'], 'Number');
    }
    if (data.hasOwnProperty('longitude')) {
      obj['longitude'] = _ApiClient2.default.convertToType(data['longitude'], 'Number');
    }
  }
  return obj;
};

/**
 * @member {Number} latitude
 */
_exports.prototype['latitude'] = undefined;
/**
 * @member {Number} longitude
 */
_exports.prototype['longitude'] = undefined;

exports.default = _exports;