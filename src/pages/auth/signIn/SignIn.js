import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';
import { login } from '../../../store/actions/Auth.action';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [phoneError, setPhoneError] = useState('');
  const headerProps = useMemo(
    () => ({
      hideBackButton: false,
      headerTitle: 'Login',
      headerRight: false,
    }),
    [],
  );

  const getRedux = () => {

    var Loading = useSelector((state) => state?.auth?.loginLoading)
    console.log("🚀 ~ file: SignIn.js:31 ~ todo ~ todo:", Loading)
  }
  getRedux()



  const handleSignup = useCallback(() => {
    navigation.navigate('signup');
  }, [navigation]);

  const handleForgot = useCallback(() => {
    navigation.navigate('forgotpass');
  }, [navigation]);

  const handleOtp = useCallback(() => {
    navigation.navigate('otpverify');
  }, [navigation]);

  const submit = useCallback(values => {
    console.log('form Values', values);
    let loginObject = {
      email: values.email,
      password: values.password,
      strategy: 'local',
    };
    console.log('before call login');
    dispatch(login(loginObject));
  }, []);

  return (
    <Container
      showPattern={false}
      scrollView
      loading={Loading}
      scrollViewProps={{ contentContainerStyle: AuthStyle.container }}
      headerProps={headerProps}>
      <View style={AuthStyle.logoView}>
        <ProgressiveImage
          source={imgs?.Logo}
          style={AuthStyle.logo}
          resizeMode="contain"
        />
      </View>
      <Pressable onPress={handleOtp}>
        <CText style={AuthStyle.bottomlinkTextNav}>Otp</CText>
      </Pressable>
      <Pressable>
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
        <Pressable onPress={handleSignup} style={AuthStyle.bottomlinkTextNav}>
          <CText style={AuthStyle.bottomlinkTextNav}>Register Now</CText>
        </Pressable>
      </View>
    </Container>
  );
};

export default SignIn;
