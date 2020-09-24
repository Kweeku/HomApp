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
import styles from './statistics-screen.styles';
import Icon from 'react-native-vector-icons/Feather'

export default class RoomTwo extends Component {
    static propTypes = {
        devices: PropTypes.any,
        gasSensor: PropTypes.any
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

    renderGasReading = (gasVal) => {
        if (gasVal.value.value < 351) {
            console.tron.log('Air quality is good')
            return (
                <View style={[styles.motion_not_detected, { backgroundColor: Colors.leaves }]}>
                    <Text style={styles.welcomeText}>Air quality is good</Text>
                </View>
            )
        } else if (gasVal.value.value > 350 && gasVal.value.value < 501) {
            console.tron.log("Air quality is poor")
            return (
                <View style={[styles.motion_not_detected, { backgroundColor: Colors.bloodOrange }]}>
                    <Text style={styles.welcomeText}>Air quality is poor</Text>
                </View>
            )
        } else if (gasVal.value.value > 500) {
            console.tron.log("Air is toxic")
            return (
                <View style={[styles.motion_not_detected, { backgroundColor: Colors.fire, flexDirection: 'row', justifyContent:'space-evenly' }]}>
                    <Icon name='alert-triangle' size={40} color={Colors.banner} />
                    <Text style={styles.welcomeText}>Air is toxic</Text>
                </View>
            )
        }
    }

    render() {
        const progressTemp = {
            labels: ['Hum', 'Temp'],
            data: [this.props.humVal.value.value / 100, this.props.tempVal.value.value / 100],
        }
        const data = {
            labels: this.props.tempTimestamp,
            datasets: [
                {
                    data: this.props.tempValues,
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                },
                // {
                //     data: [30, 65, 48, 120, 199, 73],
                //     color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                //     strokeWidth: 2 // optional
                // }
            ],
            legend: [`Temperature Readings for ${this.props.date}`] // optional
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
                        width={Dimensions.get('screen').width - 35}
                        height={220}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={false}
                        style={{
                            borderRadius: 15,
                            elevation: 2,
                            flex: 1,
                            padding: 3,
                        }}
                        hasLegend={true}
                    />
                </View>
                {this.props.tempValues !== null &&
                    <View style={{ padding: 15, flex: 1, borderRadius: 15 }} >
                        <LineChart
                            data={data}
                            width={Dimensions.get('screen').width - 35}
                            height={220}
                            chartConfig={chartConfig}
                            style={{
                                borderRadius: 15,
                                elevation: 2,
                                padding: 3
                            }}
                        />
                    </View>
                }
                {/* <View style={{ padding: 15, flex: 1, borderRadius: 15 }} >
                    <LineChart
                        data={gasData}
                        width={Dimensions.get('screen').width - 35}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            borderRadius: 15,
                            elevation: 2,
                            padding: 3
                        }}
                        bezier
                    />
                </View> */}
                {this.renderGasReading(this.props.gasVal)}
                {this.props.motionVal.value.value === 1 ? this.renderMotionDetected() : this.renderNoMotionDetected()}
            </ScrollView >
        )
    }
}