import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, ActivityIndicator } from 'react-native'
import { db } from '../../services/firestore'

import colors from '../../styles'
import styles from './styles'

import userInfo from '../../utils/userInfo'

import TopResults from '../../components/TopResults'

let unsubscribe = null

class Results extends React.Component {
  state = {
    isLoading: true,
    topAverages: {},
    data: this.props.navigation.getParam('data', 'DataError')
  }

  async componentDidMount() {
    unsubscribe = await db.collection('ratings').onSnapshot(querySnapshot => {
      if (querySnapshot.size > 0) {
        const data = querySnapshot.docs.reduce(this.getDataByStartup, {})
        const avgRating = Object.values(data).map(this.calcAverage)
        const mergedArrays = this.mergeArrays(this.state.data, avgRating, 'name')

        const topProposals = mergedArrays.sort(this.orderDescBy('proposalAvg')).slice(0, 3)
        const topPitches = mergedArrays.sort(this.orderDescBy('pitchAvg')).slice(0, 3)
        const topDevelopments = mergedArrays.sort(this.orderDescBy('developmentAvg')).slice(0, 3)
        const topTotals = mergedArrays.sort(this.orderDescBy('totalAvg')).slice(0, 3)

        const topAverages = { topProposals, topPitches, topDevelopments, topTotals }
        this.setState({ isLoading: false, topAverages })
      }
    })
  }

  async componentWillUnmount() {
    await unsubscribe()
  }

  getDataByStartup = (obj, doc) => {
    let { startup, proposal = 0, pitch = 0, development = 0 } = doc.data()

    if (!obj[startup]) {
      obj[startup] = { name: startup }
    }

    obj[startup].proposalSum = (obj[startup].proposalSum || 0) + proposal
    obj[startup].pitchSum = (obj[startup].pitchSum || 0) + pitch
    obj[startup].developmentSum = (obj[startup].developmentSum || 0) + development

    obj[startup].proposalVotes = (obj[startup].proposalVotes || 0) + 1
    obj[startup].pitchVotes = (obj[startup].pitchVotes || 0) + 1
    obj[startup].developmentVotes = (obj[startup].developmentVotes || 0) + 1

    return obj
  }

  calcAverage = obj => {
    const proposalAvg = obj.proposalSum / obj.proposalVotes
    const pitchAvg = obj.pitchSum / obj.pitchVotes
    const developmentAvg = obj.developmentSum / obj.developmentVotes

    const totalAvg = (proposalAvg + pitchAvg + developmentAvg) / 3

    return {
      name: obj.name,
      proposalAvg,
      pitchAvg,
      developmentAvg,
      totalAvg
    }
  }

  orderDescBy = attribute => (a, b) => b[attribute] - a[attribute]

  mergeArrays = (arr1, arr2, param) => {
    result = []

    arr2.forEach(obj2 => {
      arr1.forEach(obj1 => {
        if (obj2[param] === obj1[param]) {
          result.push({ ...obj1, ...obj2 })
        }
      })
    })

    return result
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.statusBar} />
        {this.state.isLoading ? null : (
          <ScrollView style={styles.container} contentContainerStyle={styles.item}>
            <TopResults
              attribute={this.state.topAverages.topProposals}
              type={'proposalAvg'}
              title={'Proposta'}
            />
            <TopResults
              attribute={this.state.topAverages.topPitches}
              type={'pitchAvg'}
              title={'Apresentação / Pitch'}
            />
            <TopResults
              attribute={this.state.topAverages.topDevelopments}
              type={'developmentAvg'}
              title={'Desenvolvimento'}
            />
            <TopResults
              attribute={this.state.topAverages.topTotals}
              type={'totalAvg'}
              title={'Geral'}
            />
          </ScrollView>
        )}
      </>
    )
  }
}

export default Results
