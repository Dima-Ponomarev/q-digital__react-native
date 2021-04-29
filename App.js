import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'darkslateblue', fontSize: 30}}>
          Hello World!
        </Text>
      </View>
    )
  }
}

export default App

