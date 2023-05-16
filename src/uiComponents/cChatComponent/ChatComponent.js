import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { CText } from '..'
import { themes } from '../../theme/colors'

const ChatComponent = ({ imgs, onPress }) => {
    return (
        <Pressable

            onPress={onPress}
            style={styles.View}
        >
            <View row>
                <FastImage source={imgs} style={styles.img} />
                <View marginL-10>
                    <CText style={styles?.postHeading}>
                        Alex
                    </CText>
                    <CText style={styles?.postDesp} numberOfLines={1}>
                        alex alex alex laex alexchudid alex alex
                    </CText>
                </View>
            </View>
            <View>
                <View br50 centerH centerV width={19} height={19} marginB-5 style={styles.notificationView} padding-2>
                    <CText style={styles.postNoti}>
                        1
                    </CText>
                </View>
            </View>
        </Pressable>
    )
}

export default React.memo(ChatComponent)

const styles = StyleSheet.create({
    img: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        resizeMode: 'contain',
    },
    View: {
        backgroundColor: themes['light']?.colors?.flashWhite,
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row'
    },
    notificationView: {
        backgroundColor: themes['light']?.colors?.red
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
    postNoti: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.white,
        fontSize: themes?.fontSize?.tiny,
        textAlign: 'center'
    }
})
