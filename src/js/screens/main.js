import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Button from '../components/button'

export class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Greetings!</Text>
          <Button text='Slider' type='link' to='/slider'/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ddd',
    height: 650
  },
  title: {
    fontSize: 30,
    textTransform: 'uppercase',
    marginBottom: 10
  }
})

export default Main