import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Metrics, ApplicationStyles, Colors } from '../../../shared/themes'
import { ScrollView, Text, Image, View, Platform, Button, Dimensions, StyleSheet } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import styles from './statistics-screen.styles'

export default class RoomTwo extends Component {
    static propTypes = {
        devices: PropTypes.any,
    };

    renderMotionDetected = () => {
        return (
            <View style={styles.motion_detected}>
                <Text style={styles.welcomeText}>Motion Detected in Room Two</Text>
            </View>
        )
    }

    renderNoMotionDetected = () => {
        return (
            <View style={styles.motion_not_detected}>
                <Text style={styles.welcomeText}>No Motion Detected in Room Two</Text>
            </View>
        )
    }

    render() {
        const { devices } = this.props;
        const dev2 = devices ? devices[1] : [];
        const humVal = dev2 ? dev2.sensors[1] : [];
        const gasVal = dev2 ? dev2.sensors[0] : [];
        const tempVal = dev2 ? dev2.sensors[3] : [];
        const motionVal = dev2 ? dev2.sensors[2] : [];
        const progressTemp = {
            labels: ['Humidity', 'Temp'],
            data: [humVal.value.value / 100, tempVal.value.value / 100],
            legend: ['Humidity', 'Temperature'] // optional
        }
        const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                },
                {
                    data: [30, 65, 48, 120, 199, 73],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ],
            legend: ["DHT Sensor Readings"] // optional
        };
        const gasData = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                },
                {
                    data: [30, 65, 48, 120, 199, 73],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ],
            legend: ["Gas Sensor Readings"] // optional
        };
        const chartConfig = {
            backgroundColor: Colors.fridayGreen,
            backgroundGradientFrom: Colors.jhipsterBlue,
            backgroundGradientTo: Colors.jhipsterBlue,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }
        return (
            <ScrollView style={{ flex: 1 }} >
                <View style={{ padding: 15, flex: 1, borderRadius: 15 }}>
                    <ProgressChart
                        data={progressTemp}
                        width={400}
                        height={220}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={false}
                        style={{
                            borderRadius: 15,
                            elevation: 2,
                            padding: 3
                        }}
                        hasLegend={true}
                    />
                </View>
                <View style={{ padding: 15, flex: 1, borderRadius: 15 }} >
                    <LineChart
                        data={data}
                        width={400}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            borderRadius: 15,
                            elevation: 2,
                            padding: 3
                        }}
                    />
                </View>
                <View style={{ padding: 15, flex: 1, borderRadius: 15 }} >
                    <LineChart
                        data={gasData}
                        width={400}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            borderRadius: 15,
                            elevation: 2,
                            padding: 3
                        }}
                        bezier
                    />
                </View>
                {motionVal.value.value === 1 ? this.renderMotionDetected() : this.renderNoMotionDetected()}
            </ScrollView>
        )
    }
}