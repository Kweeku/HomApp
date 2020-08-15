import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    sensorRequest: ['deviceId', 'sensorId'],
    sensorAllRequest: ['deviceId'],
    sensorDataRequest: ['deviceId', 'sensorId'],
    sensorCreateRequest: ['deviceId', 'sensorId'],
    sensorUpdateRequest: ['deviceId','sensor'],
    sensorDeleteRequest: ['deviceId','sensorId'],

    sensorSuccess: ['sensor'],
    sensorAllSuccess: ['sensors'],
    sensorDataSuccess: ['sensorData'],
    sensorUpdateSuccess: ['sensor'],
    sensorDeleteSuccess: [],
    sensorCreateSuccess: [],

    sensorFailure: ['error'],
    sensorAllFailure: ['error'],
    sensorDataFailure: ['error'],
    sensorUpdateFailure: ['error'],
    sensorDeleteFailure: ['error'],
    sensorCreateFailure: ['error']
})

export const SensorTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingOne: null,
    fetchingAll: null,
    fetchingData: null,
    updating: null,
    deleting: null,
    creating: null,
    sensor: null,
    sensors: null,
    sensorData: null,
    errorOne: null,
    errorAll: null,
    errorUpdating: null,
    errorDeleting: null,
    errorData: null,
    errorCreating: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
    state.merge({
        fetchingOne: true,
        sensor: null
    })

// request the data from an api
export const allRequest = (state) =>
    state.merge({
        fetchingAll: true,
        sensors: null
    })

// request the data from an api
export const dataRequest = (state) =>
    state.merge({
        fetchingData: true,
        sensorData: null
    })

// request to update from an api
export const updateRequest = (state) =>
    state.merge({
        updating: true
    })
// request to delete from an api
export const deleteRequest = (state) =>
    state.merge({
        deleting: true
    })

// request to create from an api
export const createRequest = (state) =>
    state.merge({
        creating: true
    })


// successful api lookup for single entity
export const success = (state, action) => {
    const { sensor } = action
    return state.merge({
        fetchingOne: false,
        errorOne: null,
        sensor
    })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
    const { sensors } = action
    return state.merge({
        fetchingAll: false,
        errorAll: null,
        sensors
    })
}

// successful api lookup for all entities
export const dataSuccess = (state, action) => {
    const { sensorData } = action
    return state.merge({
        fetchingData: false,
        errorData: null,
        sensorData
    })
}
// successful api update
export const updateSuccess = (state, action) => {
    const { sensor } = action
    return state.merge({
        updating: false,
        errorUpdating: null,
        sensor
    })
}
// successful api delete
export const deleteSuccess = (state) => {
    return state.merge({
        deleting: false,
        errorDeleting: null,
        sensor: null
    })
}

// successful creation
export const createSuccess = (state) => {
    return state.merge({
        creating: false,
        errorCreating: null,
        sensor: null
    })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
    const { error } = action
    return state.merge({
        fetchingOne: false,
        errorOne: error,
        sensor: null
    })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
    const { error } = action
    return state.merge({
        fetchingAll: false,
        errorAll: error,
        sensors: null
    })
}

// Something went wrong fetching all entities.
export const dataFailure = (state, action) => {
    const { error } = action
    return state.merge({
        fetchingData: false,
        errorData: error,
        sensorData: null
    })
}

// Something went wrong updating.
export const updateFailure = (state, action) => {
    const { error } = action
    return state.merge({
        updating: false,
        errorUpdating: error,
        sensor: state.sensor
    })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
    const { error } = action
    return state.merge({
        deleting: false,
        errorDeleting: error,
        sensor: state.sensor
    })
}
// Something went wrong creating.
export const createFailure = (state, action) => {
    const { error } = action
    return state.merge({
        creating: false,
        errorCreating: error,
        sensor: state.sensor
    })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SENSOR_REQUEST]: request,
    [Types.SENSOR_ALL_REQUEST]: allRequest,
    [Types.SENSOR_DATA_REQUEST]: dataRequest,
    [Types.SENSOR_UPDATE_REQUEST]: updateRequest,
    [Types.SENSOR_DELETE_REQUEST]: deleteRequest,
    [Types.SENSOR_CREATE_REQUEST]: createRequest,

    [Types.SENSOR_SUCCESS]: success,
    [Types.SENSOR_ALL_SUCCESS]: allSuccess,
    [Types.SENSOR_DATA_SUCCESS]: dataSuccess,

    [Types.SENSOR_UPDATE_SUCCESS]: updateSuccess,
    [Types.SENSOR_DELETE_SUCCESS]: deleteSuccess,
    [Types.SENSOR_CREATE_SUCCESS]: createSuccess,

    [Types.SENSOR_FAILURE]: failure,
    [Types.SENSOR_ALL_FAILURE]: allFailure,
    [Types.SENSOR_DATA_FAILURE]: dataFailure,

    [Types.SENSOR_UPDATE_FAILURE]: updateFailure,
    [Types.SENSOR_DELETE_FAILURE]: deleteFailure,
    [Types.SENSOR_CREATE_FAILURE]: createFailure
})
