import React from 'react'
import { ScrollView, Text, Image, View, Platform, Button, Linking } from 'react-native'
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/HomAScreen'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import { Images } from '../../../shared/themes'
import styles from './appliances-screen.styles'

class ApplianceScreen extends React.Component {
    constructor(props) {
        super(props)
        // Navigation.events().bindComponent(this)
        this.state = {}
    }

    fetchAppliances() {

    }

    render() {
        return (
            <View style={styles.mainContainer} testID="applianceScreen">
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.centered}>
                        {/* <Image source={Images.logoJhipster} style={styles.logo} />
                        <Text style={styles.welcomeText}>{'Welcome to your Ignite JHipster app.'}</Text> */}
                    </View>
                    <View style={styles.hairline} />
                    {/* <Header /> */}
                    <View style={styles.body}>
                        <Text style={styles.empty_list}>Sorry, there's no data to display at this time</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // for developer convenience
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // for developer convenience
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplianceScreen)
