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
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            },
            {
              title: 'Title',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu elit rhoncus lectus pharetra scelerisque ac nec metus. Suspendisse sodales, dui in finibus scelerisque, magna turpis lacinia risus, at sollicitudin enim massa a est. Fusce sed orci in felis euismod dapibus. Phasellus id feugiat nisi. '
            }
          ]}
          keyExtractor={ (item, index) => `${index}` }
          renderItem={
            ({ item }) => (
              <ResultCard
                title={item.title}
                body={item.body}
                onPress={() => navigation.navigate('WikiPage')}
              />
            )
          }
        />
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