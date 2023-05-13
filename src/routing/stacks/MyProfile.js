import * as React from "react";
import {MyProfile} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function MyProfileStack() {
    return (
        <Stack.Navigator initialRouteName="myprofile" screenOptions={StackScreenOptions}>
            <Stack.Screen name="myprofile" component={MyProfile} />
        </Stack.Navigator>
    );
}
export default MyProfileStack;
