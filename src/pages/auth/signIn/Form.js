import React, {useRef, memo, useEffect, useState} from 'react';
import {Formik} from 'formik';
import Validations from './Validations';
import {View} from 'react-native';
import {CButton, CInput, CText, CTextfield} from '../../../uiComponents';
import AuthStyle from '../Auth.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Auth from '../../../store/constants/Auth.constant';
function CForm(props) {
  const {
    submit,
    loading,
    selectedCountry,
    toggleCountryModal,
    phoneErr,
    onLoginPress,
    onGooglePress,
    onFacebookPress,
  } = props;

  const form = useRef(null);
  const phone = useRef(null);

  const dispatch = useDispatch();

  const continueWithoutLogin = () => {
    dispatch({
      type: Auth.LOGIN_USER_API,
      loading: false,
      user: null,
      isLoggedIn: true,
    });
  };
  const reduxState = useSelector(({language}) => {
    return {
      language: language?.language?.lan,
    };
  });

  const languageTrans = reduxState.language;
  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{
        phone: '',
      }}
      validationSchema={Validations(selectedCountry)}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.cardBody}>
                <CInput
                  ref={phone}
                  type="view"
                  selectedCountry={selectedCountry}
                  onPress={() => toggleCountryModal()}
                  keyboardType={'numeric'}
                  inputLabel={'phone no'}
                  placeholder={'000-000-0000'}
                  value={values?.phone}
                  onChangeText={val => {
                    let phone = val;
                    // let reg = /^0+/gi;
                    if (phone.match(reg)) {
                      phone = phone.replace(reg, '');
                    }
                    handleChange('phone')(phone);
                  }}
                  error={errors.phone || phoneErr}
                  returnKeyType="next"
                  onSubmitEditing={() => handleSubmit()}
                />
              <CTextfield />
              <CTextfield />
              <CTextfield />
              <CTextfield />

              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
