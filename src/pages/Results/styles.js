import { StyleSheet, Platform } from 'react-native'
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
    marginTop: Platform.OS === 'ios' ? 50 : 60,
    paddingLeft: 25,
    paddingRight: 25
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
