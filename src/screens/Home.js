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
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>W</Text>
          <Text style={styles.title}>
            Search WikiPedia
          </Text>
        </View>
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
  textContainer: {
    
  },
  logoText: {
    fontSize: 100,
    fontFamily: 'serif',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    color: 'silver',
    alignSelf: 'center'
  }
})

export default Home