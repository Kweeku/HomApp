// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import AppConfig from '../../config/app-config'

// our "constructor"
const create = () => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: "https://api.waziup.io/api/v2",
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const setAuthToken = (userAuth) => api.setHeader('Authorization', 'Bearer ' + userAuth)
  const requestToken = (username, password) => api.post('/auth/token', username, password)
  const getDevicePermissions = () => api.get('/auth/permissions/devices')
  const getGatewayPermissions = () => api.get('/auth/permissions/gateways')
  const getProjectPermissions = () => api.get('/auth/permissions/projects')

  const createDevice = (deviceId) => api.post('/devices', deviceId)
  const getDevices = () => api.get('/devices')
  const getDevice = (deviceId) => api.get('/devices/' + deviceId)
  const deleteDevice = (deviceId) => api.delete('/devices/' + deviceId)
  const updateDevice = (deviceId, name, location, gatewayId, visibility, deployed, owner) =>
    api.put('/devices/' + deviceId + '/' + name, location, gatewayId, visibility, deployed, owner)

  const createSensor = (deviceId, sensorId) => api.post('/devices/' + deviceId + '/sensors/', sensorId)
  const getSensors = (deviceId) => api.get('/devices/' + deviceId + '/sensors')
  const getSensor = (deviceId, sensorId) => api.get('/devices/' + deviceId + '/sensors/' + sensorId)
  const deleteSensor = (deviceId, sensorId) => api.delete('/devices/' + deviceId + '/sensors/' + sensorId)
  const updateSensor = (deviceId, sensorId, name, sensorKind, quantityKind, unit, calib) =>
    api.put('/devices/' + deviceId + '/sensors/' + sensorId + '/' + name, sensorKind, quantityKind, unit, calib)
  const getSensorData = (deviceId, sensorId) => api.get('/devices/' + deviceId + '/sensors/' + sensorId + '/values')

  const createActuator = (deviceId, actuatorId) => api.post('/devices/' + deviceId + '/actuators/', actuatorId)
  const getActuators = (deviceId) => api.get('/devices/' + deviceId + '/actuators')
  const getActuator = (deviceId, actuatorId) => api.get('/devices/' + deviceId + '/actuators/' + actuatorId)
  const deleteActuator = (deviceId, actuatorId) => api.delete('/devices/' + deviceId + '/actuators/' + actuatorId)
  const updateActuator = (deviceId, actuatorId, name, actuatorKind, valueType, value) =>
    api.put('/devices/' + deviceId + '/actuators/' + actuatorId + '/' + name, actuatorKind, valueType, value)

  const createGateway = (gatewayId) => api.post('/gateways/', gatewayId)
  const getGateways = () => api.get('/gateways')
  const getGateway = (gatewayId) => api.get('/gateways/' + gatewayId)
  const deleteGateway = (gatewayId) => api.delete('/gateways/' + gatewayId)
  const updateGateway = (gatewayId, heartbeat, name, owner, location) =>
    api.put('/gateways/' + gatewayId + '/' + heartbeat, name, owner, location)

  const createProject = (projectId) => api.post('/projects/', projectId)
  const getProjects = () => api.get('/projects')
  const getProject = (projectId) => api.get('/projects/' + projectId)
  const deleteProject = (projectId) => api.delete('/projects/' + projectId)
  const updateProject = (projectId, deviceIds, gatewayIds, name) =>
    api.put('/projects/' + projectId + '/' + deviceIds, gatewayIds, name)

  const getUser = (userId) => api.get('/users/' + userId)
  const getUsers = (options) => api.get('/users', options)
  const createUser = (userId) => api.post('/users', userId)
  const updateUserSmsCredit = (userId, smsCredit) => api.put('/users/' + userId + '/', smsCredit)

  const createNotification = (notifId) => api.post('/notifications/', notifId)
  const getNotifications = () => api.get('/notifications')
  const getNotification = (notifId) => api.get('/notifications/' + notifId)
  const deleteNotification = (notifId) => api.delete('/notifications/' + notifId)
  const updateNotification = (notifId) => api.patch('/notifications/' + notifId)
  //To pause and restart a notification: state = "inactive" || "active"
  const pauseStartNotif = (notifId, state) => api.put('/notifications/' + notifId + '/', state)

  const removeAuthToken = () => api.deleteHeader('Authorization')
  const login = (userAuth) => api.post('/auth', userAuth)
  const register = (user) => api.post('/register', user)
  const forgotPassword = (data) =>
    api.post('/account/reset-password/init', data, {
      headers: { 'Content-Type': 'text/plain', Accept: 'application/json, text/plain, */*' },
    })

  const getAccount = () => api.get('/account')
  const updateAccount = (account) => api.put('/account', account)
  const changePassword = (currentPassword, newPassword) => api.post('/account/change-password', { currentPassword, newPassword }, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*' } })

  const updateUser = (user) => api.put('/users', user)
  const deleteUser = (userId) => api.delete('/users/' + userId)

  // ignite-jhipster-api-method-needle

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    requestToken,
    getProjectPermissions,
    getDevicePermissions,
    getGatewayPermissions,

    createDevice,
    getDevice,
    getDevices,
    deleteDevice,
    updateDevice,

    createSensor,
    getSensor,
    getSensors,
    deleteSensor,
    updateSensor,
    getSensorData,

    createActuator,
    getActuator,
    getActuators,
    deleteActuator,
    updateActuator,

    createGateway,
    getGateway,
    getGateways,
    deleteGateway,
    updateGateway,

    createProject,
    getProject,
    getProjects,
    deleteProject,
    updateProject,

    createNotification,
    getNotification,
    getNotifications,
    deleteNotification,
    updateNotification,
    pauseStartNotif,

    createUser,
    updateUser,
    updateUserSmsCredit,
    getUsers,
    getUser,
    deleteUser,

    // ignite-jhipster-api-export-needle
    setAuthToken,
    removeAuthToken,
    login,
    register,
    forgotPassword,
    getAccount,
    updateAccount,
    changePassword
  }
}

// let's return back our create method as the default.
export default {
  create
}
