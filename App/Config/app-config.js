// Simple React Native specific changes
import env from 'react-native-config'
import { Platform } from 'react-native'

export default {
  // use 10.0.2.2 for Android to connect to host machine
  apiUrl: 'https://api.waziup.io/api/v2',
  appUrlScheme: 'com.waziup.homa',
  appName: 'HomA'
}
