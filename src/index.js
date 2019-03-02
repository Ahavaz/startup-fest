import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { AppLoading, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import client from './services/graphql'
import Routes from './routes'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  loadResourcesAsync = async () =>
    await Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
        'comfortaa-bold': require('./../assets/fonts/comfortaa-bold.ttf'),
        'satisfy-cursive': require('./../assets/fonts/satisfy-cursive.ttf')
      })
    ])

  render() {
    return this.state.isReady ? (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    ) : (
      <AppLoading
        startAsync={this.loadResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    )
  }
}
