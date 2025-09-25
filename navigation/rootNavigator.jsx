import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./bottomTabNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "../pages/login/LoginPage";
import {Library} from "lucide-react-native";

const Stack = createStackNavigator();

const LoginNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Login"} component={LoginPage} />
            <Stack.Screen name={"HomeScreen"} component={BottomNavigator} />

        </Stack.Navigator>
        )
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
