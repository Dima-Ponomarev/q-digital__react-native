import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import { connect } from 'react-redux'
import { setPlaylist } from '../redux/actions'
import trackPlayerServices from '../services/trackPlayerService'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    state = {
        isReady: false,
        isPlaying: false,
        currentIndex: 0
    }

    componentDidMount(){
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.registerPlaybackService(() => trackPlayerServices);
        });

        if(!this.state.isPlaying){
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
                TrackPlayer.add(this.props.playlist)
                this.setState({isReady: true})
            })
        }
    }

    startPlaying = () => {
        this.setState({isPlaying: true})
        TrackPlayer.play()
    }

    stopPlaying = () => {
        this.setState({isPlaying: false})
        TrackPlayer.pause()
    }

    nextTrack = async () => {
        const trackId = await TrackPlayer.getCurrentTrack()
        if (trackId === this.props.playlist[this.props.playlist.length - 1].id){
            TrackPlayer.skip(this.props.playlist[0].id)
        } else {
            TrackPlayer.skipToNext()
        }
        this.setState({currentIndex: (this.state.currentIndex + 1) % this.props.playlist.length})
    }

    previousTrack = async () => {
        const trackId = await TrackPlayer.getCurrentTrack()
        if (trackId === this.props.playlist[0].id){
            TrackPlayer.skip(this.props.playlist[this.props.playlist.length - 1].id)
            this.setState({currentIndex: this.props.playlist.length - 1})
        } else {
            TrackPlayer.skipToPrevious()
            this.setState({currentIndex: this.state.currentIndex - 1})
        }
    }

    render() {
        return (
            <View style={styles.player}>
                {this.state.isReady &&
                (
                <View>
                    <View style={styles.player__info}>
                        <Text style={styles.player__title}>{this.props.playlist[this.state.currentIndex].title}</Text>
                        <Text style={styles.player__artist}>{this.props.playlist[this.state.currentIndex].artist}</Text>
                    </View>   
                    <View style={styles.player__controls}>
                        <TouchableOpacity style={styles.player__btn} onPress={this.previousTrack}>
                            <Icon size={40} name='step-backward' color='#fff'/>
                        </TouchableOpacity>
                        {this.state.isPlaying 
                        ?
                        <TouchableOpacity style={styles.player__playBtn} onPress={this.stopPlaying}>
                            <Icon size={60} name='pause' color='#fff'/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.player__playBtn} onPress={this.startPlaying}>
                            <Icon size={60} name='play' color='#fff' style={{marginRight: -10}}/>
                        </TouchableOpacity>
                        }
                        <TouchableOpacity style={styles.player__btn} onPress={this.nextTrack}>
                            <Icon size={40} name='step-forward' color='#fff'/>
                        </TouchableOpacity>
                    </View> 
                </View>   
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    player: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    player__controls: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    player__playBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 20,
    },
    player__btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 25
    },
    player__info: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    player__title: {
        fontWeight: '700',
        fontSize: 30,
    },
    player__artist: {
        fontSize: 20
    }
})

const mapStateToProps = state => {
    return {
        playlist: state.playlist.playlist
    }
}

export default connect(
    mapStateToProps,
    { setPlaylist }
)(Player)