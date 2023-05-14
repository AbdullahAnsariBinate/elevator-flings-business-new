import React, { useRef, memo, useEffect, useState } from 'react';
import { Formik } from 'formik';
import Validations from './Validations';
import { Pressable, View } from 'react-native';
import { CButton, CText, CTextfield } from '../../../uiComponents';
import AuthStyle from '../Auth.style';
import { useDispatch } from 'react-redux';
import Auth from '../../../store/constants/Auth.constant';
import { themes } from '../../../theme/colors';
import { icons } from '../../../assets/imgs';
function CForm(props) {
  const {
    submit,
    loading,
    selectedCountry,
    toggleCountryModal,
    phoneErr,
    handleForgot

  } = props;

  const form = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const dispatch = useDispatch();

  // const continueWithoutLogin = () => {
  //   dispatch({
  //     type: Auth.LOGIN_USER_API,
  //     loading: false,
  //     user: null,
  //     isLoggedIn: true,
  //   });
  // };
  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Validations}>
      {({ handleChange, values, handleSubmit, errors }) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardBody}>
                <CTextfield
                  ref={email}
                  secureTextEntry={false}
                  inputLabel='Email'
                  placeholder='email@example.com'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  numberOfLines={1}
                  icon={icons?.Email}
                  iconColor={themes?.light?.colors?.red}
                  outlineColor={themes?.light?.colors?.grey}
                  bgColor={themes?.light?.colors?.black}
                  activeOutlineColor={themes['light'].colors.pink}
                  toggleSecure
                  values={values.email}
                  onChangeText={handleChange('email')}
                  error={errors?.email}
                />
                <CTextfield
                  ref={password}
                  secureTextEntry={true}
                  inputLabel='Password'
                  placeholder='*********** '
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Lock}
                  iconColor={themes?.light?.colors?.red}
                  outlineColor={themes?.light?.colors?.grey}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values.password}
                  onChangeText={handleChange('password')}
                  error={errors?.password}
                />
                <View style={AuthStyle.forgotLink}>
                  <Pressable onPress={handleForgot}>
                    <CText style={AuthStyle.forgotLinkText}>Forgot Password?</CText>
                  </Pressable>
                </View>
              </View>
              <CButton title='Login' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
