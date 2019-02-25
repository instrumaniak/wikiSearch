import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Results extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Results Screen</Text>
        <Button
          title='Go to WikiPage'
          onPress={() => navigation.navigate('WikiPage')}
        />
      </View>
    )
  }
}

export default Results