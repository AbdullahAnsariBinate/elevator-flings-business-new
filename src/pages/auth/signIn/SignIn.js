import React, { useState } from 'react';

import { Pressable, View } from 'react-native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';
import { useNavigation } from '@react-navigation/native';

function SignIn(props) {
  const navigation = useNavigation();
  const [phoneError, setPhoneError] = useState('');
  const submit = () => { };

  const handleSignup = () => {
    navigation.navigate('signup')
  }
  const handleForgot = () => {
    navigation.navigate('forgotpass')
  }
  const headerProps = {
    hideBackButton: false,
    headerTitle: 'Login'
  }
  const handleOtp = () => {
    navigation.navigate('otpverify')
  }
  const handleHome = () => {
    navigation.navigate('Home', {
      screen: 'home',
    });
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
      <View style={AuthStyle.logoView}>
        <ProgressiveImage source={imgs?.Logo} style={AuthStyle.logo} resizeMode='contain' />
      </View>
      <Pressable onPress={handleOtp}>
        <CText style={AuthStyle.bottomlinkTextNav}>Otp</CText>
      </Pressable>
      <Pressable onPress={handleHome}>
        <CText style={AuthStyle.bottomlinkTextNav}>Home</CText>
      </Pressable>
      <CForm
        submit={submit}
        handleForgot={handleForgot}
        // phoneErr={phoneError}
        onLoginPress={() => navigation.navigate('login')}
      />
      <View style={AuthStyle.bottomlink}>
        <CText style={AuthStyle.bottomlinkText}>Don't have an account? </CText>
        <Pressable onPress={handleSignup}>
          <CText style={AuthStyle.bottomlinkTextNav}>Register Now</CText>
        </Pressable>

      </View>

    </Container>
  );
}
export default SignIn;
