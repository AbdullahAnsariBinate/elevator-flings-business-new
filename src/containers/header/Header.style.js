import {StyleSheet, Platform} from "react-native";
import {themes as theme, themes} from "../../theme/colors";
import { responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";
export const headerHeight = Platform.OS === 'ios' ? responsiveScreenHeight(4) : responsiveScreenHeight(5);

const styles = StyleSheet.create({
    headerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLogoImage: {
        width: 140.6,
        height: 36.62
    },
    leftHeader:{
  gap:2,
  alignItems:'center'
    },
    container: {
        height: headerHeight,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: theme['light'].colors.tertiary,
        justifyContent:'space-between'

    },
    headerStyle: {
        backgroundColor: theme['light'].colors.tertiary,
        paddingVertical: responsiveScreenHeight(0.8),
        position: 'relative',
        zIndex: 1
    },
    headerTransparentStyle: {
        backgroundColor: 'transparent',
    },
    headerLight: {
        fontSize:themes?.fontSize?.regular,
        color:themes['light']?.colors?.black,
        fontFamily:themes?.font?.semiBold
    },
    headerCartLight: {
        borderColor: 'rgba(227, 227, 224, 0.2)',
        backgroundColor: 'rgba(227, 227, 224, 0.1)',
    },
    headerTitleStyle: {
        fontSize:themes?.fontSize?.regular,
        color:themes['light']?.colors?.black,
        fontFamily:themes?.font?.semiBold,
        textAlign: 'center',
    },
    headerButton: {},
    headerButtonIcon: {
        fontSize: 24,
        color: theme['light'].colors.pink,
    },
    otherOptions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otherOptionsButtonSpace: {
        marginRight: 20
    },
    lightColor: {
        color: theme['light'].colors.tertiary
    },
    lightBackgroundColor: {
        backgroundColor: theme['light'].colors.tertiary
    },


    headerCartButton: {
        width: 45,
        height: 45,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: theme['light'].colors.lightBorderColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -25,
    },
    headerCartBadge: {
        backgroundColor: theme['light'].colors.primary,
        minWidth: 12,
        minHeight: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        right: 5,
        zIndex: 1,
        padding: 3
    },
    headerCartBadgeText: {
        fontSize: 8,
        color: theme['light'].colors.black,
        fontFamily: theme.font.regular
    },
    headerCartButtonIcon: {
        marginTop: 6,
        marginLeft: -5,
        fontSize: 24,
        color: theme['light'].colors.primary,
    },
    headerLeftTitle:{
        fontSize:themes?.fontSize?.regular,
        color:themes['light']?.colors?.black,
        fontFamily:themes?.font?.semiBold
        
    },
    icons:{
        height:responsiveFontSize(3.6),
        width:responsiveFontSize(3.6)
    }
});

export default styles
