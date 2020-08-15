import { call, put, select } from 'redux-saga/effects'

import LoginActions from './login.reducer'
import AccountActions from '../../shared/reducers/account.reducer'

// set User Id

const accountId = 'aa377759-0bd3-4163-af4a-91cbc9641347';
// Is the current user logged in?

export const selectAuthToken = (state) => state.login.authToken
// attempts to login
export function* login(api, username, password) {

  const response = yield call(api.requestToken, username, password)

  // success?
  if (response.ok) {
    yield call(api.requestToken, response)
    yield put(LoginActions.loginSuccess(response))
    yield put(AccountActions.accountRequest(accountId))
    yield put(LoginActions.loginLoad())
    yield put({ type: 'RELOGIN_OK' })
  } else {
    yield put(LoginActions.loginFailure((response.data && response.data.detail) || 'Bad credentials'))
  }
}
// attempts to logout
export function* logout(api) {
  yield call(api.removeAuthToken)
  yield put(LoginActions.logoutSuccess())
  yield put(AccountActions.accountResetSuccess())
  yield put({ type: 'RELOGIN_ABORT' })
}
// loads the login
export function* loginLoad(api) {
  const authToken = yield select(selectAuthToken)
  // only set the token if we have it
  if (authToken) {
    yield call(api.setAuthToken, authToken.data)
    console.tron.log(authToken)
    yield put(LoginActions.loginLoadSuccess())
  }
}


