import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

const RIGHT_ARROW = '\u2192' // unicode for right arrow

class ResultCard extends Component {
  render() {
    const { title, body, url, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{title} {RIGHT_ARROW}</Text>
          <Text style={styles.url}>{url}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

ResultCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderRadius: 5
  },

  title: {
    fontSize: 20,
    marginBottom: 5,
    color: '#444'
  },

  body: {
    color: '#666'
  },

  url: {
    marginBottom: 10,
    color: 'steelblue'
  }
})

export default ResultCard