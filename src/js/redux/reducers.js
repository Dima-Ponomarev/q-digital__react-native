import { combineReducers } from 'redux';
import { SET_LOCAL, SET_FETCHED, SET_PLAYLIST, SET_PLAYER_STATUS } from './actionTypes'
import initialState from './initialState'

const imageReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_LOCAL:
      return {
        ...state,
        local: action.payload
      }
    case SET_FETCHED:
      return {
        ...state,
        server: action.payload
      }
    default: 
      return state
  }
}

const playlistReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      }
    case SET_PLAYER_STATUS: 
      return {
        ...state,
        isReady: action.payload
      }
    default: 
      return state
  }
}

export default combineReducers({
  images: imageReducer,
  playlist: playlistReducer
})

