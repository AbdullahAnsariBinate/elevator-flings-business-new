import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { Container } from '../../../containers';
import { Searchbar } from 'react-native-paper';
import { themes } from '../../../theme/colors';
import FastImage from 'react-native-fast-image';
import { icons, imgs } from '../../../assets/imgs';
import Styles from './Home.style'
import { TabView, SceneMap, TabBar, TouchableOpacity } from 'react-native-tab-view'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useWindowDimensions, FlatList } from 'react-native';
import { CButton, CText, EventPost } from '../../../uiComponents';
import { } from 'react-native';
import { data } from './data';
import { data2 } from './data2';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import AuthStyle from '../../auth/Auth.style';
import { View as CustomView } from 'react-native-ui-lib'
import { useCallback } from 'react';


function Home(props) {
  const onChangeSearch = (query) => setSearchQuery(query)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const navigation = useNavigation()
  const headerProps = {
    showCenterLogo: false,
    showCart: true,
    backButtonIcon: 'close',
    hideBackButton: false,
    headerLeft: true,
    headerLeftTitle: 'Hello, John',
    icon1: icons?.Plus,
    icon2: icons?.Message,
    icon3: icons?.Notification,
    handleIcon1: () => handleEvent(),
    handleIcon2: () => handleMessage(),
    handleIcon3: () => handleNotification()


  };
  const handlePastEvent = React.useCallback(() => {
    navigation.navigate('pastevent')
  }, [])
  const handlePropertydetail = () => {
    navigation.navigate('propertydetail')
  }
  const handleEventdetail = () => {
    navigation.navigate('eventdetails')
  }
  const handleMessage = useCallback(() => {
    navigation.navigate('chatlist')
  }, [])
  const handleNotification = useCallback(() => {
    navigation.navigate('notification')
  }, [])
  const handleEvent = useCallback(() => {
    setIsModalVisible(true)
  }, [])
  
  const handleEditProperty = useCallback(() => {
    navigation.navigate('editnewproperty')
    setIsModalVisible(false)
  }, [])
  const handleEditEvent = useCallback(() => {
    navigation.navigate('editnewevent')
    setIsModalVisible(false)
  }, [])

  const FirstRoute = () => (
    <View style={Styles.scrollBar}>
      <FlatList renderItem={renderItem} data={data} showsVerticalScrollIndicator={false} />
    </View>
  )
  const renderItem = ({ item }) => {
    return <EventPost imgs={imgs?.Property} onPress={handlePropertydetail} />
  }
  const SecondRoute = () => (
    <CustomView paddingH-15 style={Styles.scrollBar2}>
      <FlatList
        ListHeaderComponent={
          <CustomView paddingT-10 paddingB-10>
            <CButton title='Past Events' colorType='pink' onPress={handlePastEvent} />
          </CustomView>
        }
        renderItem={renderItem2}
        data={data2}
        showsVerticalScrollIndicator={false}
      />
    </CustomView>
  )
  const renderItem2 = ({ item }) => {
    return <EventPost imgs={item?.images} img onPress={handleEventdetail} />
  }
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Properties' },
    { key: 'second', title: 'Events Posted' },
  ])



  const renderTabBar = (props) => (
    <View style={Styles.tabCus}>
      <TabBar
        {...props}
        activeColor='#e91e63'
        inactiveColor='#ddd'
        labelStyle={{ fontSize: 16 }}
        style={Styles.tabbar}
        indicatorStyle={{ backgroundColor: 'transparent' }}
        renderLabel={({ route, focused }) => (
          <View width={responsiveWidth(41)}>
            <Text
              style={[
                {
                  color: focused ? '#ffffff' : '#000000',
                  backgroundColor: focused ? themes['light']?.colors?.pink : 'transparent',
                },
                Styles.tabText,
              ]}
            >
              {route.title}
            </Text>
          </View>
        )}
      />
    </View>
  )
  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      scrollView={false}
      headerProps={headerProps}

    >
      <Searchbar
        placeholder='Search'
        placeholderTextColor={themes['light']?.colors?.grey}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={Styles.search}
        icon={() => <FastImage source={icons.Search} style={Styles.img} resizeMode='contain' />}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false)
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Pressable style={[Styles.button, Styles.buttonClose]} onPress={handleEditEvent}>
              <CText style={Styles.textStyle}>Add New Event</CText>
            </Pressable>
            <Pressable style={[Styles.button, Styles.buttonClose]} onPress={handleEditProperty}>
              <CText style={Styles.textStyle}>Add New Property</CText>
            </Pressable>
            <View style={Styles.cross}>
              <Pressable
                onPress={() => setIsModalVisible(false)}
                style={Styles.crossBtn}
              >
                <FastImage source={icons?.CrossRed} style={Styles.image} resizeMode='contain' />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
export default Home;

