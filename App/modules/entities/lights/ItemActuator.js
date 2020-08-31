import React, { Component } from "react";
import { connect } from 'react-redux'
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './lights-screen.styles';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../shared/themes';
import ActuatorActions from './actuator.reducer'
import DeviceActions from '../../account/device/device.reducer'

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

    onPressToggle = () => {
        const { data } = this.props;
        this.setState({ value: !this.state.value },
            () => {
                this.props.updateActuatorValue(data.deviceId, data.id, this.state.value)
            });
        const updateVals = [data.deviceId, data.id, data.name, data.actuator_kind, data.actuator_value_type, this.state.value]
        console.tron.log(updateVals);
    }

    render() {
        const { data } = this.props;
        const { value } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.list_item} >{data.name} {data.actuator_kind}</Text>
                <Icon name={value === true ? 'toggle-on' : 'toggle-off'} size={15} color={Colors.bloodOrange} onPress={() => this.onPressToggle()} />
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
        getDevices: () => dispatch(DeviceActions.deviceAllRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemActuator);