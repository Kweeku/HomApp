'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Error = require('../model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _SocialMessage = require('../model/SocialMessage');

var _SocialMessage2 = _interopRequireDefault(_SocialMessage);

var _SocialMessageBatch = require('../model/SocialMessageBatch');

var _SocialMessageBatch2 = _interopRequireDefault(_SocialMessageBatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new SocialsApi. 
 * @alias module:api/SocialsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * post several message to social networks
   * @param {module:model/SocialMessageBatch} data social message
   */
  this.createSocialMsgsBatch = async function (data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw "Missing the required parameter 'data'";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/socials/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Get all messages sent
   * data is of type: {@link Array.<module:model/SocialMessage>}
   */
  this.getSocialMsgs = async function () {
    var postBody = null;

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [_SocialMessage2.default];

    return this.apiClient.callApi('/socials', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * delete a message to social networks
   * @param {String} msgId 
   */
  this.deleteSocialsMsg = async function (msgId) {
    var postBody = null;

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw "Missing the required parameter 'msgId'";
    }

    var pathParams = {
      'msg_id': msgId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/socials/{msg_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Get one message
   * @param {String} msgId 
   * data is of type: {@link module:model/SocialMessage}
   */
  this.getSocialsMsg = async function (msgId) {
    var postBody = null;

    // verify the required parameter 'msgId' is set
    if (msgId === undefined || msgId === null) {
      throw "Missing the required parameter 'msgId'";
    }

    var pathParams = {
      'msg_id': msgId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _SocialMessage2.default;

    return this.apiClient.callApi('/socials/{msg_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * post a message to social networks
   * @param {module:model/SocialMessage} data social message
   */
  this.createSocialMsg = async function (data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw "Missing the required parameter 'data'";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/socials', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;