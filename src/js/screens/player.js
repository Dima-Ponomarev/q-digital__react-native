import React, { Component } from 'react'
import { View } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import { connect } from 'react-redux'
import { setPlaylist } from '../redux/actions'
import trackPlayerServices from '../services/trackPlayerService'

const localTracks = [
    {
        id: '3',
        url: require('../../audio/IVOXYGEN-room.mp3'),
        title: 'Room',
        artist: 'IVOXYGEN',
    },
    {
        id: '4',
        url: require('../../audio/Jack-Stauber-Two-Time.mp3'),
        title: 'Two time',
        artist: 'Jack Stauber',
    },
    {
        id: '5',
        url: require('../../audio/Dora-In-Love.mp3'),
        title: 'In love',
        artist: 'Dora',
    },
]

export class Player extends Component {
    componentDidMount(){
        fetch('https://imagesapi.osora.ru/?isAudio=true')
        .then(res => res.json())
        .then(data => {
            const serverTracks = []
            data.forEach((track, index) => {
                serverTracks.push({
                    id: `${index}`,
                    url: track,
                    title: 'No title',
                    artist: 'Unknown'
                })
            });
            const tracks =  [...serverTracks, ...localTracks]
            this.props.setPlaylist(tracks)
            console.log(this.props.playlist)
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
    { setPlaylist }
)(Player)