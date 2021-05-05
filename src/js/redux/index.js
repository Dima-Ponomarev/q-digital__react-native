import * as Actions from './actions'
import { createStore } from 'redux'
import Reducers from './reducers'
import InitialState from './initialState'

// export const Redux = {
//   Actions,
//   Reducers,
//   InitialState,
// }

export const store = createStore(
  Reducers, 
  InitialState, 
)

export default store