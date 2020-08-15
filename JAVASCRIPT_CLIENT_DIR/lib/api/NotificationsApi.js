'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Error = require('../model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Notification = require('../model/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a new NotificationsApi. 
 * @alias module:api/NotificationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var _exports = function _exports(apiClient) {
  this.apiClient = apiClient || _ApiClient2.default.instance;

  /**
   * Get all notifications
   * data is of type: {@link Array.<module:model/Notification>}
   */
  this.getNotifications = async function (opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = { 'limit': opts['limit'],
      'offset': opts['offset'] };
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [_Notification2.default];

    return this.apiClient.callApi('/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * delete a message to social networks
   * @param {String} notifId 
   */
  this.deleteNotification = async function (notifId) {
    var postBody = null;

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw "Missing the required parameter 'notifId' when calling getNotificationsNotifIdDelete";
    }

    var pathParams = {
      'notif_id': notifId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/notifications/{notif_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Get one message
   * @param {String} notifId 
   * data is of type: {@link module:model/Notification}
   */
  this.getNotification = async function (notifId) {
    var postBody = null;

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw "Missing the required parameter 'notifId' when calling getNotificationsNotifIdGet";
    }

    var pathParams = {
      'notif_id': notifId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _Notification2.default;

    return this.apiClient.callApi('/notifications/{notif_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * post a message to social networks
   * @param {module:model/Notification} data social message
   */
  this.createNotification = async function (data) {
    var postBody = data;

    // verify the required parameter 'data' is set
    if (data === undefined || data === null) {
      throw "Missing the required parameter 'data' when calling getNotificationsPost";
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = "String";

    return this.apiClient.callApi('/notifications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * put a notification status
   * @param {String} notifId 
   * @param {String} body 
   */
  this.putNotificationStatus = async function (notifId, body) {
    var postBody = body;

    // verify the required parameter 'notifId' is set
    if (notifId === undefined || notifId === null) {
      throw "Missing the required parameter 'notifId' when calling putNotificationStatus";
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw "Missing the required parameter 'body' when calling putNotificationStatus";
    }

    var pathParams = {
      'notif_id': deviceId
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['Bearer'];
    var contentTypes = ['text/plain;charset=utf-8'];
    var accepts = ['application/json'];
    var returnType = null;

    return this.apiClient.callApi('/notifications/{notif_id}/status', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };
};

exports.default = _exports;