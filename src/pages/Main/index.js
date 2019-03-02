import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  Platform
} from 'react-native'
import { LinearGradient } from 'expo'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Ionicons } from '@expo/vector-icons'

import colors from '../../styles'
import styles from './styles'

import StartupItem from '../../components/StartupItem'

let allStartupsData = {}

const Main = ({ navigation }) => {
  const onPressLink = data => {
    navigation.navigate('Results', { data })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableHighlight
        style={styles.resultsLink}
        onPress={() => onPressLink(allStartupsData)}
        underlayColor={colors.link}
      >
        <Ionicons
          style={{
            color: '#FFF'
          }}
          name={Platform.OS === 'ios' ? `ios-stats` : `md-stats`}
          size={40}
        />
      </TouchableHighlight>
      <LinearGradient
        colors={['#FFF', colors.main]}
        locations={[0, 1]}
        start={{ x: -5, y: -5 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Query query={GET_ALL_STARTUPS}>
          {({ loading, error, data }) => {
            if (error) return <Text>{error}</Text>

            if (loading) return <ActivityIndicator size="large" />

            allStartupsData = data.allStartups

            return (
              <FlatList
                style={styles.list}
                data={data.allStartups}
                renderItem={({ item }) => <StartupItem data={item} navigation={navigation} />}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.item}
              />
            )
          }}
        </Query>
      </LinearGradient>
    </View>
  )
}

const GET_ALL_STARTUPS = gql`
  query GetAllStartups {
    allStartups {
      name
      teamCount
      description
      imageUrl
      annualReceipt
      Segment {
        name
      }
    }
  }
`

export default Main
