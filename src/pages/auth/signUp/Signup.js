import React, { useState } from "react";
import {Pressable, View} from 'react-native'
import { Container } from "../../../containers";
import CForm from "./Form";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../Auth.style";
import { CText } from "../../../uiComponents";
function SignUp(props) {
  const navigation = useNavigation();

  const submit = () => {

  }
  const handleSignup = () => {

  }
  const headerProps = {
    hideBackButton: true,
    headerTitle: 'Sign Up'
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
      <CForm
        submit={submit}
        // phoneErr={phoneError}
        onLoginPress={() => navigation.navigate('login')}
      />
      <View style={AuthStyle.bottomlinkSignup}>
        <CText style={AuthStyle.bottomlinkText}>Don't have an account? </CText>
        <Pressable onPress={handleSignup}>
          <CText style={AuthStyle.bottomlinkTextNav}>Register Now</CText>
        </Pressable>
      </View>
    </Container>
  );
}
export default SignUp;
