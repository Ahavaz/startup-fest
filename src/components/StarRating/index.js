import React from 'react'
import { View, Text, TouchableHighlight, Platform, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { db, saveData } from '../../services/firestore'

import colors from '../../styles'
import styles from './styles'

import userInfo from '../../utils/userInfo'

let ratingId = ''
let unsubscribe = null

class StarRating extends React.Component {
  state = {
    isLoading: true,
    rating: 0
  }

  componentDidMount() {
    ratingId = `${userInfo.userId}_${this.props.startup.replace(/ +/g, '_').toUpperCase()}`

    unsubscribe = db.doc(`ratings/${ratingId}`).onSnapshot(doc => {
      if (doc.exists) {
        const rating = doc.data()[this.props.type]

        this.setState({ isLoading: false, rating })
      } else {
        this.setState({ isLoading: false, rating: 0 })
      }
    })
  }

  componentWillUnmount() {
    unsubscribe()
  }

  submitGrade = (grade, ratingId) => {
    const data = {
      startup: this.props.startup,
      [this.props.type]: grade
    }

    saveData(ratingId, data)
  }

  calcStar = (index, rating) => {
    let star = Platform.OS === 'ios' ? 'ios-star' : 'md-star'

    star += index < rating ? '' : '-outline'

    return star
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator size="large" />

    return (
      <View style={styles.container}>
        {Array(5)
          .fill()
          .map((e, index) => (
            <TouchableHighlight
              style={styles.starButton}
              key={`star-${index + 1}`}
              onPress={() => this.submitGrade(index + 1, ratingId)}
              underlayColor="transparent"
            >
              <Ionicons
                name={this.calcStar(index, this.state.rating)}
                size={40}
                color={colors.main}
              />
            </TouchableHighlight>
          ))}
      </View>
    )
  }
}

export default StarRating
