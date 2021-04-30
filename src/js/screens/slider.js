import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setLocal, setFetched } from '../redux/actions'
import Button from '../components/button'
import firstImage from '../../img/0.jpg'
import secondImage from '../../img/1.jpg'
import thirdImage from '../../img/2.jpg'

export class Slider extends Component {
  state = {
    index: 0,
    imageType: 'local'
  }

  componentDidMount() {
    //getting images from server
    fetch('https://imagesapi.osora.ru/')
      .then(res => res.json())
      .then(data => {
        this.props.setFetched(data)
      })

    //gettin all local jpg images
    this.props.setLocal([firstImage, secondImage, thirdImage])
  }

  componentDidUpdate() {
    if (!this.state.slider) {
      this.setState({ slider: this.props.local })
    }
  }

  onNext = () => {
    this.setState({
      index: (this.state.index + 1) % this.state.slider.length
    })
  }

  onPrev = () => {
    if (this.state.index >= 1) {
      this.setState({
        index: this.state.index - 1
      })
    } else {
      this.setState({
        index: this.state.slider.length - 1
      })
    }
  }


  //toggle displayed images
  onSwitch = () => {
    if(this.state.imageType === 'local') {
      this.setState({
        imageType: 'server',
        slider: this.props.server
      })
    } else {
      this.setState({
        imageType: 'local',
        slider: this.props.local
      })
    }
  }

  render() {
    return (
      <View style={styles.slider}>
        <View style={styles.slider__wrapper}>
          <Button text='prev' onPress={this.onPrev}/>
          {this.state.slider && (
            <Image
              style={styles.slider__image} 
              resizeMode='contain'
              source={this.state.imageType === 'local' ?
              this.state.slider[this.state.index] :
              {uri: this.state.slider[this.state.index]}}
            />
          )}
          <Button text='next' onPress={this.onNext}/>
        </View>
        <View style={styles.slider__control}>
          <View style={styles.slider__btnSwitch}>
            <Button
              text={this.state.imageType === 'local' ? 'Switch to remote' : 'Switch to localeeee'} 
              onPress={this.onSwitch}/>
          </View>
          <Button text='Back to main' type='link' to='/'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#eee',
  },
  slider__wrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  slider__image:{
    width: 250,
    height: 300,
    backgroundColor: '#000',

    margin: 10,
  },
  slider__control:{
  },
  slider__btnSwitch:{
    marginBottom: 10
  }
})

const mapStateToProps = state => ({
  local: state.images.local,
  server: state.images.server
})

export default connect(
  mapStateToProps, 
  { setLocal, setFetched }
)(Slider)