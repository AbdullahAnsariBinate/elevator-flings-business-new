import React, { useState } from 'react';

import { Pressable, View } from 'react-native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';
import { useNavigation } from '@react-navigation/native';

function ForgotPass(props) {
  const navigation = useNavigation();
  const [phoneError, setPhoneError] = useState('');
  const submit = (values) => {
    console.log(values, 'dummy')
  };

  const handleSignup = () => {
    navigation.navigate('signup')
  }

  const headerProps = {
    hideBackButton: true,
    headerTitle: 'Forgot Password'
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
      <CForm
        submit={submit}
        onLoginPress={() => navigation.navigate('login')}
      />
      <View style={AuthStyle.bottomlink}>
        <CText style={AuthStyle.bottomlinkText}>Didn't receive the code? </CText>
        <Pressable onPress={handleSignup}>
          <CText style={AuthStyle.bottomlinkTextNav}>Resend</CText>
        </Pressable>
      </View>
    </Container>
  );
}
export default ForgotPass;
