import React, { Component } from 'react'
import { View } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import { connect } from 'react-redux'
import { setPLaylist } from '../redux/actions'
import trackPlayerServices from '../services/trackPlayerService'

const testTrack = {
  id: '0',
  url: 'https://imagesapi.osora.ru/audio/2.mp3',
  title: 'Okay',
  artist: 'Tima Belorusskiiy',
}

export class Player extends Component {
    componentDidMount(){
        fetch('https://imagesapi.osora.ru/?isAudio=true')
        .then(res => res.json())
        .then(data => {
            const serverSongs = []
            data.forEach((song, index) => {
                serverSongs.push({
                    id: `${index}`,
                    url: song,
                    title: 'No title',
                    artist: 'Unknown'
                })
            });
            this.props.setPLaylist(serverSongs)
        })

    TrackPlayer.setupPlayer().then(() => {
        TrackPlayer.registerPlaybackService(() => trackPlayerServices);
    });
}

    render() {
        return (
            <View>
                
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlist: state.playlist
    }
}

export default connect(
    mapStateToProps,
    { setPLaylist }
)(Player)