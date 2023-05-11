import React, { useEffect, useState } from "react";
import { CLoading } from "../uiComponents";
import { createStackNavigator } from "@react-navigation/stack";
import {SignIn, SignUp } from '../pages/auth'



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
                    <Stack.Screen name="signin" component={SignIn} />
                    <Stack.Screen name="signup" component={SignUp} />

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
