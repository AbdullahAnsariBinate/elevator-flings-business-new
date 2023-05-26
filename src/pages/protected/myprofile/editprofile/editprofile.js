import React from 'react'
import { ScrollView, Pressable } from 'react-native'
import { View as RNView } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import { Container } from '../../../../containers'
import { icons, imgs } from '../../../../assets/imgs'
import { styles } from './editprofile.styles'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import AuthStyle from '../../../auth/Auth.style'
import { useState } from 'react'
import { CText } from '../../../../uiComponents'
import ImageCropPicker from 'react-native-image-crop-picker'
import CForm from './Form'

const EditProfile = () => {
    const [image, setImage] = useState(null);
    const headerProps = {
        showCenterLogo: false,
        backButtonIcon: 'close',
        hideBackButton: true,
        headerLeft: false,
        headerTitle: 'Edit My Profile',
        headerRight: false
    };
    const submit = () => {

    }
    const handleSelectImage = () => {
        console.log('jello');
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(selectedImage => {
                setImage(selectedImage.path);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleLogin = React.useCallback(() => {

    }, [])
    const handleForgot = React.useCallback(() => {
    }, [])

    return (
        <Container
            bottomSpace
            edges={['left', 'right']}
            scrollView={false}
            headerProps={headerProps}
        >
            <RNView center>
                <RNView
                    center
                    width={responsiveHeight(16)}
                    style={AuthStyle.imagesContainer}>
                    <RNView
                        center
                        height={responsiveHeight(16)}
                        width={responsiveHeight(16)}
                        style={AuthStyle?.businessProfile}>
                        <FastImage
                            source={image == null ? icons?.NoPhoto : { uri: image }}
                            style={[
                                image == null
                                    ? { height: '50%', width: '50%' }
                                    : AuthStyle.uploadProImg,
                            ]}
                            resizeMode="cover"
                        />
                    </RNView>
                    <Pressable onPress={handleSelectImage}>
                        <RNView
                            center
                            height={responsiveHeight(4.5)}
                            width={responsiveHeight(4.5)}
                            style={AuthStyle.uploadIcon}>
                            <FastImage
                                source={icons.Upload}
                                style={AuthStyle.uploadIconImg}
                                resizeMode="contain"
                            />
                        </RNView>
                    </Pressable>
                </RNView>
            </RNView>

            <RNView center paddingV-15>
                <CText style={AuthStyle.heading}>Upload Business Logo</CText>
            </RNView>

            <CForm
                submit={submit}
                onLoginPress={() => navigation.navigate('login')}
            />
        </Container>


    )
}

export default EditProfile
