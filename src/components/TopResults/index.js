import React from 'react'
import { Text, View, Image, Platform, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from '../../styles'
import styles from './styles'

const formatNum = (num = 0) => num.toFixed(1).replace('.', ',') + ' / 5'

const calcStar = (index, rating = 0) => {
  let star = Platform.OS === 'ios' ? 'ios-star' : 'md-star'

  star += index + 0.7 < rating ? '' : index + 0.2 < rating ? '-half' : '-outline'

  return star
}

const TopResults = ({ attribute, type, title }) =>
  attribute &&
  (attribute[0] && attribute[1] && attribute[2]) &&
  (attribute[0].imageUrl && attribute[1].imageUrl && attribute[2].imageUrl) ? (
    <View style={styles.container}>
      <Text style={styles.textLarge}>{title}</Text>

      <View style={styles.item}>
        <Ionicons
          style={{
            color: 'gold'
          }}
          name={Platform.OS === 'ios' ? `ios-medal` : `md-medal`}
          size={40}
        />
        <Image style={styles.image} source={{ uri: attribute[0].imageUrl }} />
        <View>
          <Text style={styles.textMedium}>{attribute[0].name}</Text>
          <Text style={styles.textSmall}>{attribute[0].Segment.name}</Text>

          <View style={styles.stars}>
            {Array(5)
              .fill()
              .map((e, index) => (
                <Ionicons
                  name={calcStar(index, attribute[0][type])}
                  key={`star-${index + 1}`}
                  size={20}
                  color={colors.main}
                />
              ))}
            <Text style={styles.textMedium}> {formatNum(attribute[0][type])}</Text>
          </View>
        </View>
      </View>

      <View style={styles.item}>
        <Ionicons
          style={{
            color: 'silver'
          }}
          name={Platform.OS === 'ios' ? `ios-medal` : `md-medal`}
          size={40}
        />
        <Image style={styles.image} source={{ uri: attribute[1].imageUrl }} />
        <View style={styles.itemText}>
          <Text style={styles.textMedium}>{attribute[1].name}</Text>
          <Text style={styles.textSmall}>{attribute[1].Segment.name}</Text>

          <View style={styles.stars}>
            {Array(5)
              .fill()
              .map((e, index) => (
                <Ionicons
                  name={calcStar(index, attribute[1][type])}
                  key={`star-${index + 1}`}
                  size={20}
                  color={colors.main}
                />
              ))}
            <Text style={styles.textMedium}> {formatNum(attribute[1][type])}</Text>
          </View>
        </View>
      </View>

      <View style={styles.item}>
        <Ionicons
          style={{
            color: 'sienna'
          }}
          name={Platform.OS === 'ios' ? `ios-medal` : `md-medal`}
          size={40}
        />
        <Image style={styles.image} source={{ uri: attribute[2].imageUrl }} />
        <View style={styles.itemText}>
          <Text style={styles.textMedium}>{attribute[2].name}</Text>
          <Text style={styles.textSmall}>{attribute[2].Segment.name}</Text>

          <View style={styles.stars}>
            {Array(5)
              .fill()
              .map((e, index) => (
                <Ionicons
                  name={calcStar(index, attribute[2][type])}
                  key={`star-${index + 1}`}
                  size={20}
                  color={colors.main}
                />
              ))}
            <Text style={styles.textMedium}> {formatNum(attribute[2][type])}</Text>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <ActivityIndicator size="large" />
  )

export default TopResults
