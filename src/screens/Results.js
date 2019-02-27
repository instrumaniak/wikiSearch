import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet
} from 'react-native'

import ResultCard from '../components/ResultCard'

class Results extends Component {
  render() {
    const { navigation } = this.props
    const results = navigation.getParam('results', [])
    const inputText = navigation.getParam('inputText', '')

    return (
      <View style={styles.container}>
      { results && results.length > 0 ? 
          <FlatList
            data={ results }
            keyExtractor={ (item, index) => `${index}` }
            renderItem={
              ({ item }) => (
                <ResultCard
                  title={item.title}
                  body={item.info}
                  onPress={() => navigation.navigate('WikiPage')}
                />
              )
            }
          /> :

          <Text>Data not loaded</Text>
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
})

export default Results