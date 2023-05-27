import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Picker, TouchableOpacity, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { styles } from './editevent.styles'
import ImagePicker from 'react-native-image-crop-picker'
import { CText } from '../../../../../uiComponents'
import { Container } from '../../../../../containers'
import { icons, imgs } from '../../../../../assets/imgs'
import CForm from './Form'

const EditEvent = (props) => {
    const [image, setImage] = useState(null)
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: true,
        headerLeft: false,
        headerTitle: 'Edit Event',
        headerRight: false
    };
    const handleLogin = React.useCallback(() => {
       
    }, [])
    const handleForgot = React.useCallback(() => {
    }, [])
    const submit = React.useCallback(() => {
    }, [])

    function handleSelectImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then((selectedImage) => {
                setImage(selectedImage.path)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (

        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={true}
            headerProps={headerProps}

        >
            <View center marginT-20 paddingH-15>
                <TouchableOpacity style={styles.imagePick} centerH centerV onPress={handleSelectImage}>
                    <FastImage source={icons?.UploadRed} style={styles.upload} resizeMode='contain' />
                    <CText style={styles.postDesp}>Upload Image</CText>
                </TouchableOpacity>
            </View>
            <View row spread paddingT-10 style={styles.allPost} width={'100%'} paddingH-24>
                <View bg-black br30>
                    <FastImage source={imgs?.PostBg1} style={styles.post} resizeMode='contain' />
                    <TouchableOpacity style={styles.iconBorder}>
                        <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View bg-black br30>
                    <FastImage source={imgs?.PostBg2} style={styles.post} resizeMode='contain' />
                    <TouchableOpacity style={styles.iconBorder}>
                        <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View bg-black br30>
                    <FastImage source={imgs?.EventPost} style={styles.post} resizeMode='contain' />
                    <TouchableOpacity style={styles.iconBorder}>
                        <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View bg-black br30>
                    <FastImage source={imgs?.EventPost2} style={styles.post} resizeMode='contain' />
                    <TouchableOpacity style={styles.iconBorder}>
                        <FastImage source={icons?.Cross} style={styles.cross} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
            <View paddingB-10  paddingH-25>
            <CForm
                submit={submit}
                onLoginPress={() => navigation.navigate('login')}
            />
            </View>

        </Container>

    )
}

export default EditEvent
