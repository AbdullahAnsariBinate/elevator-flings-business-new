import React, { useState } from "react";
import { Container } from "../../../containers";
import { useSelector, useDispatch } from "react-redux";
import AuthStyle from "../Auth.style";
import CForm from "./Form";
import events from "../../../utils/events";
import { useNavigation } from "@react-navigation/native";
import { sendOtp, verifyOtp } from "../../../store/actions/Auth.action";
import Toast from "react-native-toast-message";

import { SEND_CODE, VERIFY_CODE } from "../../../config/webservices";
import Auth from "../../../store/constants/Auth.constant";
import { Platform, Pressable } from "react-native";
import { CText, ProgressiveImage } from "../../../uiComponents";
import { imgs } from "../../../assets/imgs";
import { View } from "react-native-ui-lib";
function OtpVerification({ route }) {
    const [loader, setLoader] = useState(false);
    // const { otp } = route?.params || {};
    // console.log("🚀 ~ file: OtpVerification.js:18 ~ OtpVerification ~ otp:", otp)


    const navigation = useNavigation();
    const reduxState = useSelector(({ auth }) => {
        return {
            otp: auth?.otp,
            email: auth?.email
        }
    })
    console.log("🚀 ~ file: OtpVerification.js:28 ~ reduxState ~ reduxState:", reduxState?.email)





    const submit =  (values) => {
        console.log("🚀 ~ file: OtpVerification.js:25 ~ submit ~ values:", values)
        setLoader(true)
        // values?.otp == otp.toString() ? alert("t"):
        if (values?.otp == reduxState?.otp) {
            setLoader(false)
            navigation.navigate('changepass')

        }else{
            setLoader(false)
        }
        setLoader(false)

    };
    // 

    const resendOtp = () => {
        events.emit("restartOTPTimer", {});
    };

    const headerProps = {
        hideBackButton: true,
        headerTitle: 'Otp Verification',
        headerRight: false

    };
    const handleResetPw = () => {
        navigation.navigate('changepass')
    }

    return (
        <Container
            backgroundColor={'red'}
            showPattern={false}
            scrollView={true}
            loading={loader}
            scrollViewProps={{
                contentContainerStyle: AuthStyle.container,
            }}
            headerProps={headerProps}
        >
            <View style={AuthStyle.logoView}>
                <ProgressiveImage source={imgs?.Logo} style={AuthStyle.logo} resizeMode="contain" />
            </View>
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
