import { SET_LOCAL, SET_FETCHED, SET_PLAYLIST} from './actionTypes'

export function setLocal(images) {
  return {
    type: SET_LOCAL,
    payload: images
  }
}

export function setFetched(images) {
  return {
    type: SET_FETCHED,
    payload: images
  }
}

export function setPLaylist(songs) {
  return {
    type: SET_PLAYLIST,
    payload: songs
  }
}