import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image, BackHandler, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

import {
  loginScreen,
  registerScreen,
  forgotPasswordScreen,
  changePasswordScreen,
  settingsScreen,
  entitiesScreen,
  storybookScreen,
} from '../layouts'
import { connect } from 'react-redux'
import { isLoggedIn } from '../../shared/reducers/account.reducer'

import styles from './drawer-content.styles'
import { Images } from '../../shared/themes'
import DrawerButton from './drawer-button'
import LoginActions from '../../modules/login/login.reducer'

class DrawerContent extends Component {
  constructor(context, props) {
    super(context, props)
    Navigation.events().bindComponent(this);
    this.state = {
      isUserLoggedIn: null,
    }
    this.backHandler();
  }

  componentDidMount() {
    this.backHandler();

  }

  hideSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }

  backHandler = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.hideSideMenu()
    })
  }

  // handlePressLogin = () => {
  //   this.hideSideMenu()
  //   loginScreen()
  // }
  handlePressRegister = () => {
    this.hideSideMenu()
    registerScreen()
  }
  handlePressForgotPassword = () => {
    this.hideSideMenu()
    forgotPasswordScreen()
  }
  handlePressSettings = () => {
    this.hideSideMenu()
    settingsScreen()
  }
  handlePressChangePassword = () => {
    this.hideSideMenu()
    changePasswordScreen()
  }
  handlePressEntities = () => {
    this.hideSideMenu()
    entitiesScreen()
  }
  handlePressLogout = () => {
    this.hideSideMenu()
    this.props.logout()
  }
  handlePressStorybook = () => {
    this.hideSideMenu()
    storybookScreen()
  }

  render() {
    const { loggedIn } = this.props

    return (
      <ScrollView style={styles.container}>
        <Image testID="drawerLogo" source={Images.logoJhipster} style={styles.logo} />
        {/* {loggedIn &&
          <View>
            <Text>{this.props.user}</Text>
            <Text>{this.props.status}</Text>
          </View>
        } */}
        {/* {!isLoggedIn && <DrawerButton testID="loginDrawerButton" text="Login" onPress={this.handlePressLogin} />} */}
        {!loggedIn && <DrawerButton testID="registerDrawerButton" text="Register" onPress={this.handlePressRegister} />}
        {!loggedIn && (
          <DrawerButton testID="forgotPasswordDrawerButton" text="Forgot Password" onPress={this.handlePressForgotPassword} />
        )}

        {loggedIn && <DrawerButton testID="entitiesDrawerButton" text="Entities" onPress={this.handlePressEntities} />}
        {loggedIn && <DrawerButton testID="settingsDrawerButton" text="Settings" onPress={this.handlePressSettings} />}
        {loggedIn && (
          <DrawerButton testID="changePasswordDrawerButton" text="Change Password" onPress={this.handlePressChangePassword} />
        )}
        {loggedIn && <DrawerButton testID="logoutDrawerButton" text="Logout" onPress={this.handlePressLogout} />}
        {__DEV__ && <DrawerButton testID="storybookDrawerButton" text="Storybook" onPress={this.handlePressStorybook} />}
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.account),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
