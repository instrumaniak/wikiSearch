import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

class SearchInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Type what to search!'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20
  }
})

export default SearchInput