import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Platform, Button, TouchableOpacity } from 'react-native'
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import SensorActions from './sensor.reducer'
import DeviceActions from '../../account/device/device.reducer'
import LoginActions from '../../login/login.reducer';

import { Images } from '../../../shared/themes'
import RoomTwo from './room-two'
import RoomOne from './room-one'
import styles from './statistics-screen.styles'
import Spinner from 'react-native-loading-spinner-overlay'
import * as Keychain from 'react-native-keychain';
import BackgroundTimer from 'react-native-background-timer';

let credentials = null;

class StatisticScreen extends Component {
    constructor(props) {
        super(props)
        // Navigation.events().bindComponent(this)
        this.state = {
            fetching: false,
            fetchingDevices: false,
            devices: null,
            sensor1: null,
            sensor2: null,
            sensor3: null,
            sensor4: null,
            loading: false,
            activeSections: [],
            sensors: [],
            sort: 'asc',
            limit: 20,
        }
        this.fetchAll();
    }

    fetchAll() {
        this.props.getDevices();
        if (this.state.sensors.length > 0) {
            const { sort, limit } = this.state;
            const sensor1 = this.state.sensors.filter(element => element.id === "GS").shift();
            this.props.getSensorData({ device_id: sensor1.deviceId, sensor_id: sensor1.id, sort: sort, calibrated: true, limit: limit })
            // console.tron.log(sensor1)
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
                this.props.attemptLogin(credentials.username, credentials.password)
                console.tron.log(credentials, 'fetching auth token')
            } else {
                console.tron.log('No credentials stored');
            }
        } catch (error) {
            console.tron.log("Keychain couldn't be accessed!", error);
        }
        // await Keychain.resetGenericPassword();
    }
    authIntervalCall() {
        // Start a timer that runs once after X milliseconds
        BackgroundTimer.setInterval(() => {
            // this will be executed once after 7 minutes
            // even when app is the the background
            console.tron.log('periodic auth call');
            this.retriveCredentials();
        }, 420000);

        // Cancel the timeout if necessary
        // BackgroundTimer.clearInterval();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let nextLoading = nextProps.fetchingDevices || nextProps.fetching;
        if (nextLoading !== prevState.loading) {
            return { loading: nextLoading };
        }

        if (nextProps.fetchingDevices !== prevState.fetchingDevices) {
            return { fetchingDevices: nextProps.fetchingDevices };
        }

        // if (nextProps.fetching !== prevState.fetching) {
        //     return { fetching: nextProps.fetching };
        // }
        else return null;
    }

    componentDidMount() {
        this.authIntervalCall();
    }

    componentDidUpdate(prevState, prevProps) {

        if (this.props.devices && !prevProps.devices) {
            this.setState({
                devices: this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com'),
                // loading: false
            });
            if (this.state.devices !== null) {
                this.state.devices.filter(device => device.id === 'b827eb500178_3').forEach(element => {
                    if (element.sensors.length > 0) {
                        const deviceName = element.name;
                        const deviceId = element.id
                        element.sensors.forEach(element => {
                            const sensor = {};
                            Object.assign(sensor, element);
                            sensor.deviceName = deviceName;
                            sensor.deviceId = deviceId;
                            this.state.sensors.push(sensor)
                        });
                    }
                })
                console.tron.log(this.state.devices, this.state.sensors)
            }

            if (this.state.sensors.length > 0) {
                const { sort, limit } = this.state;
                const sensor1 = this.state.sensors.filter(element => element.id === "GS").shift();
                this.props.getSensorData({ device_id: sensor1.deviceId, sensor_id: sensor1.id, sort: sort, calibrated: true, limit: limit })
                // console.tron.log(sensor1)
            }

            if (this.props.sensorData && !prevProps.sensorData) {
                this.setState({
                    sensor1: this.props.sensorData
                })
                console.tron.log(this.state.sensor1)
                if (this.state.sensor1 !== null) {
                    const { sort, limit } = this.state;
                    const sensor2 = this.state.sensors.filter(element => element.id === "TC").shift();
                    this.props.getSensorData({ device_id: sensor2.deviceId, sensor_id: sensor2.id, sort: sort, calibrated: true, limit: limit })
                    // console.tron.log(sensor2)
                }
            }

            if (this.state.sensor1 !== null) {
                this.setState({
                    sensor2: this.props.sensorData
                })
                console.tron.log(this.state.sensor2)
                if (this.state.sensor2 !== null) {
                    const { sort, limit } = this.state;
                    const sensor3 = this.state.sensors.filter(element => element.id === "HU").shift();
                    this.props.getSensorData({ device_id: sensor3.deviceId, sensor_id: sensor3.id, sort: sort, calibrated: true, limit: limit })
                    // console.tron.log(sensor3)
                }
            }

            if (this.state.sensor2 !== null) {
                this.setState({
                    sensor3: this.props.sensorData
                })
                console.tron.log(this.state.sensor3)
                if (this.state.sensor3 !== null) {
                    const { sort, limit } = this.state;
                    const sensor4 = this.state.sensors.filter(element => element.id === "HI").shift();
                    this.props.getSensorData({ device_id: sensor4.deviceId, sensor_id: sensor4.id, sort: sort, calibrated: true, limit: limit })
                    // console.tron.log(sensor4)
                }
            }
            if (this.state.sensor3 !== null) {
                this.setState({
                    sensor4: this.props.sensorData
                })
                console.tron.log(this.state.sensor4)
            }

        }
    }

    render() {
        const { devices, sort, limit } = this.state;
        const dev = devices ? devices[1] : [];
        const dev2 = devices ? devices[0] : [];

        return (
            <View style={styles.mainContainer} testID="statisticScreen">
                <Spinner
                    visible={this.state.loading} />
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.centered}>
                        <Text style={styles.title}>ROOM ONE</Text>
                    </View>
                    <View style={styles.hairline} />
                    <View style={styles.body}>
                        {devices === null &&
                            <View>
                                <Text style={styles.empty_list}>Sorry, there's no data available at this moment.</Text>
                            </View>
                        }
                        {devices !== null &&
                            <RoomOne devices={devices} />
                        }
                    </View>
                    <View style={styles.centered}>
                        <Text style={styles.title}>ROOM TWO</Text>
                    </View>
                    <View style={styles.hairline} />
                    <View style={styles.body}>
                        {devices === null &&
                            <View>
                                <Text style={styles.empty_list}>Sorry, there's no data available at this moment.</Text>
                            </View>
                        }
                        {devices !== null &&
                            <RoomTwo devices={devices} />
                        }
                    </View>
                    <Button title='Fetch Sensor Data' onPress={() => this.props.getSensorData(
                        { device_id: 'b827eb500178_3', sensor_id: 'TC', sort: sort, calibrated: true, limit: limit }
                    )} />
                    <Button title='Fetch Sensors' onPress={() => this.props.getAllSensors(dev.id)} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // for developer convenience
        fetchingData: state.sensor.fetchingData,
        fetchingDevices: state.device.fetchingAll,
        devices: state.device.devices,
        sensorData: state.sensor.sensorData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // for developer convenience
        getAllSensors: (deviceId) => dispatch(SensorActions.sensorAllRequest(deviceId)),
        getSensorData: (deviceId, sensorId) => dispatch(SensorActions.sensorDataRequest(deviceId, sensorId)),
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticScreen);
