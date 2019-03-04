import { StyleSheet } from 'react-native'
import { Constants } from 'expo'

import colors from '../../styles'

const { statusBarHeight } = Constants

const styles = StyleSheet.create({
  statusBar: {
    height: statusBarHeight,
    backgroundColor: colors.main
  },

  container: {
    flex: 1,
    paddingLeft: '15%',
    paddingRight: '15%'
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 10
  },

  titleStrong: {
    fontFamily: 'comfortaa-bold',
    fontSize: 20,
    color: colors.fontDark,
    margin: 5
  },

  textLight: {
    fontFamily: 'comfortaa-bold',
    fontSize: 14,
    color: colors.fontLight,
    margin: 5
  },

  textLightLastChild: {
    fontFamily: 'comfortaa-bold',
    fontSize: 14,
    color: colors.fontLight,
    margin: 5,
    marginBottom: 30
  },

  descriptionWrapper: {
    borderLeftColor: colors.main,
    borderRightColor: 'transparent',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderRadius: 3,
    marginBottom: 5
  },

  description: {
    fontFamily: 'satisfy-cursive',
    fontSize: 16,
    color: colors.fontDark,
    padding: 20
  }
})

export default styles
