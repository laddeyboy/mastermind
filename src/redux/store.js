import { createStore, compose } from 'redux'
import mmStore from './reducers'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)

var store = createStore(mmStore, enhancers)

export default store
