import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Keyboard
} from 'react-native'

import Button from '../components/Button'
import SearchInput from '../components/SearchInput'


class Home extends Component {
  state = {
    inputText: '',
    keyboardShowed: false
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    )

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _handleInput = (inputText) => {
    this.setState({ inputText })
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardShowed: true })
  }

  _keyboardDidHide = () => {
    this.setState({ keyboardShowed: false })
  }

  render() {
    const { navigation } = this.props
    const { inputText, keyboardShowed } = this.state

    return (
      <View style={styles.container}>
        <View style={ keyboardShowed ? styles.textContainer : {} }>
          <Text style={ keyboardShowed ? styles.logoTextSmall : styles.logoText }>
            W
          </Text>
          <Text style={keyboardShowed ? styles.titleSmall : styles.title }>
            Search WikiPedia
          </Text>
        </View>
        <SearchInput value={inputText} onChangeText={this._handleInput} />
        <View>
          <Button
            title='Loader'
          />
          <Button
            title='Search'
            backgroundColor='steelblue'
            color='white'
            onPress={() => navigation.navigate('Results')}
          />
          <Button
            title='Clear'
            backgroundColor='palevioletred'
            onPress={() => this.setState({ inputText: '' })}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 40
  },
  
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
  logoText: {
    fontSize: 100,
    fontFamily: 'serif',
    alignSelf: 'center'
  },
  logoTextSmall: {
    fontSize: 35,
    fontFamily: 'serif',
    alignSelf: 'center'
  },
  
  title: {
    fontSize: 20,
    color: 'silver',
    alignSelf: 'center'
  },
  titleSmall: {
    fontSize: 15,
    color: 'silver',
    alignSelf: 'center',
    paddingLeft: 10
  }
})

export default Home