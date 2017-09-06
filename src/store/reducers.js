import { combineReducers } from 'redux'
import locationReducer from './location'
import NewsReducer from '../../src/routes/Add_news/modules/addnews'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
      somekey:NewsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
