import React, { useEffect, useState } from "react";
import { CLoading } from "../uiComponents";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from '../routing/stacks/Home';
import SignIn from '../pages/auth/signIn/SignIn'

export const Stack = createStackNavigator();

function Auth({ initial }) {
    // const dispatch = useDispatch();

    const [initialRouteName, updateInitialRouteName] = useState(null);

    // const getAndCheck = async () => {
    //     let val = await getValueIntoAsyncStorage(WELCOME_SCREEN);
    //     if (val === "hide") {
    //         updateInitialRouteName(initial ? "welcome" : "sign_in");
    //     } else {
    //         updateInitialRouteName(initial ? "welcome" : "sign_in");
    //     }
    // };

    // useEffect(() => {
    //     (async () => {
    //         await getAndCheck();
    //     })();
    // }, []);

    /** Layout */
    const Layout = (initialRouteName) => {
        if (initialRouteName == null) {
            return (
                <Stack.Navigator
                initialRouteName={initialRouteName}
                screenOptions={{ headerShown: false }}
            >
                {/* <Stack.Screen name="welcome" component={Welcome} /> */}
                <Stack.Screen name="sign_in" component={SignIn} />
                {/* <Stack.Screen name="login" component={Signup} /> */}

             
            </Stack.Navigator>
            );
        } else {
            return <CLoading showAnimation={true} loading={false} />;
        }
    };

    return Layout(initialRouteName);
}

export default React.memo(Auth);
