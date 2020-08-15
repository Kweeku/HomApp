'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enum class Scope.
 * @enum {}
 * @readonly
 */
var _exports = {
  /**
   * value: "devices:create"
   * @const
   */
  "devices:create": "devices:create",
  /**
   * value: "devices:view"
   * @const
   */
  "devices:view": "devices:view",
  /**
   * value: "devices:update"
   * @const
   */
  "devices:update": "devices:update",
  /**
   * value: "devices:delete"
   * @const
   */
  "devices:delete": "devices:delete",
  /**
   * value: "socials:create"
   * @const
   */
  "socials:create": "socials:create",
  /**
   * value: "socials:view"
   * @const
   */
  "socials:view": "socials:view",
  /**
   * value: "socials:update"
   * @const
   */
  "socials:update": "socials:update",
  /**
   * value: "socials:delete"
   * @const
   */
  "socials:delete": "socials:delete",
  /**
   * value: "notifications:create"
   * @const
   */
  "notifications:create": "notifications:create",
  /**
   * value: "notifications:view"
   * @const
   */
  "notifications:view": "notifications:view",
  /**
   * value: "notifications:update"
   * @const
   */
  "notifications:update": "notifications:update",
  /**
   * value: "notifications:delete"
   * @const
   */
  "notifications:delete": "notifications:delete",
  /**
   * value: "history:create"
   * @const
   */
  "history:create": "history:create",
  /**
   * value: "history:view"
   * @const
   */
  "history:view": "history:view",
  /**
   * value: "history:update"
   * @const
   */
  "history:update": "history:update",
  /**
   * value: "history:delete"
   * @const
   */
  "history:delete": "history:delete",
  /**
   * value: "users:create"
   * @const
   */
  "users:create": "users:create",
  /**
   * value: "users:view"
   * @const
   */
  "users:view": "users:view",
  /**
   * value: "users:update"
   * @const
   */
  "users:update": "users:update",
  /**
   * value: "users:delete"
   * @const
   */
  "users:delete": "users:delete" };

/**
 * Returns a <code>Scope</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/Scope} The enum <code>Scope</code> value.
 */
_exports.constructFromObject = function (object) {
  return object;
};

exports.default = _exports;