import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Platform, Button, TouchableOpacity, RefreshControl } from 'react-native'
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
import moment from "moment";

let credentials = null;

class StatisticScreen extends Component {
    constructor(props) {
        super(props)
        // Navigation.events().bindComponent(this)
        this.state = {
            devices: null,
            sensor1: null,
            tempValues: null,
            tempTimestamp: null,
            date: null,
            humVal: null,
            tempVal: null,
            gasVal: null,
            motionVal: null,
            loading: false,
            activeSections: [],
            sensors: [],
            sort: 'dsc',
            limit: 10,
            refreshing: false,
            updating: false,
        }
        this.fetchAll();
    }

    fetchAll() {
        this.props.getDevices();
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
        let nextLoading = nextProps.fetching || nextProps.fetchingData;
        if (nextLoading !== prevState.loading) {
            return { loading: nextLoading };
        }

        if (nextProps.fetchingData !== prevState.fetchingData) {
            return { fetchingData: nextProps.fetchingData };
        }

        if (nextProps.fetching !== prevState.fetching) {
            return { fetching: nextProps.fetching };
        }


        else return null;
    }

    componentDidMount() {
        this.authIntervalCall();
    }

    async componentDidUpdate(prevState, prevProps) {

        if (this.props.devices && !prevProps.devices) {
            this.setState({
                devices: this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com'),
                refreshing: false
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
                const sensor1 = this.state.sensors.filter(element => element.id === "TC").shift();
                this.props.getSensorData({ device_id: sensor1.deviceId, sensor_id: sensor1.id, sort: sort, calibrated: true, limit: limit })
                // console.tron.log(sensor1)

                const tempData = await this.props.sensorData;
                const timestamp = [];
                const values = [];
                const date = [];
                tempData.forEach(element => {
                    values.push(element.value);
                    timestamp.push(moment(element.timestamp).format('h:mm'));
                    date.push(moment(element.timestamp).format('DD MM YY'));
                });
                this.setState({
                    sensor1: tempData,
                    tempValues: values,
                    tempTimestamp: timestamp,
                    date: date[0],
                    tempVal: this.state.sensors.filter(element => element.id === "TC").shift(),
                    humVal: this.state.sensors.filter(element => element.id === "HU").shift(),
                    motionVal: this.state.sensors.filter(element => element.id === "MT").shift(),
                    gasVal: this.state.sensors.filter(element => element.id === "GS").shift(),
                })

                console.tron.log(this.state.sensor1, this.state.tempValues, this.state.tempTimestamp)
                console.tron.log(this.state.tempVal)
                console.tron.log(this.state.humVal)
                console.tron.log(this.state.motionVal)
                console.tron.log(this.state.gasVal)
            }
        }
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        console.tron.log('Refresh initiated');
        this.fetchAll();
    }

    render() {
        const {
            devices,
            tempValues,
            tempTimestamp,
            date,
            tempVal,
            motionVal,
            gasVal,
            humVal,
            refreshing
        } = this.state;

        //Add Pull Down to Refresh
        return (
            <View style={styles.mainContainer} testID="statisticScreen">
                <Spinner
                    visible={this.state.loading} />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
                >
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
                        {tempValues === null &&
                            <View>
                                <Text style={styles.empty_list}>Sorry, there's no data available at this moment.</Text>
                            </View>
                        }
                        {tempValues !== null &&
                            <RoomTwo
                                devices={devices}
                                tempTimestamp={tempTimestamp}
                                tempValues={tempValues}
                                date={date}
                                tempVal={tempVal}
                                humVal={humVal}
                                gasVal={gasVal}
                                motionVal={motionVal}
                            />
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
        fetchingData: state.sensor.fetchingData,
        fetching: state.device.fetchingAll,
        devices: state.device.devices,
        sensorData: state.sensor.sensorData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // for developer convenience
        getAllSensors: (deviceId) => dispatch(SensorActions.sensorAllRequest(deviceId)),
        getSensorData: (deviceId, sensorId) => dispatch(SensorActions.sensorDataRequest(deviceId, sensorId)),
        sensorUpdateValue: (deviceId, sensorId, value) => dispatch(SensorActions.sensorUpdateValueRequest(deviceId, sensorId, value)),
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticScreen);
