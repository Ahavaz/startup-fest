import { StyleSheet } from 'react-native'

import colors from '../../styles'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 260,
    width: 260,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowColor: colors.fontDark,
    shadowOpacity: 0.5
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10
  },

  startup: {
    fontFamily: 'comfortaa-bold',
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10
  },

  segment: {
    fontFamily: 'comfortaa-bold',
    fontSize: 14,
    color: colors.fontLight
  }
})

export default styles
