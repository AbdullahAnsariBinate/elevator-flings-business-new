import { StyleSheet, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { icons, imgs as images } from '../../assets/imgs'
import { CText, Core } from '..'
import { memo } from 'react'
import { themes } from '../../theme/colors'


const EventPost = ({ imgs, img, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <FastImage source={imgs} style={styles.postImg} resizeMode='contain' />
                {img && (
                    <View style={styles.img}>
                        <View row style={{ gap: 5 }}>
                            <CText style={styles.postTime}>Time:</CText>
                            <CText style={styles.postTimeVal}>10am to 6pm</CText>
                        </View >
                        <View row centerV style={styles.postPrivacy}>
                            <View row style={{ gap: 5 }}>
                                <CText style={styles.postTime}>Time:</CText>
                                <CText style={styles.postTimeVal}>Public</CText>
                            </View>
                            <View row>
                                <FastImage source={images.Profile} style={styles.profile} resizeMode='contain' />
                                <FastImage source={images.Profile2} style={styles.profile} resizeMode='contain' />
                                <FastImage source={images.Profile3} style={styles.profile} resizeMode='contain' />
                                <FastImage source={images.Profile4} style={styles.profile} resizeMode='contain' />
                            </View>
                        </View>
                    </View>
                )}
            </TouchableOpacity>

            <View spread row paddingV-4>
                <CText style={styles.postName}>Lorem Ispum</CText>
                <CText style={styles.postSq}>1200, SQFT</CText>
            </View>
            <View row paddingV-2 centerV style={{ gap: 5 }}>
                <View width={responsiveWidth(4)} height={responsiveWidth(4)}>
                    <FastImage source={icons.Marker} style={styles.loc} resizeMode='contain' />
                </View>
                <CText style={styles.postHeading}>Elementum nam laoreet dictumst bibendum</CText>
            </View>
            <View >
                <CText style={styles.postDesp}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                </CText>
            </View>
        </View>
    )
}

export default memo(EventPost)

const styles = StyleSheet.create({
    postImg: {
        width: '100%',
        height: '100%',
    },
    loc: {
        width: '100%',
        height: '100%',
    },
    profile: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        borderRadius: 50,
        marginLeft: -12,
    },
    img: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        bottom: 12,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    btn: {
        height: responsiveWidth(56),
        width: '100%',
        borderRadius: 20,
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
        fontSize: themes?.fontSize?.small
    },
    postDesp: {
        fontFamily: themes?.font?.regular,
        color: themes['light']?.colors?.fontBlack,
        fontSize: themes?.fontSize?.small
    },
    postPrivacy: {
        gap: 20
    },
    postTime: {
        fontFamily: themes?.font?.bold,
        color: themes['light']?.colors?.white,
        fontSize: themes?.fontSize?.small
    },
    postTimeVal: {
        fontFamily: themes?.font?.light,
        color: themes['light']?.colors?.white,
        fontSize: themes?.fontSize?.small
    }

})
