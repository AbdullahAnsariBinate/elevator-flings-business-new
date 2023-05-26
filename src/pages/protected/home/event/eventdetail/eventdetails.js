import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { Carousel, View as CustomView, TouchableOpacity } from 'react-native-ui-lib'
import { CText, Requests } from '../../../../../uiComponents'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { themes } from '../../../../../theme/colors'
import { Data } from './data'
import { dummyData } from './dummy'
import FastImage from 'react-native-fast-image'
import { icons, imgs as images } from '../../../../../assets/imgs'
import { styles } from '../event.style'
import { Container } from '../../../../../containers'
import Styles from '../../Home.style'
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'

const EventDetails = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const navigation = useNavigation()
  const headerProps = {
    showCenterLogo: false,
    backButtonIcon: 'close',
    hideBackButton: false,
    headerLeft: true,
    headerTitle: 'Event Details',
    headerRight: false
  };
  const handleMessage = React.useCallback(() => {
    navigation.navigate('chatlist')
  }, [])
  const handleEdit = React.useCallback(() => {
    // screens.push(componentId, 'EditEvent')
  }, [])
  const renderItem = ({ item }) => {
    console.log("🚀 ~ file: eventdetails.js:33 ~ renderItem ~ item:", item)
    return <Requests imgs={item?.img} btn name2='Reject' name='Accept' />
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
      <View>
        <Carousel
          containerStyle={{
            height: responsiveHeight(32),
          }}
          loop
          pageControlProps={{
            size: 7,
            color: themes['light'].colors.pink,
          }}
          pageControlPosition={Carousel.pageControlPositions.UNDER}
        >
          {Data.map((image, i) => {
            return (
              <View key={i}>
                <FastImage style={styles.dataImg} source={image.image} resizeMode='cover' />
                <TouchableOpacity style={styles.edit} onPress={handleEdit}>
                  <FastImage style={styles.carouselIcon} source={image.edit} resizeMode='cover' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dlt} onPress={handleVisible}>
                  <FastImage style={styles.carouselIcon} source={image.dlt} resizeMode='cover' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.msg} onPress={handleMessage}>
                  <FastImage style={styles.carouselIcon} source={image.msg} resizeMode='cover' />
                </TouchableOpacity>
              </View>
            )
          })}
        </Carousel>

        <CustomView style={styles.descContainer}>
          <CustomView spread row paddingV-4 centerV>
            <CText style={Styles.postName}>
              Lorem Ispum
            </CText>
            <CustomView row centerV style={{ gap: 5 }}>
              <CText style={Styles.postSq}>
                Category:
              </CText>
              <CText style={Styles.postDesp}>
                Lorem ipsum
              </CText>
            </CustomView >
          </CustomView >
          <CustomView row paddingV-2 centerV style={{ gap: 5 }}>
            <CustomView width={responsiveWidth(4)} height={responsiveWidth(4)}>
              <FastImage source={icons.Marker} style={styles.loc} resizeMode='contain' />
            </CustomView >
            <CText style={Styles.postHeading}>
              Elementum nam laoreet dictumst bibendum
            </CText>
          </CustomView >
          <CustomView paddingV-2>
            <CText numberOfLines={7} style={Styles.postDesp}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </CText>
          </CustomView >
          <CustomView style={styles.timingContainer}>
            <CustomView row style={{ gap: 5 }}>
              <CText style={Styles.postSq} >Time:</CText>
              <CText style={Styles.postDesp} >10am to 6pm</CText>
            </CustomView >
            <CustomView row centerV style={{ gap: 5 }} >
              <CText style={Styles.postSq}>
                Event:
              </CText>
              <CText style={Styles.postDesp}>
                Public
              </CText>
              <CustomView marginL-15 row>
                <FastImage source={images.Profile} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile2} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile3} style={styles.profile} resizeMode='contain' />
                <FastImage source={images.Profile4} style={styles.profile} resizeMode='contain' />
              </CustomView>
            </CustomView >
          </CustomView >
        </CustomView >

        <CustomView >
          <CustomView style={styles.pastEvent} paddingH-15>
            <CText style={Styles.postName}>
              Requests
            </CText>
          </CustomView >

          <CustomView paddingH-15 style={styles.request}>
            <FlashList data={dummyData} renderItem={renderItem} estimatedItemSize={70} />
          </CustomView >
        </CustomView >
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
      </View>
    </Container>
  )
}

export default EventDetails

// const styles = StyleSheet.create({})