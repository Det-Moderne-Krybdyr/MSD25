import ProfilePage from "../../pages/ProfilePage";
import EditProfilePage from "../../pages/EditProfilePage";
import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/login/SignUpPage";
import {createStackNavigator} from "@react-navigation/stack";

const pages = [
    { name: "Login", component: LoginPage },
    { name: "SignUp", component: SignUpPage },
];

const Stack = createStackNavigator();

export default function LoginNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {pages.map((page) => (
                <Stack.Screen
                    key={page.name}
                    name={page.name}
                    component={page.component}
                />
            ))}
        </Stack.Navigator>
    );
}

