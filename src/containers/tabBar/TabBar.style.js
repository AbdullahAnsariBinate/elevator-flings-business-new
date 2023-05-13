import { StyleSheet } from "react-native";
import { themes as theme, themes } from "../../theme/colors";

const Styles = StyleSheet.create({

    tabContainer: {
        backgroundColor: themes['light'].colors.white,
        // position: 'relative',
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        marginTop: -40,

    },
    absoluteFillObject: {
        backgroundColor: themes['light'].colors.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    tabInnerContainer: {
        flexDirection: 'row',
        // height: 55,
    },
    spotLight: {
        height: '100%',
        alignItems: 'center'
    },
    spotLightInner: {
        height: 65,
        width: 65,
        borderRadius: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.10)'
    },
    tab: {
        flex: 1,
        // paddingVertical: 15,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        marginVertical: 5,
    },
    tabIcon: {
        fontSize: 28,
        color: themes['light'].colors.pink,
    },
    tabText: {
        fontSize: themes?.fontSize?.small,
        color: themes['light'].colors.pink,
        fontFamily: themes.font.regular,
        marginTop: 0
    },
});
export default Styles
