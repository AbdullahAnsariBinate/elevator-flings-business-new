import React, { useState } from 'react';

import { Pressable, View } from 'react-native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { forgotpassword } from '../../../store/actions/Auth.action';

function ForgotPass(props) {
  const navigation = useNavigation();
  const [phoneError, setPhoneError] = useState('');
  const dispatch = useDispatch();

  const headerProps = {
    hideBackButton: true,
    headerTitle: 'Forgot Password',
    headerRight: false
  }


  const reduxState = useSelector(({ auth }) => {
    return {
      auth: auth?.route,
      otp:auth?.otp,
      loader:auth?.formLoading
    }
  })
  console.log("🚀 ~ file: ForgotPass.js:26 ~ ForgotPass ~ reduxState:", reduxState?.loader)
  const submit = (values) => {
    console.log(values, 'dummy')
    let payload = {
      email: values?.email
    }
    dispatch(forgotpassword(payload))
    console.log(dispatch(forgotpassword(payload)), 'dispatch')
    {
      reduxState?.auth == true ? navigation.navigate('otpverify') : null
    }
  };

  const handleSignup = () => {
    navigation.navigate('signup')
  }


  return (
    <Container
      backgroundColor={'red'}
      showPattern={false}
      scrollView={true}
      loading={reduxState?.loader}
      scrollViewProps={{
        contentContainerStyle: AuthStyle.container,
      }}
      headerProps={headerProps}
    >
      <View style={AuthStyle.logoView}>
        <ProgressiveImage source={imgs?.Logo} style={AuthStyle.logo} resizeMode='contain' />
      </View>
      <CForm
        submit={submit}
        onLoginPress={() => navigation.navigate('login')}
      />
      {/* <View style={AuthStyle.bottomlink}>
        <CText style={AuthStyle.bottomlinkText}>Didn't receive the code? </CText>
        <Pressable onPress={handleSignup}>
          <CText style={AuthStyle.bottomlinkTextNav}>Resend</CText>
        </Pressable>
      </View> */}
    </Container>
  );
}
export default ForgotPass;
