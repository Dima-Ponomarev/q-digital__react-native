import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello World!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: 'darkslateblue', 
    fontSize: 30
  }
})

export default App

