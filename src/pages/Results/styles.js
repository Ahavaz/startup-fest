import { StyleSheet } from 'react-native'

import colors from '../../styles'

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: colors.main
  },

  container: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
