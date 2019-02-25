import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class WikiPage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>WikiPage</Text>
      </View>
    )
  }
}

export default WikiPage