import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Platform, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from './styles'

import Main from './pages/Main'
import Details from './pages/Details'
import Results from './pages/Results'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTitle: 'Escolha sua StartUp!',
          headerBackTitle: null,
          headerTintColor: '#FFF'
        }
      },
      Details: {
        screen: Details,
        navigationOptions: {
          headerLeftContainerStyle: {
            left: width * 0.91
          },
          headerBackImage: (
            <Ionicons
              name={Platform.OS === 'ios' ? `ios-close` : `md-close`}
              size={40}
              color={colors.main}
            />
          )
        },
        mode: 'modal'
      },
      Results: {
        screen: Results,
        navigationOptions: {
          headerTitle: 'Resultados',
          headerLeftContainerStyle: {
            left: width * 0.03
          },
          headerBackImage: (
            <Ionicons
              name={Platform.OS === 'ios' ? `ios-arrow-back` : `md-arrow-back`}
              size={40}
              color={colors.main}
            />
          )
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTransparent: 'true',
        headerTintColor: colors.main,
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'comfortaa-bold'
        }
      },
      headerMode: 'screen'
    }
  )
)
