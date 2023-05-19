import { StyleSheet } from 'react-native';
import { themes as theme, themes } from "../../theme/colors";
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({

    container: {
        flexGrow: 1,
        paddingHorizontal: responsiveScreenWidth(6)
    },

    header: {
        alignItems: 'center',
        paddingVertical: 50
    },
    headerLogo: {
        width: 200,
        height: 53,
    },

    card: {
        gap: responsiveHeight(1.8)

    },
    cardHeader: {
        // marginBottom: 30
    },
    cardHeaderTitle: {
        fontSize: 28,
        fontFamily: theme.font.medium,
        color: theme['light'].colors.fontColor,
        marginBottom: 10
    },
    cardHeaderSubTitle: {
        fontSize: 16,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.lightGray,
        marginBottom: 10
    },

    cardBody: {
        // marginBottom: 15
    },

    cardBottomText: {
        fontSize: 14,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.lightGray,
        textAlign: 'center',
        marginTop: 12
    },

    cardBottomText2: {
        fontSize: 14,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.lightGray,
        textAlign: 'center',
        marginBottom: 12,
        marginTop: 12
    },

    orContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    orContainerText: {
        fontSize: 20,
        fontFamily: theme.font.regular,
        color: theme['light'].colors.fontColor,
    },

    bottomButton: {
        marginBottom: 20
    },



    otpContainer: {
        alignItems: 'stretch',
        marginBottom: 30,

    },

    otpInputView: {
        height: 62,
        // width: '100%',
        marginBottom: 10,
        alignItems: 'stretch',
        // backgroundColor: 'red'
    },

    codeInputFieldStyle: {
        borderWidth: 1,
        borderColor: themes['light'].colors.secondary3,
        position: 'relative',
        fontSize: 20,
        fontFamily: themes.font.regular,
        color: themes['light'].colors.primary,
        borderRadius: 10,
        backgroundColor: themes['light'].colors.secondary3,
        height: 62,
        // marginHorizontal: 5,
        minWidth: 62,
        maxWidth: 62,
        width: 'auto',
        flex: 1
    },

    codeInputHighlightStyle: {
        borderColor: themes['light'].colors.secondary,
        borderWidth: 2,
        color: themes['light'].colors.fontColor
    },

    linkButtonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'
    },

    linkButtonWithIcon: {
        flexDirection: 'row',
    },
    linkButtonText: {
        fontSize: 14,
        color: themes['light'].colors.lightGray,
        fontFamily: themes.font.regular,
        marginRight: 5,
    },
    linkButtonOtherText: {
        color: themes['light'].colors.fontColor,
        fontFamily: themes.font.medium,
    },


    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(124, 128, 97, 0.7)',
        paddingTop: 200,
        paddingHorizontal: 20
    },
    modalInnerContainer: {
        flex: 1,
        backgroundColor: theme['light'].colors.tertiary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    logo: {
        height: responsiveHeight(11),
        width: '100%'
    },
    logoView: {
        paddingTop: responsiveScreenHeight(10),
        paddingBottom: responsiveScreenHeight(5)
    },
    bottomlink: {
        flexDirection: 'row',
        // marginTop: responsiveScreenHeight(18),
        marginVertical: responsiveScreenHeight(2),

        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomlinkText: {
        color: themes['light'].colors?.black
    },
    bottomlinkTextNav: {
        color: themes['light'].colors?.pink,
        fontSize: themes?.fontSize?.medium,
        fontFamily: themes?.font?.bold,
        textDecorationLine: 'underline'
    },
    forgotLink: {
        paddingVertical: responsiveScreenHeight(0.9)
    },
    forgotLinkText: {
        color: themes['light'].colors?.black,
        fontSize: themes?.fontSize?.small,
        fontFamily: themes?.font?.bold,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    bottomlinkSignup: {
        flexDirection: 'row',
        marginVertical: responsiveScreenHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupCard: {
        marginBottom: 15
    },
    imagesContainer: {
        position: 'relative',
        // backgroundColor:'red'
    },
    uploadProImg: {
        height: '100%',
        width: '100%',
    },
    uploadIcon: {
        padding: 20,
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        position: 'absolute',
        bottom: -6,
        right: 0,
        width: responsiveHeight(3.5),
        left: 80, borderWidth: 1,
         height: responsiveHeight(3.5),
        justifyContent: 'center',
         alignItems: 'center',
         borderColor:themes?.light?.colors?.white
    },
    uploadIconImg: {
        height: responsiveHeight(2),
        width: responsiveHeight(2),
    },
    heading: {
        color: themes['light'].colors?.black,
        fontSize: themes?.fontSize?.regular,
        fontFamily: themes?.font?.bold,
    },
    bottomBtn: {
        paddingVertical: 2,
    },
    businessProfile: {
        borderWidth: 2,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: themes?.light?.colors?.pink
    }
});
