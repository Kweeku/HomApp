'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthApi = exports.UsersApi = exports.SocialsApi = exports.ProjectsApi = exports.GatewaysApi = exports.ActuatorsApi = exports.SensorsApi = exports.DevicesApi = exports.NotificationsApi = exports.UserUpdateBody = exports.User = exports.Project = exports.GatewayTunnel = exports.Gateway = exports.ActuatorKinds = exports.Actuator = exports.CalibValue = exports.CalibLinear = exports.CalibFunction = exports.Calib = exports.Units = exports.SocialMessageBatch = exports.SocialMessage = exports.Device = exports.SensorKinds = exports.QuantityKinds = exports.NotificationCondition = exports.Notification = exports.SensorValue = exports.Sensor = exports.Location = exports.Error = exports.AuthBody = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AuthBody = require('./model/AuthBody');

var _AuthBody2 = _interopRequireDefault(_AuthBody);

var _Error = require('./model/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Location = require('./model/Location');

var _Location2 = _interopRequireDefault(_Location);

var _Sensor = require('./model/Sensor');

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorValue = require('./model/SensorValue');

var _SensorValue2 = _interopRequireDefault(_SensorValue);

var _Notification = require('./model/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _NotificationCondition = require('./model/NotificationCondition');

var _NotificationCondition2 = _interopRequireDefault(_NotificationCondition);

var _QuantityKinds = require('./model/QuantityKinds');

var _QuantityKinds2 = _interopRequireDefault(_QuantityKinds);

var _SensorKinds = require('./model/SensorKinds');

var _SensorKinds2 = _interopRequireDefault(_SensorKinds);

var _Device = require('./model/Device');

var _Device2 = _interopRequireDefault(_Device);

var _SocialMessage = require('./model/SocialMessage');

var _SocialMessage2 = _interopRequireDefault(_SocialMessage);

var _SocialMessageBatch = require('./model/SocialMessageBatch');

var _SocialMessageBatch2 = _interopRequireDefault(_SocialMessageBatch);

var _Units = require('./model/Units');

var _Units2 = _interopRequireDefault(_Units);

var _Calib = require('./model/Calib');

var _Calib2 = _interopRequireDefault(_Calib);

var _CalibFunction = require('./model/CalibFunction');

var _CalibFunction2 = _interopRequireDefault(_CalibFunction);

var _CalibLinear = require('./model/CalibLinear');

var _CalibLinear2 = _interopRequireDefault(_CalibLinear);

var _CalibValue = require('./model/CalibValue');

var _CalibValue2 = _interopRequireDefault(_CalibValue);

var _Actuator = require('./model/Actuator');

var _Actuator2 = _interopRequireDefault(_Actuator);

var _ActuatorKinds = require('./model/ActuatorKinds');

var _ActuatorKinds2 = _interopRequireDefault(_ActuatorKinds);

var _Gateway = require('./model/Gateway');

var _Gateway2 = _interopRequireDefault(_Gateway);

var _GatewayTunnel = require('./model/GatewayTunnel');

var _GatewayTunnel2 = _interopRequireDefault(_GatewayTunnel);

var _Project = require('./model/Project');

var _Project2 = _interopRequireDefault(_Project);

var _User = require('./model/User');

var _User2 = _interopRequireDefault(_User);

var _UserUpdateBody = require('./model/UserUpdateBody');

var _UserUpdateBody2 = _interopRequireDefault(_UserUpdateBody);

var _NotificationsApi = require('./api/NotificationsApi');

var _NotificationsApi2 = _interopRequireDefault(_NotificationsApi);

var _DevicesApi = require('./api/DevicesApi');

var _DevicesApi2 = _interopRequireDefault(_DevicesApi);

var _SensorsApi = require('./api/SensorsApi');

var _SensorsApi2 = _interopRequireDefault(_SensorsApi);

var _ActuatorsApi = require('./api/ActuatorsApi');

var _ActuatorsApi2 = _interopRequireDefault(_ActuatorsApi);

var _GatewaysApi = require('./api/GatewaysApi');

var _GatewaysApi2 = _interopRequireDefault(_GatewaysApi);

var _ProjectsApi = require('./api/ProjectsApi');

var _ProjectsApi2 = _interopRequireDefault(_ProjectsApi);

var _SocialsApi = require('./api/SocialsApi');

var _SocialsApi2 = _interopRequireDefault(_SocialsApi);

var _UsersApi = require('./api/UsersApi');

var _UsersApi2 = _interopRequireDefault(_UsersApi);

var _AuthApi = require('./api/AuthApi');

var _AuthApi2 = _interopRequireDefault(_AuthApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Waziup API<br>
 * This module provides access to constructors for all the classes which comprise the public API.
 * Usage:
 * <p>
 * <pre>
 * var WaziupApi = require('index'); // See note below*.
 * var xxxSvc = new WaziupApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new WaziupApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new WaziupApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new WaziupApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 */
exports.ApiClient = _ApiClient2.default;
exports.AuthBody = _AuthBody2.default;
exports.Error = _Error2.default;
exports.Location = _Location2.default;
exports.Sensor = _Sensor2.default;
exports.SensorValue = _SensorValue2.default;
exports.Notification = _Notification2.default;
exports.NotificationCondition = _NotificationCondition2.default;
exports.QuantityKinds = _QuantityKinds2.default;
exports.SensorKinds = _SensorKinds2.default;
exports.Device = _Device2.default;
exports.SocialMessage = _SocialMessage2.default;
exports.SocialMessageBatch = _SocialMessageBatch2.default;
exports.Units = _Units2.default;
exports.Calib = _Calib2.default;
exports.CalibFunction = _CalibFunction2.default;
exports.CalibLinear = _CalibLinear2.default;
exports.CalibValue = _CalibValue2.default;
exports.Actuator = _Actuator2.default;
exports.ActuatorKinds = _ActuatorKinds2.default;
exports.Gateway = _Gateway2.default;
exports.GatewayTunnel = _GatewayTunnel2.default;
exports.Project = _Project2.default;
exports.User = _User2.default;
exports.UserUpdateBody = _UserUpdateBody2.default;
exports.NotificationsApi = _NotificationsApi2.default;
exports.DevicesApi = _DevicesApi2.default;
exports.SensorsApi = _SensorsApi2.default;
exports.ActuatorsApi = _ActuatorsApi2.default;
exports.GatewaysApi = _GatewaysApi2.default;
exports.ProjectsApi = _ProjectsApi2.default;
exports.SocialsApi = _SocialsApi2.default;
exports.UsersApi = _UsersApi2.default;
exports.AuthApi = _AuthApi2.default;