import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import DeviceActions from './device.reducer'

export function* getDevice(api, action) {
  const { deviceId } = action
  // make the call to the api
  const apiCall = call(api.getDevice, deviceId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DeviceActions.deviceSuccess(response.data))
  } else {
    yield put(DeviceActions.deviceFailure(response.data))
  }
}

export function* getDevices(api, action) {
  // make the call to the api
  const apiCall = call(api.getDevices)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DeviceActions.deviceAllSuccess(response.data))
  } else {
    yield put(DeviceActions.deviceAllFailure(response.data))
  }
}

export function* updateDevice(api, action) {
  const { device } = action
  // make the call to the api
  const idIsNotNull = !!device.id
  const apiCall = call(idIsNotNull ? api.updateDevice : api.createDevice, device)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DeviceActions.deviceUpdateSuccess(response.data))
  } else {
    yield put(DeviceActions.deviceUpdateFailure(response.data))
  }
}

export function* deleteDevice(api, action) {
  const { deviceId } = action
  // make the call to the api
  const apiCall = call(api.deleteDevice, deviceId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DeviceActions.deviceDeleteSuccess())
  } else {
    yield put(DeviceActions.deviceDeleteFailure(response.data))
  }
}

export function* createDevice(api, action) {
  const { deviceId } = action
  // make the call to the api
  const apiCall = call(api.createDevice, deviceId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DeviceActions.deviceCreateSuccess())
  } else {
    yield put(DeviceActions.deviceCreateFailure(response.data))
  }
}
