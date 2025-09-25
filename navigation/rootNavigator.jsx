import {createStaticNavigation, NavigationContainer} from "@react-navigation/native";
import BottomNavigator from "./bottomTabNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "../pages/login/LoginPage";
import {Library} from "lucide-react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeStack from "./navigators/homeStackNavigator";
import {userIsSignedIn, userIsSignedOut} from "../services/loginService";

const RootStack = createNativeStackNavigator({
    screens: {
    },
    groups: {
        SignedIn: {
            if: userIsSignedIn,
            screens: {
                Home: BottomNavigator,
            }
        },
        SignedOut: {
            if: userIsSignedOut,
            screens: {
                Login: LoginPage,
            }
        }
    }
});

const Navigation = createStaticNavigation(RootStack)

const MainNavigator = () => {
  return (
    <Navigation/>
  );
};

export default MainNavigator;
