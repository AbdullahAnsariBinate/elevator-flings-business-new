import { StyleSheet, Text, View, ScrollView, Pressable, Modal } from 'react-native'
import React from 'react'
import { Container } from '../../../../../containers'
import { Searchbar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { themes } from '../../../../../theme/colors';
import { icons, imgs } from '../../../../../assets/imgs';
import { View as CustomView } from 'react-native-ui-lib'
import { FlashList } from '@shopify/flash-list';
import { Message } from './Dummydata';
import { dummyData } from './dummy';
import { MicroChat } from '../../../../../uiComponents/cMicroChat/CMicroChat';
import { MacroChat } from '../../../../../uiComponents/cMacroChat/CMacroChat';
import { Requests } from '../../../../../uiComponents';
import { styles } from './chatscreen.styles';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const SingleChat = () => {
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: true,
        headerLeft: false,
        headerTitle: 'Chat',
        headerRight: true,
        icon2: icons?.Setting,
        icon3: imgs?.Profile,
        icon3Style:{height:responsiveFontSize(4.2), width:responsiveFontSize(4.2)},
        handleIcon2: () => handleSetting(),
        handleIcon3:() => handleNotification()
    };
    const [searchQuery, setSearchQuery] = React.useState('')
    const onChangeSearch = (query) => setSearchQuery(query)
    const [isModalVisible, setIsModalVisible] = React.useState(false)

    const renderItem = ({ item }) => {
        return <MicroChat msg={item?.msg} />
    }
    const renderItem1 = ({ item }) => {
        return <MacroChat msg={item?.msg} />
    }
    const handleSetting = () => {
        setIsModalVisible(!isModalVisible)
    }
    const renderItem4 = ({ item }) => {
        return <Requests imgs={item?.img} btn name2='Block User' name='Reject User' />
    }


    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            
            

            scrollView={false}
            headerProps={headerProps}
        >
            <Searchbar
                placeholder='Search'
                onChangeText={onChangeSearch}
                placeholderTextColor={themes?.light?.colors?.grey}
                value={searchQuery}
                style={styles.search}
                icon={() => <FastImage source={icons.Search} style={styles.img} resizeMode='contain' />}
            />
            <ScrollView>
                <CustomView marginH-15 marginB-10>
                    <View style={styles.flats}>
                        <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem} />
                    </View>
                    <View style={styles.flats}>
                        <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem1} />
                    </View>
                    <View style={styles.flats}>
                        <FlashList estimatedItemSize={70} data={Message} renderItem={renderItem} />
                    </View>
                </CustomView>
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
                            <Text style={styles?.postName1}>User list</Text>
                            <View paddingH-15 style={styles.request}>
                                <FlashList data={dummyData} renderItem={renderItem4} estimatedItemSize={70} />
                            </View>
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
            </ScrollView>

        </Container >
    )
}

export default SingleChat

// const styles = StyleSheet.create({
//     search: {
//         flexDirection: 'row-reverse',
//         paddingRight: 20,
//         borderRadius: 10,
//         backgroundColor: themes['light'].colors.offWhite,
//         marginHorizontal: 15,
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     img: {
//         height: "50%",
//         width: "50%",
//     }
// })