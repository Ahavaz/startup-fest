import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { View, Platform, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from './styles'

import Main from './pages/Main'
import Details from './pages/Details'
import Results from './pages/Results'

const { width, height } = Dimensions.get('window')

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTitle: 'Escolha sua StartUp!',
          headerTintColor: '#FFF'
        }
      },
      Details: {
        screen: Details
        // navigationOptions: ({ navigation }) => {
        // headerLeft: null,
        // headerRight: <Button title="Close" onPress={() => navigation.navigate('Main')} />
        // headerLeftContainerStyle: {
        // left: width * 0.91
        // left: '90%'
        // },
        // headerBackImage: (
        //   <Ionicons
        //     name={Platform.OS === 'ios' ? `ios-close` : `md-close`}
        //     size={50}
        //     color={colors.main}
        //   />
        // )
        // }
      },
      Results: {
        screen: Results,
        navigationOptions: {
          headerTitle: 'Resultados',
          headerRight: <View />
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTransparent: 'true',
        headerTintColor: colors.main,
        headerBackTitle: null,
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'comfortaa-bold',
          fontWeight: '200',
          textAlign: 'center',
          flex: 1
        }
      }
      // headerMode: 'screen',
      // mode: 'modal'
    }
  )
)
