import React, { useState } from 'react';

import { Pressable,  View } from 'react-native';
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

  const headerProps = {
    hideBackButton: false,
    headerTitle: 'Login'
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
