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
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedBusiness, setIsFocusedPassBusiness] = useState(false);
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isFocusedCPass, setIsFocusedCPass] = useState(false);
  const [secure, setSecure] = useState(false)
  const [secureCPass, setSecureCPass] = useState(false)


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
                  handleFocus={() => { setIsFocusedName(true) }}
                  handleBlur={() => { setIsFocusedName(false) }}
                  inputLabel='Full Name'
                  placeholder='John Smith'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  numberOfLines={1}
                  icon={icons?.Users}
                  iconColor={isFocusedName ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
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
                <CTextfield
                  ref={businessName}
                  secureTextEntry={false}
                  handleFocus={() => { setIsFocusedPassBusiness(true) }}
                  handleBlur={() => { setIsFocusedPassBusiness(false) }}
                  inputLabel='Business Name'
                  placeholder='Business Name'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Business}
                  iconColor={isFocusedBusiness ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.grey}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values}
                  error={errors?.email}
                />
                <CTextfield
                  ref={phone}
                  secureTextEntry={false}
                  handleFocus={() => { setIsFocusedPhone(true) }}
                  handleBlur={() => { setIsFocusedPhone(false) }}
                  inputLabel='Phone Number'
                  placeholder='Phone Number'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  icon={icons?.Smartphone}
                  iconColor={isFocusedPhone ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.grey}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values}
                  error={errors?.password}
                />
                <CTextfield
                  ref={password}
                  secureTextEntry={secure}
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
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure={() => { setSecure(!secure) }}
                  supportPassword={true}
                  values={values}
                  error={errors?.password}
                />
                <CTextfield
                  ref={password}
                  secureTextEntry={secureCPass}
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
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure={() => { setSecureCPass(!secureCPass) }}
                  supportPassword={true}
                  values={values}
                  error={errors?.password}
                />

              </View>
              <CButton title='Sign Up' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
