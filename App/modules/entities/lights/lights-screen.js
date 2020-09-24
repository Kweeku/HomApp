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
import { Metrics, ApplicationStyles, Colors } from '../../../shared/themes'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'


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
            tempVal: [],
            gasVal: [],
            humVal: [],
        }
        // Navigation.events().bindComponent(this)
        this.setActuators();
        this.authIntervalCall();
    }

    setActuators() {
        if (this.props.devices) {
            this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com').forEach(element => {
                if (element.sensors.length > 0) {
                    const actuatorName = element.name;
                    const actuatorId = element.id
                    element.sensors.filter(sensor => sensor.sensor_kind === "OtherDevice").forEach(element => {
                        const actuator = {};
                        Object.assign(actuator, element);
                        actuator.deviceName = actuatorName;
                        actuator.deviceId = actuatorId;
                        this.state.actuators.push(actuator)
                    });
                    const temp = element.sensors.filter(sensor => sensor.id === "TC");
                    const gas = element.sensors.filter(sensor => sensor.id === "GS");
                    const hum = element.sensors.filter(sensor => sensor.id === "HU");
                    if (temp.length > 0) {
                        this.state.tempVal.push(temp)
                    }
                    if (gas.length > 0) {
                        this.state.gasVal.push(gas)
                    }
                    if (hum.length > 0) {
                        this.state.humVal.push(hum)
                    }
                }
            })

            // loading: false
            console.tron.log(this.state.actuators);
            console.tron.log(this.state.tempVal);
            console.tron.log(this.state.gasVal);
            console.tron.log(this.state.humVal);
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

    renderGasReading = (gasVal) => {
        if (gasVal.value.value < 351) {
            console.tron.log('Air quality is good')
            return (
                <Text style={[styles.welcomeText, { color: Colors.leaves }]}>Air quality is good</Text>
            )
        } else if (gasVal.value.value > 350 && gasVal.value.value < 501) {
            console.tron.log("Air quality is poor")
            return (
                <Text style={[styles.welcomeText, { color: Colors.bloodOrange }]}>Air quality is poor</Text>
            )
        } else if (gasVal.value.value > 500) {
            console.tron.log("Air is toxic")
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='alert-triangle' size={25} color={Colors.bronze} />
                    <Text style={[styles.welcomeText, { color: Colors.fire }]}> Air is toxic</Text>
                </View>
            )
        }
    }

    render() {
        const { tempVal, gasVal, humVal } = this.state
        const temp = tempVal ? tempVal[0] : [];
        const gas = gasVal ? gasVal[0] : [];
        const hum = humVal ? humVal[0] : [];

        const T = temp ? temp[0] : []
        const g = gas ? gas[0] : []
        const H = hum ? hum[0] : []

        console.tron.log(T)
        console.tron.log(g)
        console.tron.log(H)

        return (
            <View style={styles.mainContainer} testID="lightScreen">
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.centered}>
                        {/* <Image source={Images.logoJhipster} style={styles.logo} />
                        <Text style={styles.welcomeText}>{'Welcome to your Ignite JHipster app.'}</Text> */}
                    </View>
                    {temp.length > 0 &&
                        <View style={styles.weather}>
                            <Text style={styles.list_item}>Indoor</Text>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <FontAwesome5 name='temperature-high' size={20} color={Colors.fire} style={{ marginTop: 35 }} />
                                <Text style={styles.temp}>{T.value.value}</Text>
                                <MCIcons name='temperature-celsius' size={44} color={Colors.panther} style={{ marginTop: 10 }} />
                            </View>
                            <Text style={[styles.welcomeText, { color: Colors.facebook, marginBottom: 10, fontSize: 16 }]}>Humidity: {H.value.value}%</Text>
                            {this.renderGasReading(g)}
                        </View>
                    }
                    <View style={styles.centered}>
                        <Text style={styles.title}>SWITCHES</Text>
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