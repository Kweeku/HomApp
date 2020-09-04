import React from 'react'
import { ScrollView, Text, Image, View, Platform, Button, FlatList } from 'react-native'
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import * as Keychain from 'react-native-keychain';

import { Images } from '../../../shared/themes'
import styles from './lights-screen.styles'
import ActuatorActions from './actuator.reducer'
import DeviceActions from '../../account/device/device.reducer'
import LoginActions from '../../login/login.reducer';
import ItemActuator from './ItemActuator'

let credentials = null;

class LightScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: false,
            fetchingDevices: false,
            devices: null,
            actuators: null,
            loading: false,
            activeSections: [],
            actuators: [],
        }
        // Navigation.events().bindComponent(this)
        this.setActuators();
        this.authIntervalCall();
    }

    setActuators() {
        if (this.props.devices) {
            this.setState({
                devices: this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com'),
                actuators: this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com').forEach(element => {
                    if (element.actuators.length > 0) {
                        const actuatorName = element.name;
                        const actuatorId = element.id
                        element.actuators.forEach(element => {
                            const actuator = {};
                            Object.assign(actuator, element);
                            actuator.deviceName = actuatorName;
                            actuator.deviceId = actuatorId;
                            this.state.actuators.push(actuator)
                        });
                    }
                }),
                // loading: false
            });
            console.tron.log(this.state.actuators);
        }

    }

    retriveCredentials = async () => {
        try {
            // Retrieve the credentials
            credentials = await Keychain.getGenericPassword();
            if (credentials) {
                console.tron.log(
                    'Credentials successfully loaded for user ' + credentials.username
                );
            } else {
                console.log('No credentials stored');
            }
        } catch (error) {
            console.tron.log("Keychain couldn't be accessed!", error);
        }
        // await Keychain.resetGenericPassword();
    }

    getAuth = () => {
        if (credentials !== null) {
            this.props.attemptLogin(credentials.username, credentials.password)
        }
    }

    authIntervalCall() {
        setInterval(this.getAuth, 3000)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let nextLoading = nextProps.fetchingDevices;
        if (nextLoading !== prevState.loading) {
            return { loading: nextLoading };
        }

        if (nextProps.fetchingDevices !== prevState.fetchingDevices) {
            return { fetchingDevices: nextProps.fetchingDevices };
        }
        else return null;
    }

    componentDidUpdate(prevState, prevProps) {

    }

    render() {

        return (
            <View style={styles.mainContainer} testID="lightScreen">
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.centered}>
                        {/* <Image source={Images.logoJhipster} style={styles.logo} />
                        <Text style={styles.welcomeText}>{'Welcome to your Ignite JHipster app.'}</Text> */}
                    </View>
                    <View style={styles.hairline} />
                    {/* <Header /> */}
                    <View style={styles.body}>
                        {this.state.actuators.length < 1 && <Text style={styles.empty_list}>Sorry, there's no data to display at this time</Text>}
                        {this.state.actuators.length > 0 &&
                            <FlatList
                                style={styles.transfers}
                                data={this.state.actuators}
                                extraData={this.state}
                                // numColumns={2}
                                showsVerticalScrollIndicator={false}
                                // initialNumToRender={this.oneScreensWorth}
                                // ListEmptyComponent={this.renderEmptyReceipts}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                // ItemSeparatorComponent={this.renderSeparator}
                                // onEndReached={this.handleLoadMoreTracks}
                                renderItem={({ item }) => <ItemActuator data={item} />} />
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // for developer convenience
        fetching: state.actuator.fetchingAll,
        fetchingDevices: state.device.fetchingAll,
        devices: state.device.devices,
        actuators: state.actuator.actuators
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // for developer convenience
        getAllActuators: (deviceId) => dispatch(ActuatorActions.actuatorAllRequest(deviceId)),
        getActuator: (deviceId, actuatorId) => dispatch(ActuatorActions.actuatorRequest(deviceId, actuatorId)),
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LightScreen);