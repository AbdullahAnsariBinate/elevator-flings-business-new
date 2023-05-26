import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { Container } from '../../../../../containers'
import { Carousel, TouchableOpacity } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { CText, PastEvents } from '../../../../../uiComponents'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../../../../theme/colors'
import { styles } from './propertyd.style'
import { dummyData } from './dummy'
import { Data } from './data'
import { icons } from '../../../../../assets/imgs'
import { FlashList } from '@shopify/flash-list'
import { View as CustomView } from 'react-native-ui-lib'
import Styles from '../../Home.style'

const PropertyDetail = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: true,
        headerLeft: false,
        headerTitle: 'Property Details',
        headerRight: false
    };

    const handleEdit = React.useCallback(() => {
        // screens.push(componentId, 'EditProperty')
    }, [])
    const renderItem = ({ item }) => {
        return (
            <PastEvents img={item?.img} title={item?.title} />
        )
    }

    const handleVisible = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}

        >
            {/* <ScrollView> */}
            <View marginT-10>
                <Carousel
                    containerStyle={{
                        height: responsiveHeight(32),
                    }}
                    loop
                    // autoplay={true}
                    pageControlProps={{
                        size: 7,
                        color: themes['light'].colors.pink,
                    }}
                    pageControlPosition={Carousel.pageControlPositions.UNDER}
                >
                    {Data.map((image, i) => {
                        console.log("🚀 ~ file: PropertyDetail.js:64 ~ {Data.map ~ image:", image)
                        return (
                            <CustomView key={i}>
                                <FastImage style={styles.dataImg} source={image.image} resizeMode='cover' />
                                <TouchableOpacity style={styles.edit} onPress={handleEdit}>
                                    <FastImage
                                        style={styles.carouselIcon}
                                        source={image.edit}
                                        resizeMode='cover'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dlt} onPress={handleVisible}>
                                    <FastImage
                                        style={styles.carouselIcon}
                                        source={image.dlt}
                                        resizeMode='cover'
                                    />
                                </TouchableOpacity>
                            </CustomView>
                        )
                    })}
                </Carousel>

                <View style={styles.descContainer}>
                    <CustomView spread row paddingV-4 centerV>
                        <CText style={Styles.postName}>
                            Lorem Ispum
                        </CText>
                        <CustomView row centerV style={{ gap: 4 }}>
                            <CText style={Styles.postSq}>
                                Category:
                            </CText>
                            <CText style={Styles.postDesp}>
                                Lorem ipsum
                            </CText>
                        </CustomView>
                    </CustomView>
                    <CustomView row paddingV-2 centerV style={{ gap: 4 }}>
                        <View width={responsiveWidth(4)} height={responsiveWidth(4)}>
                            <FastImage source={icons.Marker} style={styles.loc} resizeMode='contain' />
                        </View>
                        <CText style={Styles.postHeading}>
                            Elementum nam laoreet dictumst bibendum
                        </CText>
                    </CustomView>
                    <CustomView paddingV-2>
                        <CText numberOfLines={6} style={Styles.postDesp}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </CText>
                    </CustomView>
                </View>

                <View>
                    <CustomView style={styles.pastEvent} paddingH-15>
                        <CText style={Styles.postName}>
                            Past Event
                        </CText>
                    </CustomView>
                    <CustomView>
                        <FlashList
                            estimatedItemSize={70}
                            data={dummyData}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </CustomView>
                </View>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(!isModalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CText style={styles?.postName}>
                            Are you sure?
                        </CText>
                        <CText style={styles?.postDesp}>
                            Do you really want to delete the lorem ipsum property? This process cannot be
                            undone.
                        </CText>
                        <CustomView row centerV marginT-20>
                            <TouchableOpacity style={styles.btn} onPress={handleVisible}>
                                <CText style={styles?.btnText1}>Accept</CText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn1} onPress={handleVisible}>
                                <CText style={styles?.btnText2}>Reject</CText>
                            </TouchableOpacity>
                        </CustomView>
                        <CText style={styles.textStyle}>Done</CText>
                        <View style={styles.cross}>
                            <Pressable
                                onPress={() => setIsModalVisible(!isModalVisible)}
                                style={styles.crossBtn}
                            >
                                <FastImage source={icons?.CrossRed} style={styles.image} resizeMode='contain' />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* </ScrollView> */}
        </Container>
    )
}

export default PropertyDetail

