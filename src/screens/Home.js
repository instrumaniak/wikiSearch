import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Button from '../components/Button'
import SearchInput from '../components/SearchInput'


class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Search WikiPedia
        </Text>
        <SearchInput />
        <View>
          <Button
            title='Search'
            backgroundColor='steelblue'
            color='white'
            onPress={() => navigation.navigate('Results')}
          />
          <Button
            title='Clear'
            backgroundColor='palevioletred'
            onPress={() => navigation.navigate('Results')}
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

  title: {
    fontSize: 25,
    //fontWeight: 'bold',
    alignSelf: 'center'
  }
})

export default Home