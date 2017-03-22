import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
}
