import React from 'react'
import {
  Alert,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'

import colors from '../../styles'
import styles from './styles'

const StartupItem = ({ data, navigation }) => {
  const onPressItem = data => {
    navigation.navigate('Details', { data })
  }

  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      onPress={() => onPressItem(data)}
      useForeground={true}
      background={TouchableNativeFeedback.Ripple(colors.main)}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.imageUrl }} />
        <Text style={styles.startup}>{data.name}</Text>
        <Text style={styles.segment}>{data.Segment.name}</Text>
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={() => onPressItem(data)} underlayColor="transparent">
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.imageUrl }} />
        <Text style={styles.startup}>{data.name}</Text>
        <Text style={styles.segment}>{data.Segment.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StartupItem
