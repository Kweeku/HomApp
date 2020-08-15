import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Platform, Button, TouchableOpacity } from 'react-native'
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/HomAScreen'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import SensorActions from './sensor.reducer'
import DeviceActions from '../../account/device/device.reducer'

import { Images } from '../../../shared/themes'
import RoomTwo from './room-two'
import RoomOne from './room-one'
import styles from './statistics-screen.styles'
import Spinner from 'react-native-loading-spinner-overlay'

class StatisticScreen extends Component {
    constructor(props) {
        super(props)
        // Navigation.events().bindComponent(this)
        this.state = {
            fetching: false,
            fetchingDevices: false,
            devices: null,
            sensors: null,
            loading: false,
            activeSections: [],
        }
        this.props.getDevices();
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

        if (this.props.devices && !prevProps.devices) {
            this.setState({
                devices: this.props.devices.filter(device => device.owner === 'adubenedict10@gmail.com'),
                // loading: false
            });
            console.tron.log(this.state.devices, this.state.loading)
        }
    }

    render() {
        const { devices } = this.state;
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
                    {/* <Button title='Fetch Sensor Data' onPress={() => this.props.getSensorData('b827eb500178_3', 'TC')} />
                    <Button title='Fetch Sensors' onPress={() => this.props.getAllSensors(dev.id)} /> */}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // for developer convenience
        fetching: state.sensor.fetchingAll,
        fetchingDevices: state.device.fetchingAll,
        devices: state.device.devices,
        sensors: state.sensor.sensors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // for developer convenience
        getAllSensors: (deviceId) => dispatch(SensorActions.sensorAllRequest(deviceId)),
        getSensorData: (deviceId, sensorId) => dispatch(SensorActions.sensorDataRequest(deviceId, sensorId)),
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticScreen);
