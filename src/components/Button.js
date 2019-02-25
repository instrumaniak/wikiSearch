import React, { Component} from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet 
} from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, title, backgroundColor, color }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[ styles.container, { backgroundColor }]}>
      <Text style={[ styles.text, { color }]}>{title}</Text>
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func
}

Button.defaultProps = {
  title: '',
  color: 'white',
  backgroundColor: 'darkgray'
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center'
  },
  text: {
    fontSize: 15
  }
})

export default Button