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
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isFocusedCPass, setIsFocusedCPass] = useState(false);
  const [secure, setSecure] = useState(false)
  const [secureCPass, setSecureCPass] = useState(false)


  const form = useRef(null);
  const password = useRef(null);
  const cpass = useRef(null);


  // const dispatch = useDispatch();

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
        password: '',
        cpass: ''
      }}
      validationSchema={Validations}>
      {({ handleChange, values, handleSubmit, errors }) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardBody}>
                <CTextfield
                  ref={password}
                  secureTextEntry={!secure}
                  handleFocus={() => { setIsFocusedPass(true) }}
                  handleBlur={() => { setIsFocusedPass(false) }}
                  inputLabel='Password'
                  placeholder='Password'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Lock}
                  iconColor={isFocusedPass ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.grey}
                  toggleSecure={() => { setSecure(!secure) }}
                  supportPassword={true}
                  values={values?.password}
                  onChangeText={handleChange('password')}
                  error={errors?.password}
                />
                <CTextfield
                  ref={cpass}
                  secureTextEntry={!secureCPass}
                  handleFocus={() => { setIsFocusedCPass(true) }}
                  handleBlur={() => { setIsFocusedCPass(false) }}
                  inputLabel='Password Confirm'
                  placeholder='Password Confirm'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Lock}
                  iconColor={isFocusedCPass ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.grey}
                  toggleSecure={() => { setSecureCPass(!secureCPass) }}
                  supportPassword={true}
                  values={values.cpass}
                  onChangeText={handleChange('cpass')}
                  error={errors?.cpass}
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
