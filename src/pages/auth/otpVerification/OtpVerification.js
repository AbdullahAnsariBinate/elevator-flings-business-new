import React from "react";
import { Container } from "../../../containers";
import { useSelector, useDispatch } from "react-redux";
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import events from "../../../utils/events";
import { useNavigation } from "@react-navigation/native";
import { sendOtp, verifyOtp } from "../../../store/actions/Auth.action";
import ApiSauce from '../../../utils/network'
import { SEND_CODE, VERIFY_CODE } from "../../../config/webservices";
import Auth from "../../../store/constants/Auth.constant";
import { Pressable } from "react-native";
import { CText } from "../../../uiComponents";
function OtpVerification({ route }) {
    const { phone } = route?.params || {};


    const navigation = useNavigation();



    const submit = async (values) => {
        console.log("values", values);
        // const payload = {
        //     local_storage_phone: phone,
        //     verification: values.otp,
        // };
        // try {
        //     const resp = await ApiSauce.post(VERIFY_CODE, payload)
        //     navigation.navigate("user_information", {
        //         phone: phone
        //     })
        //     // dispatch({
        //     //             type: Auth.LOGIN_USER_API,
        //     //             loading: false,
        //     //             user: response?.data
        //     //             isLoggedIn: true,
        //     //         });
        //     console.log('respresprespresprespresprespresprespresp', resp)


        // } catch (error) {
        //     alert(error.message.response);

        //     // dispatch({
        //     //     type: Auth.LOGIN_USER_API,
        //     //     loading: false,
        //     //     // user: response?.data?.data?.data,
        //     //     isLoggedIn: true,
        //     // });
        //     console.log('errorerrorerrorerror', error)

        // }
        // dispatch(verifyOtp(payload)).then((response) => {
        //     console.log(response);
        //     // if (response?.response.data?.success) {
        //     //     navigation.navigate("user_information", { phone });
        //     // }
        // });
        // navigation.navigate("user_information", { phone });
    };

    const resendOtp = () => {
        events.emit("restartOTPTimer", {});
    };

    const headerProps = {
        hideBackButton: true,
        headerTitle: 'Otp Verification'

    };
    const handleResetPw = () => {
        navigation.navigate('changepass')
    }

    return (
        <Container
            backgroundColor={'red'}
            showPattern={false}
            scrollView={true}
            loading={false}
            scrollViewProps={{
                contentContainerStyle: AuthStyle.container,
            }}
            headerProps={headerProps}
        >
            <Pressable onPress={handleResetPw}>
                <CText style={AuthStyle.bottomlinkTextNav}>Reset Password</CText>
            </Pressable>
            <CForm
                submit={submit}
                resendOtp={resendOtp}
            // loading={reduxState?.loading}
            />
        </Container>
    );
}
export default OtpVerification;
