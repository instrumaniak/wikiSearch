import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
  Modal,
  NativeModules,
  LayoutAnimation
} from 'react-native'

import { getSearchResults } from '../services'
import { colors } from '../config'
import Button from '../components/Button'
import SearchInput from '../components/SearchInput'

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)


class Home extends Component {
  state = {
    inputText: '',
    keyboardShowed: false,
    isLoading: false,
    isError: false
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
    this.setState({ inputText, isError: false })
  }

  _keyboardDidShow = () => {
    LayoutAnimation.spring()
    this.setState({ keyboardShowed: true })
  }

  _keyboardDidHide = () => {
    LayoutAnimation.spring()
    this.setState({ keyboardShowed: false })
  }

  _handleSearch = () => {
    const { inputText } = this.state
    const { navigation } = this.props

    if(inputText.trim()) {
      this.setState({ isLoading: true })

      // get search results & pass that to Results screen
      getSearchResults(inputText)
        .then(results => {
          this.setState({ isLoading: false, inputText: '' })
          
          navigation.navigate('Results', { inputText, results })
        })
    }
    else {
      this.setState({ isError: true, inputText: '' })
    }

  }

  render() {
    const { navigation } = this.props
    const { inputText, keyboardShowed, isLoading, isError } = this.state

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
        <View>
          <SearchInput value={inputText} onChangeText={this._handleInput} isError={isError} />
          { isError && <Text style={styles.errorText}>Error: Input cannot be empty!</Text>}
        </View>
        <View>
          <Button
            title='Search'
            backgroundColor='steelblue'
            color='white'
            loadingTitle='Searching...'
            isLoading={isLoading}
            onPress={this._handleSearch}
          />
          {/*<Button
            title='Clear'
            backgroundColor='palevioletred'
            onPress={() => this.setState({ inputText: '' })}
          />*/}
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
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250,250, 250, 0.5)'
  },

  errorText: {
    alignSelf: 'center',
    paddingTop: 5,
    color: colors.red
  }
})

export default Home