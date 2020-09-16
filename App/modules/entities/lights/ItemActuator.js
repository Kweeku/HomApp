import React, { Component } from "react";
import { connect } from 'react-redux'
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './lights-screen.styles';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../shared/themes';
import ActuatorActions from './actuator.reducer'
import DeviceActions from '../../account/device/device.reducer'
import SensorActions from '../statistics/sensor.reducer'
import LoginActions from '../../login/login.reducer';
import * as Keychain from 'react-native-keychain';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

let credentials = null;

class ItemActuator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.data.value
        }
    }

    static propTypes = {
        data: PropTypes.any,
    };

    retriveCredentials = async () => {
        try {
            // Retrieve the credentials
            credentials = await Keychain.getGenericPassword();
            if (credentials) {
                console.tron.log(
                    'Credentials successfully loaded for user ' + credentials.username
                );
                this.props.attemptLogin(credentials.username, credentials.password)
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
        }
    }

    authIntervalCall() {
        setInterval(this.getAuth, 3000)
    }

    onPressToggle = async () => {
        const { data } = this.props;
        this.setState({ value: this.state.value === 1 ? 0 : 1 });
        const updateVals = [data.deviceId, data.id, data.name, data.actuator_kind, data.actuator_value_type, this.state.value]
        const valuePost = {
            value: this.state.value === 1 ? 0 : 1,
            timestamp: new Date()
        }
        this.props.sensorUpdateValue(data.deviceId, data.id, valuePost)
        this.props.getDevices();
        console.tron.log(updateVals);
    }

    render() {
        const { data } = this.props;
        const { value } = this.state;

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcon name={'light-switch'} size={25} color={Colors.bloodOrange} />
                    <Text style={styles.list_item} >{data.name}</Text>
                </View>
                <Icon name={value === 1 ? 'toggle-on' : 'toggle-off'} size={25} color={Colors.bloodOrange} onPress={() => this.onPressToggle()} />
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
        updateActuatorValue: (deviceId, actuatorId, value) => dispatch(ActuatorActions.actuatorUpdateValueRequest(deviceId, actuatorId, value)),
        sensorUpdateValue: (deviceId, sensorId, value) => dispatch(SensorActions.sensorUpdateValueRequest(deviceId, sensorId, value)),
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemActuator);