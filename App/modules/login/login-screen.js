import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity, Linking, BackHandler } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import LoginActions from './login.reducer';
import { isLoggedIn } from '../../shared/reducers/account.reducer'

import styles from './login-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import Toast from 'react-native-simple-toast';
import { LAUNCH_SCREEN } from '../../navigation/layouts'
import Colors from '../../shared/themes/colors'

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    loggedIn: PropTypes.bool,
    attemptLogin: PropTypes.func,
  }

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      username: null,
      password: null,
      visibleHeight: Metrics.screenHeight,
      topLogo: {
        width: Metrics.screenWidth,
        height: 230
      },
      requesting: false
    }
  }

  backHandler = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextLoading = nextProps.fetching;
    if (nextLoading !== prevState.loading) {
      return { loading: nextLoading };
    }
    // if (nextProps.loggedIn !== prevState.loggedIn) {
    //   return { loggedIn: nextProps.loggedIn };
    // }
    else return null;
  }

  componentDidMount() {
    console.tron.log(`Is the user logged in: ${this.props.loggedIn}`)

    this.backHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.fetching) {
      if (prevProps.fetching && this.props.error) {
        Alert.alert('Error', this.props.error, [{ text: 'OK' }])
      }
    }
    
    if (this.props.loggedIn) {
      console.tron.log(`Is the user logged in: ${this.props.loggedIn}`)

      Navigation.push(this.props.componentId, {
        component: {
          name: LAUNCH_SCREEN,
          options: {
            background: {
              color: Colors.background,
            },
            topBar: {
              title: {
                text: 'Welcome!',
                color: Colors.snow,
              },
              leftButtons: [
                {
                  id: 'menuButton',
                  icon: Images.menuIcon,
                  testID: 'menuButton',
                  color: Colors.snow,
                },
              ],
            },
          },
          passProps: {
            user: this.state.username,
            status: 'online'
          }
        }
      });
    }
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    // attempt a login - a saga is listening to pick it up from here.
    if (!username) {
      Toast.show('Please input username')
    } else if (!password) {
      Toast.show('Please input password')
    } else if (username && password) {
      this.setState({ requesting: true })
      this.props.attemptLogin(username, password)
    }
  }

  // handlePressCancel = () => {
  //   Navigation.dismissModal(this.props.componentId)
  // }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render() {
    const { username, password } = this.state
    const textInputStyle = styles.textInput
    return (
      <View
        contentContainerStyle={styles.contentContainer}
        style={[styles.container, { height: this.state.visibleHeight }]}
        keyboardShouldPersistTaps="always">
        <Image source={Images.logoLogin} style={[styles.topLogo, this.state.topLogo]} />
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Username</Text>
            <TextInput
              ref={(c) => {
                this.usernameInput = c
              }}
              testID="loginScreenUsername"
              style={textInputStyle}
              value={username}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.passwordInput.focus()}
              placeholder="Username"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Password</Text>
            <TextInput
              ref={(c) => {
                this.passwordInput = c
              }}
              testID="loginScreenPassword"
              style={textInputStyle}
              value={password}
              keyboardType="default"
              returnKeyType="go"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid="transparent"
              onSubmitEditing={this.handlePressLogin}
              placeholder="Password"
            />
          </View>

          <View style={[styles.loginRow]}>
            <TouchableOpacity testID="loginScreenLoginButton" style={styles.loginButtonWrapper} onPress={this.handlePressLogin}>
              <View style={styles.loginButton}>
                <Text style={styles.loginText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://dashboard.waziup.io/')} testID="createUserButton">
            <Text style={styles.noAccountUnderline} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.account),
    fetching: state.login.fetching,
    error: state.login.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    setAuth: () => dispatch(LoginActions.loginLoad()),
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
