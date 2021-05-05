import React, { Component } from 'react'
import Main from './screens/main'
import Slider from './screens/slider'
import Navigation from './components/navigation'
import Player from './screens/player'
import { View } from 'react-native'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'
import store from './redux/index'
import { setPlayerStatus, setPlayingStatus } from './redux/actions'
import { Provider } from 'react-redux' 
import TrackPlayer from 'react-native-track-player'


export class App extends Component {

  componentWillUnmount(){
    store.dispatch(setPlayingStatus(false))
    TrackPlayer.pause()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <View style={{flex: 1, backgroundColor: '#eee', height: '100%'}}>
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route path='/slider'>
                <Slider />
              </Route>
              <Route path='/player'>
                <Player />
              </Route>
            </Switch>
            <Navigation/>
          </View>
        </Router>
      </Provider>
    )
  }
}

export default App

