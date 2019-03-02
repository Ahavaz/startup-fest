import React from 'react'
import { Text, View, ScrollView, StatusBar, Image } from 'react-native'
import StarRating from '../../components/StarRating'

import styles from './styles'

const Details = ({ navigation }) => {
  const {
    imageUrl,
    name,
    Segment: segment,
    description,
    teamCount,
    annualReceipt
  } = navigation.getParam('data', 'DataError')

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.statusBar} />
      <ScrollView style={styles.container} contentContainerStyle={styles.item}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.titleStrong}>{name}</Text>
        <Text style={styles.textLight}>{segment.name}</Text>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <Text style={styles.textLight}>Funcionários: {teamCount}</Text>
        <Text style={styles.textLightLastChild}>
          Faturamento: R$ {annualReceipt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
          ,00 / ano
        </Text>

        <Text style={styles.titleStrong}>Proposta</Text>
        <StarRating type="proposal" startup={name} />
        <Text style={styles.titleStrong}>Apresentação / Pitch</Text>
        <StarRating type="pitch" startup={name} />
        <Text style={styles.titleStrong}>Desenvolvimento</Text>
        <StarRating type="development" startup={name} />
      </ScrollView>
    </>
  )
}

export default Details
