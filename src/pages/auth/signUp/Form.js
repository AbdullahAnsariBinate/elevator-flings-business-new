import React, { useRef, memo, useEffect, useState } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import { CButton, CText, CTextfield } from "../../../uiComponents";
import AuthStyle from "../Auth.style";
import { themes } from "../../../theme/colors";
import { icons } from "../../../assets/imgs";

function CForm(props) {



  const { submit, selectedCountry, } = props;

  const form = useRef(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const businessName = useRef(null);




  return (
    <Formik
      innerRef={form}
      onSubmit={(values) => submit(values)}
      initialValues={{
        phone: "",
        password: "",
      }}
      validationSchema={Validations(selectedCountry)}
    >
      {({ handleChange, values, handleSubmit, errors }) => {
        console.log(
          "🚀 ~ file: Form.js ~ line 28 ~ CForm ~ values",
          values,
          errors
        );
        return (
          <View>
            <View style={AuthStyle.card}>
              <View style={AuthStyle.signupCard}>
                <CTextfield
                  ref={fullName}
                  secureTextEntry={false}
                  inputLabel='Full Name'
                  placeholder='John Smith'
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
                  values={values}
                  error={errors?.email}
                />
                <CTextfield
                  ref={email}
                  secureTextEntry={false}
                  inputLabel='Email'
                  placeholder='email@example.com'
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
                  error={errors?.email}
                />
                <CTextfield
                  ref={businessName}
                  secureTextEntry={false}
                  inputLabel='Business Name'
                  placeholder='Business Name'
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
                  error={errors?.email}
                />
                <CTextfield
                  ref={phone}
                  secureTextEntry={false}
                  inputLabel='Phone Number'
                  placeholder='Phone Number'
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
                  inputLabel='Password Confirm'
                  placeholder='Password Confirm'
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
              <CButton title='Login' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
