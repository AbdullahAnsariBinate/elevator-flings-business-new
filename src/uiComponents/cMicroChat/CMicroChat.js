import React from 'react'
import { MarginModifiers } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Containers, Core } from '../../components'
import { View, Image } from 'react-native-ui-lib'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CText from '../cText/CText'
import { imgs } from '../../assets/imgs'
import { themes } from '../../theme/colors'


export const MicroChat = ({ msg }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <Image resizeMode='center' style={styles.avatar} source={imgs.avatar} />
                </View>
            </View>
            <View width={'70%'}>
                <View backgroundColor={themes?.light?.colors.lightRed} paddingH-20 paddingV-15 style={styles.msgbox}>
                    <CText style={styles.postDesp}>
                        {msg}
                    </CText>
                </View>
                <View spread row>
                    <CText style={styles.postSq}>
                        John Doe
                    </CText>
                    <CText style={styles.postSq}>
                        12:00 PM
                    </CText>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(92),
        flexDirection: 'row',
        marginTop: responsiveHeight(2),
    },
    avatar: {
        height: 40,
        width: 40,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: themes?.light?.colors.lightRed,
    },
    msgbox: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    profile: {
        flexDirection: 'column-reverse',
        marginBottom: responsiveHeight(2.5),
        marginRight: responsiveWidth(2.5),
    },
    postSq: {
        fontFamily: themes?.font?.light,
        color: themes['light']?.colors?.black,
        fontSize: themes?.fontSize?.small
    },
    postDesp: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.white,
        fontSize: themes?.fontSize?.small
    },
})
