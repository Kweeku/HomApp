import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SensorActions from './sensor.reducer'

export function* getSensor(api, action) {
    const { sensorId, deviceId } = action
    // make the call to the api
    const apiCall = call(api.getSensor, deviceId, sensorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorSuccess(response.data))
    } else {
        yield put(SensorActions.sensorFailure(response.data))
    }
}

export function* getSensors(api, action) {
    const { deviceId } = action
    // make the call to the api
    const apiCall = call(api.getSensors, deviceId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorAllSuccess(response.data))
    } else {
        yield put(SensorActions.sensorAllFailure(response.data))
    }
}

export function* getSensorData(api, action) {
    const { deviceId, sensorId } = action
    // make the call to the api
    const apiCall = call(api.getSensorData, deviceId, sensorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorDataSuccess(response.data))
    } else {
        yield put(SensorActions.sensorDataFailure(response.data))
    }
}

export function* updateSensor(api, action) {
    const { sensor } = action
    // make the call to the api
    const idIsNotNull = !!sensor.id
    const apiCall = call(idIsNotNull ? api.updateSensor : api.createSensor, sensor)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorUpdateSuccess(response.data))
    } else {
        yield put(SensorActions.sensorUpdateFailure(response.data))
    }
}

export function* deleteSensor(api, action) {
    const { deviceId, sensorId } = action
    // make the call to the api
    const apiCall = call(api.deleteSensor, deviceId, sensorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorDeleteSuccess())
    } else {
        yield put(SensorActions.sensorDeleteFailure(response.data))
    }
}

export function* createSensor(api, action) {
    const { deviceId, sensorId } = action
    // make the call to the api
    const apiCall = call(api.createSensor, deviceId, sensorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(SensorActions.sensorCreateSuccess())
    } else {
        yield put(SensorActions.sensorCreateFailure(response.data))
    }
}
