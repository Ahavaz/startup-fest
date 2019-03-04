import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { View, Platform, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
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
        screen: Details,
        navigationOptions: ({ navigation }) => ({
          headerLeft: null,
          headerRight:
            Platform.OS === 'ios' ? (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                underlayColor="transparent"
                style={{
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Ionicons
                  name={Platform.OS === 'ios' ? `ios-close` : `md-close`}
                  size={50}
                  color={colors.main}
                />
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                  borderRadius: 50,
                  overflow: 'hidden'
                }}
              >
                <TouchableNativeFeedback
                  onPress={() => navigation.goBack()}
                  background={TouchableNativeFeedback.Ripple(colors.main)}
                  useForeground={true}
                >
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Ionicons
                      name={Platform.OS === 'ios' ? `ios-close` : `md-close`}
                      size={35}
                      color={colors.main}
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
            )
        })
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
      },
      headerMode: 'screen'
      // mode: 'card'
    }
  )
)
