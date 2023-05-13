import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../../theme/colors'

export const styles = StyleSheet.create({
    profile: {
        height: responsiveWidth(30),
        width: responsiveWidth(30),
        borderRadius: 50,
    },
    bio: {
        paddingVertical: responsiveHeight(1.5),
        borderBottomWidth: 0.5,
        borderBottomColor: themes['light']?.colors.borderGray,
    },
    bioLast: {
        paddingVertical: responsiveHeight(1.5),
    },
    container: {
        backgroundColor: '#FFFFFF',
        // borderRadius: 10,
    },
    bottomArea: {
        height: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        opacity: 0.04,
        backgroundColor: '#6b6b6b', // Just for visualization purposes
    },
    notification: {
        paddingVertical: responsiveHeight(2.2),
        backgroundColor: themes['light']?.colors?.flashWhite,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingBottom: 20,
        paddingTop: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 2,
        marginTop: 20,
        width: '100%',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: themes['light']?.colors?.pink,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        height: 12,
        width: 12,
    },
    cross: {
        position: 'absolute',
        right: 5,
        top: 5,
    },
    crossBtn: {
        padding: 10,
    },
    btn: {
        paddingHorizontal: responsiveWidth(10.5),
        backgroundColor: themes['light']?.colors?.pink,
        height: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(0.5),
        borderRadius: 10,
    },
    btn1: {
        paddingHorizontal: responsiveWidth(10.5),
        height: responsiveHeight(6),
        backgroundColor: themes['light']?.colors?.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(0.5),
        borderRadius: 10,
        borderColor: themes['light']?.colors?.black,
        borderWidth: 2,
        marginLeft: responsiveWidth(1),
    },
    request: {
        paddingBottom: responsiveHeight(3),
        minHeight: 100,
        minWidth: 100,
    },
    pass: {
        textAlign: 'center'
    },
    nameField: {
        fontFamily: themes?.font?.semiBold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.small
    },
    name: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.fontBlack,
        fontSize: themes?.fontSize?.small

    },
    userName: {
        fontFamily: themes?.font?.bold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.regular
    },
    btnText: {
        color: themes['light'].colors.black,
        fontSize: themes?.fontSize?.medium,
        fontFamily: themes.font.regular,
    },
})
