import TrackPlayer from 'react-native-track-player'
import store from '../redux/index'
import { setPlayingStatus, setPlayerStatus, setCurrentIndex } from '../redux/actions'

let listenersAdded = false

module.exports = async function () {
    if (listenersAdded){
        console.log('listeners already added')
        return
    }
    listenersAdded = true

    TrackPlayer.addEventListener('remote-play', () => {
        store.dispatch(setPlayingStatus(true))
        TrackPlayer.play()
    });

    TrackPlayer.addEventListener('remote-pause', () => {
        store.dispatch(setPlayingStatus(false))
        TrackPlayer.pause()
    });

    TrackPlayer.addEventListener('remote-next', async () => {
        const trackId = await TrackPlayer.getCurrentTrack()
        const state = store.getState().playlist
        if (trackId === state.playlist[state.playlist.length - 1].id){
            TrackPlayer.skip(state.playlist[0].id)
        } else {
            TrackPlayer.skipToNext()
        }
        store.dispatch(setCurrentIndex((state.currentIndex + 1) % state.playlist.length))
    })

    TrackPlayer.addEventListener('remote-previous', async () => {
        const trackId = await TrackPlayer.getCurrentTrack()
        const state = store.getState().playlist
        if (trackId === state.playlist[0].id){
            TrackPlayer.skip(state.playlist[state.playlist.length - 1].id)
            store.dispatch(setCurrentIndex(state.playlist.length - 1))
        } else {
            TrackPlayer.skipToPrevious()
            store.dispatch(setCurrentIndex(state.currentIndex - 1))
        }
    })
}

