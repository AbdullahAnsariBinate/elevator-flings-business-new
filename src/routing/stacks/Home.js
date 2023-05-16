import * as React from "react";
import { Home } from "../../pages/protected";
import { createStackNavigator } from "@react-navigation/stack";
import { EventDetails, PropertyDetail, PastEvents, PastEventDetails, ChatList, SingleChat } from "../../pages/protected/home";

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
            <Stack.Screen name="pastevent" component={PastEvents} />
            <Stack.Screen name="pasteventdetail" component={PastEventDetails} />
            <Stack.Screen name="chatlist" component={ChatList} />
            <Stack.Screen name="singlechat" component={SingleChat} />
        </Stack.Navigator>
    );
}
export default HomeStack;
