import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from 'reactotron-react-native'
import '../../Config/reactotron-config'

import RehydrationServices from '../services/rehydration.service'
import ReduxPersist from '../../Config/redux-persist'
import Config from '../../Config/debug-config'
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  let sagaMiddleware;
  if (__DEV__) {
    const sagaMonitor = Reactotron.createSagaMonitor();
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  } else {
    sagaMiddleware = createSagaMiddleware();
  }
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  if (Config.useReactotron) {
    enhancers.push(Reactotron.createEnhancer())
  }
  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
