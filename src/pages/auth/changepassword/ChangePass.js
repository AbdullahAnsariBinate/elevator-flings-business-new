import React, { useState } from 'react';

import { Pressable,  View } from 'react-native';
import { Container } from '../../../containers';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { CText, ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';
import { useNavigation } from '@react-navigation/native';

function ChangePass(props) {
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
    hideBackButton: true,
    headerTitle: 'Reset Password'
  }
  const handleOtp = () => {
    navigation.navigate('signin')
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
        <CText style={AuthStyle.bottomlinkTextNav}>Login</CText>
        </Pressable>
      <CForm
        submit={submit}
        handleForgot={handleForgot}
        // phoneErr={phoneError}
        onLoginPress={() => navigation.navigate('login')}
      />
      
  
    </Container>
  );
}
export default ChangePass;
