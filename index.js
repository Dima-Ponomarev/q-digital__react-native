/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/js/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player'
import trackPlayerService from './src/js/services/trackPlayerService'

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => trackPlayerService);