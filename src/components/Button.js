import React, { Component} from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, title, backgroundColor, color, isLoading, loadingTitle }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[ styles.container, { backgroundColor }]}>
      <Text style={[ styles.text, { color }, { marginRight: isLoading ? 20 : 0 }]}>
        { isLoading ? loadingTitle : title }
      </Text>
      {isLoading && <ActivityIndicator size='small' color='white' /> }
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  title: PropTypes.string, // Button Text
  color: PropTypes.string, // Text color
  backgroundColor: PropTypes.string, 
  onPress: PropTypes.func,
  isLoading: PropTypes.bool, // show/hide loading spinner
  loadingTitle: PropTypes.string
}

Button.defaultProps = {
  title: '',
  color: 'white',
  backgroundColor: 'darkgray',
  isLoading: false,
  loadingTitle: ''
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
  }
})

export default Button