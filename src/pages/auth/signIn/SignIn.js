import React, { useCallback, useState, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';

const SignIn = () => {
  const navigation = useNavigation();
  const [phoneError, setPhoneError] = useState('');

  const handleSignup = useCallback(() => {
    navigation.navigate('signup');
  }, [navigation]);

  const handleForgot = useCallback(() => {
    navigation.navigate('forgotpass');
  }, [navigation]);

  const handleOtp = useCallback(() => {
    navigation.navigate('otpverify');
  }, [navigation]);

  const handleHome = useCallback(() => {
    navigation.navigate('Home', { screen: 'home' });
  }, [navigation]);

  const headerProps = useMemo(() => ({
    hideBackButton: false,
    headerTitle: 'Login',
  }), []);

  const submit = useCallback((values) => {
    console.log('formikkk', values)
    // handle form submission
  }, []);

  return (
    <Container
      showPattern={false}
      scrollView
      loading={false}
      scrollViewProps={{ contentContainerStyle: AuthStyle.container }}
      headerProps={headerProps}
    >
      <View style={AuthStyle.logoView}>
        <ProgressiveImage source={imgs?.Logo} style={AuthStyle.logo} resizeMode="contain" />
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
};

export default SignIn;
