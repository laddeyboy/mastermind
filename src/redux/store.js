import { createStore } from 'redux'
import mmStore from './reducers'

var store = createStore(mmStore)

export default store
