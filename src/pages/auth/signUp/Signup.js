import React, { useState } from "react";
import { Pressable, View } from 'react-native'
import { Container } from "../../../containers";
import CForm from "./Form";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../Auth.style";
import { CText } from "../../../uiComponents";
import FastImage from "react-native-fast-image";
import { icons, imgs } from '../../../assets/imgs'
import { View as RNView } from "react-native-ui-lib";
import { responsiveHeight } from "react-native-responsive-dimensions";
function SignUp(props) {
  const navigation = useNavigation();

  const submit = () => {

  }
  const handleSignup = () => {

  }
  const headerProps = {
    hideBackButton: true,
    headerTitle: 'Sign Up',
    
  }

  return (
    <Container
      backgroundColor={'red'}
      showPattern={false}
      scrollView={true}
      loading={false}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}
      headerProps={headerProps}
    >

      <RNView center>
        <RNView center width={responsiveHeight(20)} style={AuthStyle.imagesContainer}>
          <RNView center height={responsiveHeight(20)} width={responsiveHeight(20)} >
            <FastImage
              source={imgs.UploadImg}
              style={AuthStyle.uploadProImg}
              resizeMode='contain'
            />
          </RNView>
          <RNView center height={responsiveHeight(4.5)} width={responsiveHeight(4.5)} style={AuthStyle.uploadIcon}>
            <FastImage source={icons.Upload} style={AuthStyle.uploadIconImg} resizeMode='contain' />
          </RNView>
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
        <CText style={AuthStyle.bottomlinkText}>Already have an account? </CText>
        <Pressable onPress={handleSignup}>
          <CText style={AuthStyle.bottomlinkTextNav}>Login</CText>
        </Pressable>
      </View>
    </Container>
  );
}
export default SignUp;
