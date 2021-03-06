import React, { Component } from 'react'
import { View, StyleSheet, Linking, TouchableOpacity, BackHandler } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export class Navigation extends Component {
  handleRedirect = async (url) => {
    await Linking.openURL(url)
  }

  handleExit = () => {
    BackHandler.exitApp()
  }
  render() {
    return (
      <View style={styles.nav}>
        <Link style={styles.nav__tab} to='/' component={TouchableOpacity}>
          <Icon size={40} name='home' color='#000'/>
        </Link>
        <Link style={styles.nav__tab} to='/slider' component={TouchableOpacity}>
          <Icon size={40} name='image' color='#000'/>
        </Link>
        <Link style={styles.nav__tab} to='/player' component={TouchableOpacity}>
          <Icon size={40} name='music' color='#000'/>
        </Link>
        <TouchableOpacity style={styles.nav__tab} onPress={() => this.handleRedirect('https://q-digital.org')}>
          <Icon size={40} name='globe' color='#000'/>
        </TouchableOpacity>
        {/* Exit only works for android */}
        <TouchableOpacity style={styles.nav__tab} onPress={this.handleExit}>
          <Icon size={40} name='close' color='#000'/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderTopColor: '#000',
    borderTopWidth: 1
  },
  nav__tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    paddingVertical: 10
  }
})

export default Navigation
