// Simple React Native specific changes
import env from 'react-native-config'
import { Platform } from 'react-native'

export default {
  // use 10.0.2.2 for Android to connect to host machine
  apiUrl: env.API_URL,
  appUrlScheme: env.APPNAME,
}
