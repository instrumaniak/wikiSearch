import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import Home from '../screens/Home'
import Results from '../screens/Results'
import WikiPage from '../screens/WikiPage'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },

  Results: {
    screen: Results,
    navigationOptions: ({ navigation }) => ({
      title: `Results for: ${navigation.getParam('inputText', '')}`,
      gesturesEnabled: true
    })
  },

  WikiPage: {
    screen: WikiPage,
    navigationOptions: ({ navigation }) => ({
      title: `"${navigation.getParam('inputText', '')}" on WikiPedia`,
      gesturesEnabled: true
    })
  }
})


const AppContainer = createAppContainer(AppNavigator)

export default AppContainer