import { Constants } from 'expo'

const { deviceId, deviceName, platform } = Constants

const userInfo = {
  deviceId,
  deviceName,
  model: platform.ios
    ? platform.ios.model
    : platform.android
    ? platform.android.model
    : 'Desconhecido'
}

export default userInfo
