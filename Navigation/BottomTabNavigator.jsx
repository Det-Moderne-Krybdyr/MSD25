import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import {View} from "react-native";
import AccountPage from "../pages/AccountPage";
import {House, User, MapPin, Map} from "lucide-react-native"
import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator";
import {NavigationContainer} from "@react-navigation/native";

const BottomNavigator = () => {
    let WIDTH = 25;
    let HEIGHT = 25;

    const BottomTabNavigator = createBottomTabNavigator();

    const tabBarListeners = ({navigation, route}) => ({
        tabPress: () => navigation.navigate(route.name),
    });

    return (
        <BottomTabNavigator.Navigator
            tabBar={props => (
                <View>
                    <BottomTabBar {...props} />
                </View>
            )}
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#767676',
                tabBarStyle:{
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    paddingTop: 10,
                    height: 65,
                },
                tabBarLabelStyle: {
                    fontFamily: "Arial",
                    fontSize: 11,
                },
            }}>
            <BottomTabNavigator.Screen
                options={{
                    tabBarShowLabel: true,
                    gestureEnabled: false,
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <MapPin size={30} color="black" />
                        ) : (
                            <MapPin size={30} color="gray" />
                        ),
                }}
                name="Map"
                listeners={tabBarListeners}
                component={MapPage}
            />
            <BottomTabNavigator.Screen
                options={{
                    tabBarShowLabel: true,
                    gestureEnabled: false,
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <House size={30} color="black" />
                        ) : (
                            <House size={30} color="gray" />
                        ),
                }}
                name="Home"
                listeners={tabBarListeners}
                component={HomePage}
            />
            <BottomTabNavigator.Screen
                options={{
                    tabBarShowLabel: true,
                    gestureEnabled: false,
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <User size={30} color="black" />
                        ) : (
                            <User size={30} color="gray" />
                        ),
                }}
                name="Profile"
                listeners={tabBarListeners}
                component={AccountPage}
            />

        </BottomTabNavigator.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <BottomNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator;