import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  deviceRequest: ['deviceId'],
  deviceAllRequest: [],
  deviceCreateRequest: ['deviceId'],
  deviceUpdateRequest: ['device'],
  deviceDeleteRequest: ['deviceId'],

  deviceSuccess: ['device'],
  deviceAllSuccess: ['devices'],
  deviceUpdateSuccess: ['device'],
  deviceDeleteSuccess: [],
  deviceCreateSuccess: [],

  deviceFailure: ['error'],
  deviceAllFailure: ['error'],
  deviceUpdateFailure: ['error'],
  deviceDeleteFailure: ['error'],
  deviceCreateFailure: ['error']
})

export const DeviceTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  deleting: null,
  creating: null,
  device: null,
  devices: null,
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorDeleting: null,
  errorCreating: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({
    fetchingOne: true,
    device: null
  })

// request the data from an api
export const allRequest = (state) =>
  state.merge({
    fetchingAll: true,
    devices: null
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
  const { device } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    device
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { devices } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    devices
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { device } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    device
  })
}
// successful api delete
export const deleteSuccess = (state) => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    device: null
  })
}
// successful creation
export const createSuccess = (state) => {
  return state.merge({
    creating: false,
    errorCreating: null,
    device: null
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    device: null
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    devices: null
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    device: state.device
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    device: state.device
  })
}
// Something went wrong creating.
export const createFailure = (state, action) => {
  const { error } = action
  return state.merge({
    creating: false,
    errorCreating: error,
    device: state.device
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DEVICE_REQUEST]: request,
  [Types.DEVICE_ALL_REQUEST]: allRequest,
  [Types.DEVICE_UPDATE_REQUEST]: updateRequest,
  [Types.DEVICE_DELETE_REQUEST]: deleteRequest,
  [Types.DEVICE_CREATE_REQUEST]: createRequest,

  [Types.DEVICE_SUCCESS]: success,
  [Types.DEVICE_ALL_SUCCESS]: allSuccess,

  [Types.DEVICE_UPDATE_SUCCESS]: updateSuccess,
  [Types.DEVICE_DELETE_SUCCESS]: deleteSuccess,
  [Types.DEVICE_CREATE_SUCCESS]: createSuccess,

  [Types.DEVICE_FAILURE]: failure,
  [Types.DEVICE_ALL_FAILURE]: allFailure,

  [Types.DEVICE_UPDATE_FAILURE]: updateFailure,
  [Types.DEVICE_DELETE_FAILURE]: deleteFailure,
  [Types.DEVICE_CREATE_FAILURE]: createFailure
})
