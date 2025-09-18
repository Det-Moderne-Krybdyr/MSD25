import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import {View} from "react-native";
import AccountPage from "../pages/AccountPage";
import {House, User, MapPin} from "lucide-react-native"

const tabs = [
    {
        Icon: MapPin,
        name: "Map",
        component: MapPage,
    },
    {
        Icon: House,
        name: "Home",
        component: HomePage,
    },
    {
        Icon: User,
        name: "Profile",
        component: AccountPage,
    },
]

const BottomNavigator = () => {

    const BottomTabNavigator = createBottomTabNavigator();

    const screen = ({Icon, name, component}) => {
        return  <BottomTabNavigator.Screen
            options={{
                tabBarShowLabel: true,
                gestureEnabled: false,
                unmountOnBlur: true,
                headerShown: false,
                tabBarIcon: ({focused}) =>
                {
                    let color = focused ? "black" : "gray"
                    return (
                        <Icon size={30} color={color}/>
                    )
                },
            }}
            name={name}
            component={component}
        />
    }

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
                    borderTopWidth: 1,
                    elevation: 0,
                    paddingTop: 10,
                    height: 65,
                    borderTopColor: '#eee',
                },
                tabBarLabelStyle: {
                    fontFamily: "Arial",
                    fontSize: 11,
                },
            }}>
            {tabs.map((args, index) => screen(args))}

        </BottomTabNavigator.Navigator>
    );
};



export default BottomNavigator;