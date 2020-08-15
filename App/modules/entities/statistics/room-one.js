import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ScrollView, Text, View } from 'react-native'
import styles from './statistics-screen.styles'

export default class RoomOne extends Component {
    static propTypes = {
        devices: PropTypes.any,
    };

    renderMotionDetected = () => {
        return (
            <View style={styles.motion_detected}>
                <Text style={styles.welcomeText}>Motion Detected in Room One</Text>
            </View>
        )
    }

    renderNoMotionDetected = () => {
        return (
            <View style={styles.motion_not_detected}>
                <Text style={styles.welcomeText}>No Motion Detected in Room One</Text>
            </View>
        )
    }

    render() {
        const { devices } = this.props;
        const dev2 = devices ? devices[0] : [];
        const motionVal = dev2 ? dev2.sensors[0] : [];
        return (
            <ScrollView style={{ flex: 1 }} >
                {motionVal.value.value === 1 ? this.renderMotionDetected() : this.renderNoMotionDetected()}
            </ScrollView>
        )
    }
}