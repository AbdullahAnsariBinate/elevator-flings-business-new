import { StyleSheet, Platform } from 'react-native';
import { themes as theme, themes } from "../../theme/colors";
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    buttonStyle: {
        borderColor: theme['light'].colors.primary,
        borderWidth: 1,
        backgroundColor: theme['light'].colors.primary,
        padding: responsiveScreenHeight(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'relative',
        height: responsiveScreenHeight(7.5),
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: themes['light'].colors.white,
        fontSize: themes?.fontSize?.regular,
        fontFamily: themes.font.regular,
    },
    buttonIcon: {
        color: theme['light'].colors.secondary,
        fontSize: 12,
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 2 : 4
    },

})
