import React, { Component } from 'react'
import {
  View,
  WebView
} from 'react-native'

class WikiPage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://en.wikipedia.org/wiki/Music_tracker'}}
        />
      </View>
    )
  }
}

export default WikiPage