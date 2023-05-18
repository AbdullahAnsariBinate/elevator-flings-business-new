import React, { useRef, memo, useEffect, useState } from 'react';
import { Formik } from 'formik';
import Validations from './Validations';
import { View } from 'react-native';
import { CButton, CText, CTextfield } from '../../../uiComponents';
import AuthStyle from '../Auth.style';
import { useDispatch } from 'react-redux';
import Auth from '../../../store/constants/Auth.constant';
import { themes } from '../../../theme/colors';
import { icons } from '../../../assets/imgs';
function CForm(props) {
  const {
    // submit,
    loading,
    selectedCountry,
    toggleCountryModal,
    phoneErr,

  } = props;
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  const form = React.useRef(null);
  const email = React.useRef(null);

  const dispatch = useDispatch();
  const submit = (values) => {
   console.log(values, 'jjjjjj')
  };

  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{
        email: '',
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
                  handleFocus={() => { setIsFocusedEmail(true) }}
                  handleBlur={() => { setIsFocusedEmail(false) }}
                  inputLabel='Email'
                  placeholder='email@example.com'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Email}
                  iconColor={isFocusedEmail ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.grey}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values}
                  error={errors?.email}
                />
              </View>
              <CButton title='Submit' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
