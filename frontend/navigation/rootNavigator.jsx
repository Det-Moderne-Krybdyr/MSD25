import {createStaticNavigation} from "@react-navigation/native";
import BottomNavigator from "./bottomTabNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginNavigator from "./navigators/loginNavigator";
import SplashScreen from "../pages/SplashScreen"
import * as React from "react"
import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, SignInContext, validateToken, signup, login, signOut} from "../services/authService";
import {Platform} from "react-native";

export async function saveInStorageAsync(key, value) {
    try {
        if (Platform.OS === 'web') {
            await AsyncStorage.setItem(key, value.toString());
        } else { // mobile
            await SecureStore.setItemAsync(key, value.toString());
        }
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

export async function getValueForAsync(key) {
    try {
        if (Platform.OS === 'web') {
            return await AsyncStorage.getItem(key)
        } else {
            return await SecureStore.getItemAsync(key);
        }
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

function useIsSignedIn() {
    return React.useContext(SignInContext);
}

function useIsSignedOut() {
    return !useIsSignedIn();
}

const MainNavigator = () => {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                        isLoading: false,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;
            let email;
            // if on mobile, just login and use hardcoded data
            if (Platform.OS !== 'web') {
                dispatch({type: "RESTORE_TOKEN", token: "example-token"})
                return
            }

            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                userToken = await getValueForAsync("user_token")
                email = await getValueForAsync("email")
                console.log(userToken)
                console.log(email)
            } catch (e) {
                // Restoring token failed
                dispatch({type: 'SIGN_OUT'})
                return
            }
            if (userToken === "" || email === "null") {
                dispatch({type: 'SIGN_OUT'})
                return
            }
            let validation = await validateToken(email, userToken)

            if (!validation) {
                dispatch({type: 'SIGN_OUT'})
                return
            }

            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {

                let token = await login(data);
                if (!token) return
                await saveInStorageAsync('user_token', token)
                await saveInStorageAsync('email', data.email)
                dispatch({ type: 'SIGN_IN', token: token });
            },
            signOut: async () => {
                let token = await getValueForAsync('user_token')
                let email = await getValueForAsync('email')
                console.log(token)
                console.log(email)
                await saveInStorageAsync('user_token', "");
                await saveInStorageAsync('email', "");
                dispatch({type: 'SIGN_OUT'})

                if (token === "" || email === "") return
                await signOut(email, token);
            },
            signUp: async (data) => {
                console.log("user" + JSON.stringify(data));
                let token = await signup(data);
                if (!token) return
                await saveInStorageAsync('user_token', token.toString())
                await saveInStorageAsync('email', data.email)
                dispatch({ type: 'SIGN_IN', token: token });
            },
        }),
        []
    );

    const RootStack = createNativeStackNavigator({
        screens: {
        },
        groups: {
            SignedIn: {
                if: useIsSignedIn,
                screens: {
                    Bottom: BottomNavigator,
                }
            },
            SignedOut: {
                if: useIsSignedOut,
                screens: {
                    Splash: LoginNavigator
                }
            }
        },
        screenOptions: {
            headerShown: false,
        }
    });

    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
    }

    const isSignedIn = state.userToken != null;

    const Navigation = createStaticNavigation(RootStack)

    return (
        <AuthContext.Provider value={authContext}>
            <SignInContext.Provider value={isSignedIn}>
                <Navigation/>
            </SignInContext.Provider>

        </AuthContext.Provider>
    );
};

export default MainNavigator;
