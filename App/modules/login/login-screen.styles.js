import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '../../shared/themes'

export default StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    backgroundColor: Colors.darkAsh,
    paddingTop: 30,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4,
    elevation: 3,
    top: 10,
    width: Metrics.screenWidth-40
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  rowLabel: {
    color: Colors.charcoal,
  },
  textInput: {
    height: 40,
    color: Colors.coal,
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel,
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
  },
  loginButtonWrapper: {
    flex: 1,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 10,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver,
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20
  },
  noAccount: {
    flexDirection: 'row',
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    marginTop: 35
  },
  noAccountUnderline:{
    color: Colors.jhipsterBlue,
    textDecorationLine: 'underline',
    fontSize: 18
  },
  noAccountText:{
    color: Colors.charcoal,
    fontSize: 18
  }
})
