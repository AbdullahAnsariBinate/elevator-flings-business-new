import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBar } from "../containers";

import {
    HomeStack,
    MyProfileStack

} from "./stacks";

const Tab = createBottomTabNavigator();

const Root = ({ initial }) => {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="MyProfile" component={MyProfileStack} />

        
        </Tab.Navigator>
    );
};

export default Root;
