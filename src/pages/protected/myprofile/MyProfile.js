import { Modal, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Container } from '../../../containers'
import { View } from 'react-native-ui-lib'
import { CButton, CText, Requests } from '../../../uiComponents'
import FastImage from 'react-native-fast-image'
import { icons, imgs } from '../../../assets/imgs'
import { Switch } from 'react-native-paper'
import { themes } from '../../../theme/colors'
import { styles } from './MyProfile.style'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../store/actions/Auth.action'
import { FlashList } from '@shopify/flash-list'
import { dummyData } from './dummy'

const MyProfile = () => {
    const [isEnabled, setIsEnabled] = React.useState(true)
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [isModalVisible2, setIsModalVisible2] = React.useState(false)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const reduxState = useSelector(({ auth, root, language }) => {
        return {
            loading: root
        };
    });
    console.log("🚀 ~ file: SignIn.js:31 ~ reduxState ~ reduxState:", reduxState?.loading)

    const handleVisible = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleVisible2 = () => {
        setIsModalVisible2(!isModalVisible2)
    }
    const renderItem = ({ item }) => {
        return <Requests imgs={item?.img} btn name2='Remove User' name='Unblock' />
    }
    const headerProps = {
        showCart: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: false,
        headerTitle: 'My Profile',
        icon2: icons?.Message,
        icon3: icons?.Edit,
        handleIcon2: () => handleMessage(),
        handleIcon3:() => handleEdit()
    };
    const handlePrivacy = React.useCallback(() => {
        navigation.navigate('privacypolicy')
    }, [])
    const handleTerm = React.useCallback(() => {
        navigation.navigate('termandcondition')
    }, [])
    const handleLogout = React.useCallback(() => {
        dispatch(userLogout())
    }, [])

    const handleMessage = React.useCallback(() => {
navigation.navigate('chatlist')
    }, [])
    const handleEdit = React.useCallback(() => {
        navigation.navigate('editprofile')

    }, [])
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState)
    }
    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}
            loading={false}


        >
            <View paddingH-15>
                <View style={styles.container}>
                    <View center>
                        <FastImage source={imgs.Profile3} style={styles.profile} resizeMode='contain' />
                        <CText style={styles.userName}>
                            John Smith
                        </CText>
                    </View>
                    <View row spread style={styles.bio}>
                        <CText style={styles.nameField}>
                            Business Name
                        </CText>
                        <CText style={styles.name}>
                            Lorem Ipsum
                        </CText>
                    </View>
                    <View row spread style={styles.bio}>
                        <CText style={styles.nameField} >
                            Email Address
                        </CText>
                        <CText style={styles.name}>
                            John@email.com
                        </CText>
                    </View>
                    <View row spread style={styles.bioLast}>
                        <CText style={styles.nameField}>
                            Phone Number
                        </CText>
                        <CText style={styles.name}>
                            +123-456-789
                        </CText>
                    </View>
                </View>
                <View>
                    <View row spread style={styles.notification} marginB-5 marginT-10>
                        <CText style={styles.btnText}>
                            Notifications
                        </CText>
                        <Switch
                            value={isEnabled}
                            onValueChange={toggleSwitch}
                            onColor={themes['light']?.colors?.pink}
                            offColor='#e84118'
                        />
                    </View>
                    <View paddingV-5>
                        <CButton
                            title='Block Profiles'
                            btnIcon={icons.RightArrow}
                            rightIcon
                            spread
                            large
                            center={false}
                            colorType={'black'}
                            onPress={handleVisible2}
                        />
                    </View>
                    <View paddingV-5>
                        <CButton
                            title='Term and Conditions'
                            btnIcon={icons.RightArrow}
                            rightIcon
                            spread
                            large
                            center={false}
                            colorType={'black'}
                            onPress={handleTerm}
                        />
                    </View>
                    <View paddingV-5>
                        <CButton
                            title='Privacy Policy'
                            btnIcon={icons.RightArrow}
                            rightIcon
                            spread
                            large
                            center={false}
                            colorType={'black'}
                            onPress={handlePrivacy}
                        />
                    </View>
                    <View paddingV-5>
                        <CButton
                            title='Delete Account'
                            btnIcon={icons.RightArrow}
                            spread
                            bg-red
                            colorType={'red'}
                            onPress={handleVisible}
                        />
                    </View>
                    <View paddingV-5>
                        <CButton
                            large
                            title='Logout'
                            btnIcon={icons.RightArrow}
                            spread
                            colorType={'pink'}
                            onPress={handleLogout}
                        />
                    </View>
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
                            Do you really want to delete your profile?
                        </CText>
                        <View row centerV marginT-20>
                            <View bg-flashWhite width={'100%'} br30 paddingV-5>
                                <TextInput
                                    placeholder='Enter Password'
                                    style={styles.pass}
                                    placeholderTextColor={themes['light']?.colors?.grey}
                                />
                            </View>
                        </View>
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={handleVisible}>
                            <CText style={styles.textStyle}>Submit</CText>
                        </Pressable>
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
            <Modal
                animationType='fade'
                transparent={true}
                visible={isModalVisible2}
                onRequestClose={() => {
                    setIsModalVisible2(!isModalVisible2)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CText style={styles?.postName}>
                            Block Profiles
                        </CText>
                        <View row width={'100%'} style={styles.request} paddingT-15>
                            <FlashList data={dummyData} renderItem={renderItem} estimatedItemSize={70} />
                        </View>
                        <View style={styles.cross}>
                            <Pressable
                                onPress={() => setIsModalVisible2(!isModalVisible2)}
                                style={styles.crossBtn}
                            >
                                <FastImage source={icons?.CrossRed} style={styles.image} resizeMode='contain' />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </Container>
    )
}

export default MyProfile
