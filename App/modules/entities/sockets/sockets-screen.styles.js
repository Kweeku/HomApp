import { StyleSheet } from 'react-native'

import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../shared/themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    welcomeText: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.snow,
        fontWeight: '600',
    },
    hairline: {
        borderBottomColor: Colors.fire,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginTop: 5,
    },
    logo: {
        marginTop: Metrics.section,
        height: Metrics.images.logo,
        width: Metrics.images.logo,
        resizeMode: 'contain',
    },
    centered: {
        alignItems: 'center',
    },
    scrollView: {
        paddingBottom: Metrics.baseMargin,
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.transparent,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.snow,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.snow,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.snow,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    title: {
        textAlign: 'center',
        fontWeight: '300',
        marginTop: 20,
        ...Fonts.style.h6
    },
    motion_detected: {
        flex: 1,
        alignItems: 'center',
        margin: 15,
        borderRadius: 8,
        paddingVertical: 20,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        elevation: 2,
        backgroundColor: Colors.fire,
        ...Fonts.style.normal
    },
    motion_not_detected: {
        flex: 1,
        alignItems: 'center',
        margin: 15,
        borderRadius: 8,
        paddingVertical: 20,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        elevation: 2,
        backgroundColor: Colors.leaves,
        ...Fonts.style.normal
    },
    empty_list: {
        textAlign: 'center',
        marginTop: 12,
        ...Fonts.style.empty
    }
})
