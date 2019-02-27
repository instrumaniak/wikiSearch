import React, { Component } from 'react'
import {
  View,
  Text,
  WebView
} from 'react-native'

class WikiPage extends Component {
  render() {
    const { navigation } = this.props
    const url = navigation.getParam('url', '')
    return (
      <View style={{ flex: 1 }}>
        { url ? 
            <WebView source={{ uri: url }} /> :
            <Text>URL not found</Text>
        }
      </View>
    )
  }
}

export default WikiPage