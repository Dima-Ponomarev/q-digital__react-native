import React, { Component } from 'react'
import Main from './screens/main'
import Slider from './screens/slider'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/slider'>
          <Slider />
        </Route>
        </Switch>
      </Router>
    )
  }
}

export default App

