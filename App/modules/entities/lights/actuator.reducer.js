import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    actuatorRequest: ['deviceId', 'actuatorId'],
    actuatorAllRequest: ['deviceId'],
    actuatorCreateRequest: ['deviceId', 'actuatorId'],
    actuatorUpdateRequest: ['deviceId', 'actuatorId', 'name', 'actuator_kind', 'value_type', 'value'],
    actuatorUpdateValueRequest: ['deviceId', 'actuatorId', 'value'],
    actuatorDeleteRequest: ['deviceId', 'actuatorId'],

    actuatorSuccess: ['actuator'],
    actuatorAllSuccess: ['actuators'],
    actuatorUpdateSuccess: ['actuator'],
    actuatorUpdateValueSuccess: [],
    actuatorDeleteSuccess: [],
    actuatorCreateSuccess: [],

    actuatorFailure: ['error'],
    actuatorAllFailure: ['error'],
    actuatorUpdateFailure: ['error'],
    actuatorUpdateValueFailure: ['error'],
    actuatorDeleteFailure: ['error'],
    actuatorCreateFailure: ['error']
})

export const ActuatorTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingOne: null,
    fetchingAll: null,
    updating: null,
    updatingValue: null,
    deleting: null,
    creating: null,
    actuator: null,
    actuators: null,
    errorOne: null,
    errorAll: null,
    errorUpdating: null,
    errorUpdatingValue: null,
    errorDeleting: null,
    errorCreating: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
    state.merge({
        fetchingOne: true,
        actuator: null
    })

// request the data from an api
export const allRequest = (state) =>
    state.merge({
        fetchingAll: true,
        actuators: null
    })

// request to update from an api
export const updateRequest = (state) =>
    state.merge({
        updating: true
    })
// request to update value from an api
export const updateValueRequest = (state) =>
    state.merge({
        updatingValue: true
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
    const { actuator } = action
    return state.merge({
        fetchingOne: false,
        errorOne: null,
        actuator
    })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
    const { actuators } = action
    return state.merge({
        fetchingAll: false,
        errorAll: null,
        actuators
    })
}

// successful api update
export const updateSuccess = (state, action) => {
    const { actuator } = action
    return state.merge({
        updating: false,
        errorUpdating: null,
        actuator
    })
}

// successful api value update
export const updateValueSuccess = (state) => {
    return state.merge({
        updatingValue: false,
        errorUpdatingValue: null,
        actuator: null
    })
}

// successful api delete
export const deleteSuccess = (state) => {
    return state.merge({
        deleting: false,
        errorDeleting: null,
        actuator: null
    })
}

// successful creation
export const createSuccess = (state) => {
    return state.merge({
        creating: false,
        errorCreating: null,
        actuator: null
    })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
    const { error } = action
    return state.merge({
        fetchingOne: false,
        errorOne: error,
        actuator: null
    })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
    const { error } = action
    return state.merge({
        fetchingAll: false,
        errorAll: error,
        actuators: null
    })
}

// Something went wrong updating.
export const updateFailure = (state, action) => {
    const { error } = action
    return state.merge({
        updating: false,
        errorUpdating: error,
        actuator: state.actuator
    })
}

// Something went wrong updating value.
export const updateValueFailure = (state, action) => {
    const { error } = action
    return state.merge({
        updatingValue: false,
        errorUpdatingValue: error,
        actuator: state.actuator
    })
}

// Something went wrong deleting.
export const deleteFailure = (state, action) => {
    const { error } = action
    return state.merge({
        deleting: false,
        errorDeleting: error,
        actuator: state.actuator
    })
}
// Something went wrong creating.
export const createFailure = (state, action) => {
    const { error } = action
    return state.merge({
        creating: false,
        errorCreating: error,
        actuator: state.actuator
    })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACTUATOR_REQUEST]: request,
    [Types.ACTUATOR_ALL_REQUEST]: allRequest,
    [Types.ACTUATOR_UPDATE_REQUEST]: updateRequest,
    [Types.ACTUATOR_UPDATE_VALUE_REQUEST]: updateValueRequest,
    [Types.ACTUATOR_DELETE_REQUEST]: deleteRequest,
    [Types.ACTUATOR_CREATE_REQUEST]: createRequest,

    [Types.ACTUATOR_SUCCESS]: success,
    [Types.ACTUATOR_ALL_SUCCESS]: allSuccess,
    [Types.ACTUATOR_UPDATE_SUCCESS]: updateSuccess,
    [Types.ACTUATOR_UPDATE_VALUE_SUCCESS]: updateValueSuccess,
    [Types.ACTUATOR_DELETE_SUCCESS]: deleteSuccess,
    [Types.ACTUATOR_CREATE_SUCCESS]: createSuccess,

    [Types.ACTUATOR_FAILURE]: failure,
    [Types.ACTUATOR_ALL_FAILURE]: allFailure,
    [Types.ACTUATOR_UPDATE_FAILURE]: updateFailure,
    [Types.ACTUATOR_UPDATE_VALUE_FAILURE]: updateValueFailure,
    [Types.ACTUATOR_DELETE_FAILURE]: deleteFailure,
    [Types.ACTUATOR_CREATE_FAILURE]: createFailure
})
