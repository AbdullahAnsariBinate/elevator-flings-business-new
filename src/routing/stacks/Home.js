import * as React from "react";
import {Home} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";
import { EventDetails, PropertyDetail } from "../../pages/protected/home";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="propertydetail" component={PropertyDetail} />
            <Stack.Screen name="eventdetails" component={EventDetails} />


            
        </Stack.Navigator>
    );
}
export default HomeStack;
6