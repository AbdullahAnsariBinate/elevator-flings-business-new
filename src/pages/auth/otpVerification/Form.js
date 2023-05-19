import React, { useRef, memo } from 'react';
import { Formik } from 'formik';
import Validations from './Validations';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CButton, CInput, CText, CountDownTimer } from '../../../uiComponents';
import AuthStyle from '../Auth.style';
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import { themes } from "../../../theme/colors";
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import OtpInputs from 'react-native-otp-inputs'
function CForm(props) {




    const { submit, loading, resendOtp } = props;

    const form = useRef(null);
    const otp = useRef(null);



    return (
        <Formik
            innerRef={form}
            onSubmit={(values) => submit(values)}
            initialValues={{
                otp: ''
            }}
            validationSchema={Validations}
        >
            {({ handleChange, values, handleSubmit, errors, setFieldValue }) => {
                return (
                    <View>
                        <View style={[AuthStyle.card, { marginTop: 20 }]}>
                            <View style={AuthStyle.cardHeader}>
                                {/* <CText style={AuthStyle.cardHeaderTitle}>
                                    {t("Verification")}
                                </CText>
                                <CText style={AuthStyle.cardHeaderSubTitle}>
                                    {t('Digit_PIN')}
                                </CText> */}
                            </View>

                            <View style={AuthStyle.cardBody}>

                                <View style={AuthStyle.otpContainer}>
                                    <OtpInputs
                                        autofillFromClipboard
                                        style={styles.otpStyles}
                                        inputStyles={styles.inputStyles}
                                        inputContainerStyles={styles.inputContainer}
                                        // value={values?.otp}
                                        handleChange={(otp) => console.log('hhdhdhdh',otp)}
                                        numberOfInputs={6}
                                        placeholder='0'
                                    />
                                    {errors.otp ? <CText style={GlobalStyle.errorTextStyle}>
                                        {errors.otp}
                                    </CText> : null}
                                </View>




                                <CButton title='Login' colorType='pink' onPress={() => handleSubmit()} />
                                {/* <CountDownTimer text={'Request a new code in'} initialValue={30}>
                                    <View style={AuthStyle.linkButtonContainer}>
                                        <CText style={AuthStyle.linkButtonText}>Don't receive OTP code</CText>
                                        <TouchableOpacity style={AuthStyle.linkButtonWithIcon} onPress={resendOtp}>
                                            <CText style={AuthStyle.linkButtonOtherText}>Resend</CText>
                                        </TouchableOpacity>
                                    </View>
                                </CountDownTimer> */}

                            </View>

                        </View>

                    </View>
                );
            }}
        </Formik>
    );
}
export default memo(CForm);

const styles = StyleSheet.create({
    otpStyles: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputStyles: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(12),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 2,
        fontSize: 20,
        color: themes['light'].colors.black,
        borderColor: themes['light'].colors.pink,
        borderWidth: 1,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        height: 50,
        width: 50,
    },
})
