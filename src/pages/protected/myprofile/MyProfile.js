import { StyleSheet, Text, } from 'react-native'
import React from 'react'
import { Container } from '../../../containers'
import { View } from 'react-native-ui-lib'
import { CButton, CText } from '../../../uiComponents'
import FastImage from 'react-native-fast-image'
import { icons, imgs } from '../../../assets/imgs'
import { Switch } from 'react-native-paper'
import { themes } from '../../../theme/colors'
import { styles } from './MyProfile.style'

const MyProfile = () => {
    const [isEnabled, setIsEnabled] = React.useState(true)
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [isModalVisible2, setIsModalVisible2] = React.useState(false)
    const handleVisible = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleVisible2 = () => {
        setIsModalVisible2(!isModalVisible2)
    }
    const headerProps = {
        showCart: false,
        backButtonIcon: 'close',
        hideBackButton: false,
        headerLeft: false,
        headerTitle: 'My Profile',
    };
    const handlePrivacy = React.useCallback(() => {

    }, [])
    const handleTerm = React.useCallback(() => {

    }, [])
    const handleLogout = React.useCallback(() => {

    }, [])

    const handleMessage = React.useCallback(() => {

    }, [])
    const handleEdit = React.useCallback(() => {

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
        </Container>
    )
}

export default MyProfile
