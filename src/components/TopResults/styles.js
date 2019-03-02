import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../styles'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 10
  },

  item: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  image: {
    width: 65,
    height: 65,
    resizeMode: 'contain'
  },

  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textLarge: {
    flex: 1,
    alignItems: 'flex-start',
    fontFamily: 'comfortaa-bold',
    fontSize: 20,
    color: colors.fontDark,
    marginTop: 10,
    marginBottom: 15
  },

  textMedium: {
    fontFamily: 'comfortaa-bold',
    fontSize: 16,
    color: colors.fontDark
  },

  textSmall: {
    fontFamily: 'comfortaa-bold',
    fontSize: 12,
    color: colors.fontLight
  }
})

export default styles
