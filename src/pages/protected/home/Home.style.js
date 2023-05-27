import { StyleSheet } from "react-native";
import { themes } from "../../../theme/colors";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },

    list: {
        marginHorizontal: -10,
        paddingVertical: 20,
    },

    listItem: {
        flex: 1,
    },

    listItemView: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: themes["light"].colors.lightBorderColor,
    },
    listItemImageContainer: {
        width: "100%",
        maxHeight: 132,
        overflow: "hidden",
        borderRadius: 10,
        // marginTop: -1
    },
    listItemImage: {
        width: "100%",
        height: "110%",
    },
    listItemContent: {
        paddingVertical: 12,
        paddingHorizontal: 5,
    },
    listItemTitle: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: themes.font.medium,
        color: themes["light"].colors.fontColor,
    },
    listItemSubTitle: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: themes.font.medium,
        color: themes["light"].colors.primary,
        marginTop: 5,
    },

    horizontalItem: {
        flexDirection: "row",
    },
    horizontalItemView: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    horizontalItemImageContainer: {
        width: 65,
        height: 66,
        marginRight: 15,
    },
    horizontalItemContent: {
        flex: 1,
        alignItems: "flex-start",
        marginRight: 15,
    },

    listItemRightIcon: {
        color: themes["light"].colors.primary,
        fontSize: 18,
        marginRight: 15,
    },
    search: {
        flexDirection: 'row-reverse',
        paddingRight: 20,
        borderRadius: 15,
        backgroundColor: themes['light'].colors.offWhite,
        marginHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 4,
    },
    img: { height: 20, width: 20 },
    tabbar: { backgroundColor: 'transparent' },
    tabCus: {
        width: '92%',
        borderRadius: 15,
        backgroundColor: themes['light']?.colors?.offWhite,
        alignSelf: 'center',
        marginTop: 5,
    },
    tabText: {
        fontFamily: 'SofiaProRegular',
        fontWeight: 'bold',
        paddingVertical: 14,
        textAlign: 'center',
        borderRadius: 10,
        margin: 0,
    },
    scrollBar: {
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: responsiveHeight(0),
        paddingTop: responsiveHeight(1),
    },
    scrollBar2: {
        // paddingTop: responsiveHeight(0.6),
        // marginBottom: responsiveHeight(2),
    },
    postName: {
        fontFamily: themes?.font?.bold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.regular
    },
    postSq: {
        fontFamily: themes?.font?.bold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.small
    },
    postHeading: {
        fontFamily: themes?.font?.semiBold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.small,
    },
    postDesp: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.fontBlack,
        fontSize: themes?.fontSize?.small
    },
    image: {
        height: 12,
        width: 12,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});
export default Styles;
