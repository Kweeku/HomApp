import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/fixture-api'
import DebugConfig from '../../Config/debug-config'

/* ------------- Types ------------- */

import { StartupTypes } from '../reducers/startup.reducer'
import { LoginTypes } from '../../modules/login/login.reducer'
import { AccountTypes } from '../../shared/reducers/account.reducer'
import { RegisterTypes } from '../../modules/account/register/register.reducer'
import { ForgotPasswordTypes } from '../../modules/account/password-reset/forgot-password.reducer'
import { ChangePasswordTypes } from '../../modules/account/password/change-password.reducer'
import { UserTypes } from '../../shared/reducers/user.reducer'
import { SensorTypes } from '../../modules/entities/statistics/sensor.reducer'
import { DeviceTypes } from '../../modules/account/device/device.reducer'
import { ActuatorTypes } from '../../modules/entities/lights/actuator.reducer'
// ignite-jhipster-saga-redux-import-needle

/* ------------- Sagas ------------- */

import { startup } from './startup.saga'
import { login, logout, loginLoad } from '../../modules/login/login.sagas'
import { register } from '../../modules/account/register/register.sagas'
import { forgotPassword } from '../../modules/account/password-reset/forgot-password.sagas'
import { changePassword } from '../../modules/account/password/change-password.sagas'
import { getAccount, updateAccount } from '../../shared/sagas/account.sagas'
import { getUser, getUsers, updateUser, deleteUser } from '../../shared/sagas/user.sagas'
import { getSensor, getSensorData, getSensors, updateSensor, deleteSensor, createSensor, updateSensorValue } from '../../modules/entities/statistics/sensor.sagas'
import { getActuator, getActuators, updateActuator, deleteActuator, createActuator, updateActuatorValue } from '../../modules/entities/lights/actuator.sagas'
import { getDevice, getDevices, updateDevice, deleteDevice, createDevice } from '../../modules/account/device/device.sagas'

// ignite-jhipster-saga-method-import-needle

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // JHipster accounts
    takeLatest(LoginTypes.LOGIN_LOAD, loginLoad, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register, api),
    takeLatest(ForgotPasswordTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, api),
    takeLatest(ChangePasswordTypes.CHANGE_PASSWORD_REQUEST, changePassword, api),
    // ignite-jhipster-saga-redux-connect-needle

    takeLatest(UserTypes.USER_REQUEST, getUser, api),
    takeLatest(UserTypes.USER_ALL_REQUEST, getUsers, api),
    takeLatest(UserTypes.USER_UPDATE_REQUEST, updateUser, api),
    takeLatest(UserTypes.USER_DELETE_REQUEST, deleteUser, api),

    takeLatest(SensorTypes.SENSOR_REQUEST, getSensor, api),
    takeLatest(SensorTypes.SENSOR_ALL_REQUEST, getSensors, api),
    takeLatest(SensorTypes.SENSOR_DATA_REQUEST, getSensorData, api),
    takeLatest(SensorTypes.SENSOR_UPDATE_REQUEST, updateSensor, api),
    takeLatest(SensorTypes.SENSOR_UPDATE_VALUE_REQUEST, updateSensorValue, api),
    takeLatest(SensorTypes.SENSOR_DELETE_REQUEST, deleteSensor, api),
    takeLatest(SensorTypes.SENSOR_CREATE_REQUEST, createSensor, api),

    takeLatest(ActuatorTypes.ACTUATOR_REQUEST, getActuator, api),
    takeLatest(ActuatorTypes.ACTUATOR_ALL_REQUEST, getActuators, api),
    takeLatest(ActuatorTypes.ACTUATOR_UPDATE_REQUEST, updateActuator, api),
    takeLatest(ActuatorTypes.ACTUATOR_UPDATE_VALUE_REQUEST, updateActuatorValue, api),
    takeLatest(ActuatorTypes.ACTUATOR_DELETE_REQUEST, deleteActuator, api),
    takeLatest(ActuatorTypes.ACTUATOR_CREATE_REQUEST, createActuator, api),

    takeLatest(DeviceTypes.DEVICE_REQUEST, getDevice, api),
    takeLatest(DeviceTypes.DEVICE_ALL_REQUEST, getDevices, api),
    takeLatest(DeviceTypes.DEVICE_UPDATE_REQUEST, updateDevice, api),
    takeLatest(DeviceTypes.DEVICE_DELETE_REQUEST, deleteDevice, api),
    takeLatest(DeviceTypes.DEVICE_CREATE_REQUEST, createDevice, api),

    takeLatest(AccountTypes.ACCOUNT_REQUEST, getAccount, api),
    takeLatest(AccountTypes.ACCOUNT_UPDATE_REQUEST, updateAccount, api),
  ])
}
