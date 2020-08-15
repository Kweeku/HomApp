"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _User = require("../model/User");

var _User2 = _interopRequireDefault(_User);

var _UserUpdateBody = require("../model/UserUpdateBody");

var _UserUpdateBody2 = _interopRequireDefault(_UserUpdateBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new UsersApi.
 * @alias module:api/UsersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * Get all users in a realm
   */
  this.getUsers = async function (opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      username: opts["username"],
      limit: opts["limit"],
      offset: opts["offset"]
    };
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = [_User2.default];

    return this.apiClient.callApi("/users/", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * @param {String} userid
   */
  this.getUser = async function (userid) {
    var postBody = null;

    // verify the required parameter 'userid' is set
    if (userid === undefined || userid === null) {
      throw "Missing the required parameter 'userid'";
    }

    var pathParams = {
      userid: userid
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ["Bearer"];
    var contentTypes = ["application/json"];
    var accepts = ["application/json"];
    var returnType = _User2.default;

    return this.apiClient.callApi("/users/{userid}", "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put a user sms credit
   * @param {String} userId 
   * @param {String} body 
   */
  this.putUserSmsCredit = async function (userId, body) {
    var postBody = body;

    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw "Missing the required parameter 'userId' when calling putUserSmsCredit";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putUserSmsCredit";
    }

    var pathParams = {
      'user_id': userId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/users/{user_id}/sms_credit', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;