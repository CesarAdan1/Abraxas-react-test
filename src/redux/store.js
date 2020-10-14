import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import * as History from 'history'

import reducer from './reducers';

export const history = History.createBrowserHistory()

const rootReducer = combineReducers({
    reducer,
    router: connectRouter(history),
  })
  
 export const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(thunk, logger)),
   
  )