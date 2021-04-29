import React, { Component } from 'react'
import { View, Text,  StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export class Button extends Component {
  render() {
    if (this.props.type === 'link'){
      console.log('in')
      return (
        <Link to={this.props.to} style={styles.button}>
          <Text style={[styles.button__text, styles.link]}>{this.props.text}</Text>
        </Link>
      )
    } else {
      return (
        <View onPress={this.props.onPress} style={styles.button}>
          <Text style={styles.button__text}>{this.props.text}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
  },
  button__text: {
    color: 'white',
    fontSize: 20,

    padding: 10
  },
  link:{
    textDecorationLine: 'underline'
  }
})

export default Button
