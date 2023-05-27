import React, { useRef, memo, useEffect, useState } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import AuthStyle from "../../../../auth/Auth.style";
import { CButton, CTextfield } from "../../../../../uiComponents";
import { themes } from "../../../../../theme/colors";
import { icons } from "../../../../../assets/imgs";

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
  const name = useRef(null);
  const capacity = useRef(null);
  const location = useRef(null);
  const address = useRef(null);
  const description = useRef(null);





  return (
    <Formik
      innerRef={form}
      onSubmit={(values) => submit(values)}
      initialValues={{
        name: "",
        capacity: "",
        location: "",
        address: "",
        description: ""
      }}
      validationSchema={Validations}
    >
      {({ handleChange, values, handleSubmit, errors, resetForm }) => {
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
                  ref={name}
                  handleFocus={() => { setIsFocusedName(true) }}
                  handleBlur={() => { setIsFocusedName(false) }}
                  inputLabel='Title'
                  placeholder='Title'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  numberOfLines={1}
                  iconColor={isFocusedName ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.flashWhite}
                  bgColor={themes?.light?.colors?.black}
                  activeOutlineColor={themes['light'].colors.pink}
                  toggleSecure
                  values={values?.title}
                  onChangeText={handleChange('title')} 
                  error={errors?.title}
                />
                <CTextfield
                  ref={capacity}
                  handleFocus={() => { setIsFocusedEmail(true) }}
                  handleBlur={() => { setIsFocusedEmail(false) }}
                  inputLabel='Capacity'
                  placeholder='Capacity'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  iconColor={isFocusedEmail ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.flashWhite}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values?.capacity}
                  onChangeText={handleChange('email')}
                  error={errors?.capacity}
                />
                <CTextfield
                  ref={location}
                  handleFocus={() => { setIsFocusedPassBusiness(true) }}
                  handleBlur={() => { setIsFocusedPassBusiness(false) }}
                  inputLabel='Location'
                  placeholder='Location'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  iconColor={isFocusedBusiness ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.flashWhite}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values?.location}
                  onChangeText={handleChange('businessName')}
                  error={errors?.location}
                />
                <CTextfield
                  ref={address}
                  handleFocus={() => { setIsFocusedPhone(true) }}
                  handleBlur={() => { setIsFocusedPhone(false) }}
                  inputLabel='Address'
                  placeholder='Address'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={false}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={1}
                  iconColor={isFocusedPhone ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.flashWhite}
                  bgColor={themes?.light?.colors?.bgBlue}
                  toggleSecure
                  values={values?.address}
                  onChangeText={handleChange('phone')}
                  error={errors?.address}
                />
                <CTextfield
                  ref={description}
                  handleFocus={() => { setIsFocusedPhone(true) }}
                  handleBlur={() => { setIsFocusedPhone(false) }}
                  inputLabel='Description'
                  placeholder='Address'
                  placeholderTextColor={themes?.light?.colors?.grey}
                  mode={'outlined'}
                  multiLine={true}
                  activeOutlineColor={themes['light'].colors.pink}
                  numberOfLines={5}
                  iconColor={isFocusedPhone ? themes?.light?.colors?.red : themes?.light?.colors?.grey}
                  outlineColor={themes?.light?.colors?.flashWhite}
                  bgColor={themes?.light?.colors?.red}
                  toggleSecure
                  values={values?.description}
                  onChangeText={handleChange('phone')}
                  error={errors?.description}
                />

              </View>
              <CButton title='Submit for Verification' colorType='pink' onPress={() => handleSubmit()} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
export default memo(CForm);
