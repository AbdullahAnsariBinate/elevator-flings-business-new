import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { CText, } from '..'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../theme/colors'


const Requests = ({ imgs, btn, name, name2 }) => {
    return (
        <View row spread paddingV-10 paddingH-10 marginV-4 br30 style={styles.bg}>
            <View row centerV style={{gap:8}}>
                <FastImage source={imgs} style={styles.profile} />
                <CText numberOfLines={2} style={styles.postSq}>
                    John
                </CText>
            </View>
            {btn && (
                <View row centerV>
                    <TouchableOpacity style={styles.btn}>
                        <CText style={styles.postBtn}>{name}</CText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1}>
                        <CText style={styles.postBtn2}>{name2}</CText>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default Requests

const styles = StyleSheet.create({
    profile: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        borderRadius: 50,
    },
    btn: {
        paddingHorizontal: responsiveWidth(1.8),
        backgroundColor: themes['light'].colors.pink,
        height: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(0.5),
        borderRadius: 10,
    },
    btn1: {
        paddingHorizontal: responsiveWidth(1.8),
        height: responsiveHeight(5),
        backgroundColor: themes['light'].colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(0.5),
        borderRadius: 10,
        borderColor: themes['light'].colors.black,
        borderWidth: 2,
        marginLeft: responsiveWidth(1),
    },
    postSq: {
        fontFamily: themes?.font?.bold,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.extraSmall
    },
    postBtn: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.white,
        fontSize: themes?.fontSize?.extraSmall
    },
    postBtn2: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.extraSmall
    },
    bg:{
        backgroundColor:themes?.light?.colors?.flashWhite
    }
})
