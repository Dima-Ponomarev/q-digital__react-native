import { SET_LOCAL, SET_FETCHED, SET_PLAYLIST, SET_PLAYER_STATUS} from './actionTypes'

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

export function setPlaylist(songs) {
  return {
    type: SET_PLAYLIST,
    payload: songs
  }
}

export function setPlayerStatus(status) {
  return {
    type: SET_PLAYER_STATUS,
    payload: status
  }
}