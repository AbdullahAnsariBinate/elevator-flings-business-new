import React from 'react'
import { MarginModifiers } from 'react-native-ui-lib'
import { Bounceable } from 'rn-bounceable'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { imgs } from '../../assets/imgs'
import { CText, Containers, Core } from '..'
import { View, Image } from 'react-native-ui-lib'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../theme/colors'




export const MacroChat = ({ msg }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <Image resizeMode='center' style={styles.avatar} source={imgs.avatar} />
                </View>
            </View>
            <View width={'70%'}>
                <View backgroundColor={themes?.light?.colors.pink} paddingH-20 paddingV-15 style={styles.msgbox}>
                    <CText style={styles.postDesp}>
                        {msg}
                    </CText>
                </View>
                <View spread style={styles.name}>
                    <CText style={styles.postSq}>
                        You
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
        flexDirection: 'row-reverse',
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
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    profile: {
        flexDirection: 'column-reverse',
        marginBottom: responsiveHeight(2.5),
        marginLeft: responsiveWidth(2.5),
    },
    name: {
        flexDirection: 'row-reverse',
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
