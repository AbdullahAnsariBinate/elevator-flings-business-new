import React, {useState} from 'react';

import {Modal, Text, View} from 'react-native';
import {Container, SafeAreaView} from '../../../containers';
import {themes} from '../../../theme/colors';
import AuthStyle from '../Auth.style';
import CForm from './Form';
import { ProgressiveImage } from '../../../uiComponents';
import { imgs } from '../../../assets/imgs';

function SignIn(props) {
  const [phoneError, setPhoneError] = useState('');
  const submit = () => {};

  const headerProps={
    hideBackButton:true
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
      <ProgressiveImage source={imgs?.Logo} style={{height:80, width:'100%'}} resizeMode='contain'/>

      {/* <CForm
        submit={submit}
        phoneErr={phoneError}
        onLoginPress={() => navigation.navigate('login')}
      /> */}
     
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.extraSmall
      }}>extraSmall</Text>
      <Text style={{
        fontFamily:themes?.font?.bold,
        fontSize:themes?.fontSize?.large
      }}>large</Text>
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.extraLarge
      }}>extraLarge</Text>
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.extraVSmall
      }}>extraVSmall</Text>
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.regular
      }}>regular</Text>
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.medium
      }}>medium</Text>
      <Text style={{
        fontFamily:themes?.font?.regular,
        fontSize:themes?.fontSize?.small
      }}>small</Text>
    </Container>
  );
}
export default SignIn;
