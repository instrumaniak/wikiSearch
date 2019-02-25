import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title='Go to Results'
          onPress={() => navigation.navigate('Results')}
        />
      </View>
    )
  }
}

export default Home