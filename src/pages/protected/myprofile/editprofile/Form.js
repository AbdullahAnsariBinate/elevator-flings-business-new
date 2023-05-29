import React, { useRef, memo, useEffect, useState } from "react";
import { Formik } from "formik";
import Validations from "./Validations";
import { View } from "react-native";
import AuthStyle from "../../../auth/Auth.style";
import { themes } from "../../../../theme/colors";
import { CButton, CTextfield } from "../../../../uiComponents";
import { icons } from "../../../../assets/imgs";
import { styles } from "./editprofile.styles";

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
  const cpass = useRef(null);





  return (
    <Formik
      innerRef={form}
      onSubmit={(values) => submit(values)}
      initialValues={{
        fullName: "",
        email: "",
        businessName: "",
        phone: "",
        password: "",
        cpass: ""
      }}
      validationSchema={Validations(selectedCountry)}
    >
      {({ handleChange, values, handleSubmit, errors, resetForm }) => {
        console.log(
          "🚀 ~ file: Form.js ~ line 28 ~ CForm ~ values",
          values,
          errors
        );
        return (
          <View>
            <View style={styles.editform}>
              <View style={AuthStyle.signupCard}>
                
                <CTextfield
                  ref={fullName}
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
                  values={values?.fullName}
                  onChangeText={handleChange('fullName')}
                  error={errors?.fullName}
                />
                <CTextfield
                  ref={email}
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
                  values={values?.email}
                  onChangeText={handleChange('email')}
                  error={errors?.email}
                />
                <CTextfield
                  ref={businessName}
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
                  values={values?.businessName}
                  onChangeText={handleChange('businessName')}
                  error={errors?.businessName}
                />
                <CTextfield
                  ref={phone}
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
                  values={values?.phone}
                  onChangeText={handleChange('phone')}
                  error={errors?.phone}
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
