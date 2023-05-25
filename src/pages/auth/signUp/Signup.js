import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Container } from '../../../containers';
import CForm from './Form';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import AuthStyle from '../Auth.style';
import { CText } from '../../../uiComponents';
import FastImage from 'react-native-fast-image';
import { icons, imgs } from '../../../assets/imgs';
import { View as RNView, TouchableOpacity } from 'react-native-ui-lib';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useCallback } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import { themes } from '../../../theme/colors';
import { signUp } from '../../../store/actions/Auth.action';
import { useDispatch } from 'react-redux';

function SignUp(props) {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const submit = useCallback(values => {
    console.log('signup', values);
    let payload = {
      email: values?.email,
      password: values?.password,
      strategy: 'abc123',
      name: values?.fullName,
      business_name: values?.businessName,
      profile_image: 'abc123.png'
    }
    dispatch(signUp(payload));
  }, []);
  const handleSignup = useCallback(() => {
    navigation.navigate('signin');
  }, []);
  const headerProps = {
    hideBackButton: true,
    headerTitle: 'Sign Up',
    headerRight: false,
  };
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


  return (
    <Container
      backgroundColor={'red'}
      showPattern={false}
      scrollView={true}
      loading={false}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}
      headerProps={headerProps}>
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
      <View style={AuthStyle.bottomlinkSignup}>
        <CText style={AuthStyle.bottomlinkText}>
          Already have an account?{' '}
        </CText>
        <Pressable onPress={handleSignup} style={AuthStyle.bottomBtn}>
          <CText style={AuthStyle.bottomlinkTextNav}>Login</CText>
        </Pressable>
      </View>
    </Container>
  );
}
export default SignUp;
 