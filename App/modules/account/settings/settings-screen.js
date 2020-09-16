import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'

import AccountActions from '../../../shared/reducers/account.reducer'
// Styles
import styles from './settings-screen.styles'

const Form = t.form.Form

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accountModel: t.struct({
        firstName: t.maybe(t.String),
        lastName: t.maybe(t.String),
        login: t.String,
        email: t.maybe(t.String),
        langKey: t.String,
        activated: t.Boolean,
      }),
      accountValue: this.props.account,
      options: {
        fields: {
          firstName: {
            returnKeyType: 'next',
            testID: 'firstNameInput',
            onSubmitEditing: () => this.form.getComponent('lastName').refs.input.focus(),
          },
          lastName: {
            returnKeyType: 'next',
            testID: 'lastNameInput',
            onSubmitEditing: () => this.form.getComponent('email').refs.input.focus(),
          },
          login: {
            hidden: true,
          },
          email: {
            returnKeyType: 'done',
            testID: 'emailInput',
            onSubmitEditing: () => this.submitUpdate(),
          },
          langKey: {
            hidden: true,
          },
          activated: {
            hidden: true,
          },
        },
      },
    }
    this.submitUpdate = this.submitUpdate.bind(this)
    this.accountChange = this.accountChange.bind(this)
  }

  submitUpdate() {
    // call getValue() to get the values of the form
    const value = this.form.getValue()
    if (value) {
      // if validation fails, value will be null
      this.props.updateAccount(value)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', this.props.error, [{ text: 'OK' }])
      } else {
        Alert.alert('Success', 'Settings updated', [{ text: 'OK' }])
        this.props.getAccount()
      }
    }
  }

  accountChange(newValue) {
    this.setState({
      accountValue: newValue,
    })
  }

  render() {
    return (
      <View style={styles.mainContainer} testID="applianceScreen">
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.centered}>
            <View style={styles.centered}>
              <Text style={styles.title}>OPTIMIZATION SETTINGS</Text>
            </View>
            {/* <Image source={Images.logoJhipster} style={styles.logo} />
                        <Text style={styles.welcomeText}>{'Welcome to your Ignite JHipster app.'}</Text> */}
          </View>
          <View style={styles.hairline} />
          {/* <Header /> */}
          <View style={styles.body}>
            <Text style={styles.empty_list}>Sorry, this feature is unable as it is still in development...</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    updating: state.account.updating,
    error: state.account.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: (account) => dispatch(AccountActions.accountUpdateRequest(account)),
    getAccount: () => dispatch(AccountActions.accountRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
