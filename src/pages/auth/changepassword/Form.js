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

  const dispatch = useDispatch();

  const continueWithoutLogin = () => {
    dispatch({
      type: Auth.LOGIN_USER_API,
      loading: false,
      user: null,
      isLoggedIn: true,
    });
  };
  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{
        phone: '',
      }}
      validationSchema={Validations}>
      {({ handleChange, values, handleSubmit, errors }) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardBody}>
                <CTextfield
                  ref={password}
                  secureTextEntry={true}
                  inputLabel='Password'
                  placeholder='Password'
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
                  values={values}
                  error={errors?.password}
                />
                <CTextfield
                  ref={password}
                  secureTextEntry={true}
                  inputLabel='Confirm Password'
                  placeholder='COnfirm Password'
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
                  values={values}
                  error={errors?.password}
                />

              </View>
              <CButton title='Reset Password' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
