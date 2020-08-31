import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import ActuatorActions from './actuator.reducer'

export function* getActuator(api, action) {
    const { actuatorId, deviceId } = action
    // make the call to the api
    const apiCall = call(api.getActuator, deviceId, actuatorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorSuccess(response.data))
    } else {
        yield put(ActuatorActions.actuatorFailure(response.data))
    }
}

export function* getActuators(api, action) {
    const { deviceId } = action
    // make the call to the api
    const apiCall = call(api.getActuators, deviceId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorAllSuccess(response.data))
    } else {
        yield put(ActuatorActions.actuatorAllFailure(response.data))
    }
}

export function* updateActuator(api, action) {
    const { deviceId, actuatorId, name, actuator_kind, value_type, value } = action
    // make the call to the api
    const idIsNotNull = !!actuatorId
    const apiCall = call(idIsNotNull ? api.updateActuator : api.createActuator, deviceId, actuatorId, name, actuator_kind, value_type, value)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorUpdateSuccess(response.data))
    } else {
        yield put(ActuatorActions.actuatorUpdateFailure(response.data))
    }
}

export function* updateActuatorValue(api, action) {
    const { deviceId, actuatorId, value } = action
    // make the call to the api
    const apiCall = call(api.updateActuatorValue, deviceId, actuatorId, value)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorUpdateValueSuccess(response.data))
    } else {
        yield put(ActuatorActions.actuatorUpdateValueFailure(response.data))
    }
}

export function* deleteActuator(api, action) {
    const { deviceId, actuatorId } = action
    // make the call to the api
    const apiCall = call(api.deleteActuator, deviceId, actuatorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorDeleteSuccess())
    } else {
        yield put(ActuatorActions.actuatorDeleteFailure(response.data))
    }
}

export function* createActuator(api, action) {
    const { deviceId, actuatorId } = action
    // make the call to the api
    const apiCall = call(api.createActuator, deviceId, actuatorId)
    const response = yield call(callApi, apiCall)

    // success?
    if (response.ok) {
        yield put(ActuatorActions.actuatorCreateSuccess())
    } else {
        yield put(ActuatorActions.actuatorCreateFailure(response.data))
    }
}
