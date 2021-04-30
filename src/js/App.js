import React, { Component } from 'react'
import Main from './screens/main'
import Slider from './screens/slider'
import Navigation from './components/navigation'
import { ScrollView, View } from 'react-native'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'
import Redux from './redux/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux' 

const store = createStore(
  Redux.Reducers, 
  Redux.InitialState, 
)


export class App extends Component {
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
            </Switch>
            <Navigation/>
          </View>
        </Router>
      </Provider>
    )
  }
}

export default App

