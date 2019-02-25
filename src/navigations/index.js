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
    navigationOptions: {
      title: 'Results'
    }
  },

  WikiPage: {
    screen: WikiPage,
    navigationOptions: {
      title: 'Wiki Page Entry'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer