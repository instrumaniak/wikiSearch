import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import PropTypes from 'prop-types'

class SearchInput extends Component {
  render() {
    const { value, onChangeText } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          placeholder='Type what to search!'
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    )
  }
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1
  },

  input: {
    fontSize: 20
  }
})

export default SearchInput