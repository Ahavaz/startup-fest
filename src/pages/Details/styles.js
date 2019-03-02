import { StyleSheet } from 'react-native'

import colors from '../../styles'

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: colors.main
  },

  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25
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
  },

  stars: {
    backgroundColor: '#666',
    paddingBottom: 50,
    marginBottom: 500
  }
})

export default styles
