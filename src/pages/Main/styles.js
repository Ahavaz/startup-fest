import { StyleSheet } from 'react-native'

import colors from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  list: {
    marginTop: 70,
    width: '100%'
  },

  item: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  resultsLink: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    bottom: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: colors.link,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowColor: colors.fontDark,
    shadowOpacity: 0.5
  }
})

export default styles
