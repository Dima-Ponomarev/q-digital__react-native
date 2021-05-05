import { SET_LOCAL, SET_FETCHED, SET_PLAYLIST, SET_PLAYER_STATUS, SET_PLAYING_STATUS, SET_CURRENT_INDEX} from './actionTypes'

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

export function setPlayingStatus(status) {
  return {
    type: SET_PLAYING_STATUS,
    payload: status
  }
}

export function setCurrentIndex(index) {
  return {
    type: SET_CURRENT_INDEX,
    payload: index
  }
}