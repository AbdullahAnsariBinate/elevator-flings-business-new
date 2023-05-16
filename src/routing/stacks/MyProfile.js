import * as React from "react";
import { MyProfile } from "../../pages/protected";
import { createStackNavigator } from "@react-navigation/stack";
import { PrivacyPolicy, TermAndCondition } from "../../pages/protected/myprofile";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function MyProfileStack() {
    return (
        <Stack.Navigator initialRouteName="myprofile" screenOptions={StackScreenOptions}>
            <Stack.Screen name="myprofile" component={MyProfile} />
            <Stack.Screen name="termandcondition" component={TermAndCondition} />
            <Stack.Screen name="privacypolicy" component={PrivacyPolicy} />
        </Stack.Navigator>
    );
}
export default MyProfileStack;
