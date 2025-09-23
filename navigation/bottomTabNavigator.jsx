import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { House, User, MapPin } from "lucide-react-native";

import HomeStack from "./navigators/homeStackNavigator";
import MapStack from "./navigators/mapStackNavigator";
import ProfileStack from "./navigators/profileStackNavigator";

const tabs = [
  {
    Icon: MapPin,
    name: "Map",
    component: MapStack,
  },
  {
    Icon: House,
    name: "Home",
    component: HomeStack,
  },
  {
    Icon: User,
    name: "Profile",
    component: ProfileStack,
  },
];

const BottomNavigator = () => {
  const BottomTabNavigator = createBottomTabNavigator();

  const screen = ({ Icon, name, component }) => {
    return (
      <BottomTabNavigator.Screen
        options={{
          tabBarShowLabel: true,
          gestureEnabled: false,
          unmountOnBlur: true,
          headerShown: false,
          // 👇 color comes from screenOptions (active/inactive)
          tabBarIcon: ({ color }) => <Icon size={30} color={color} />,
        }}
        name={name}
        component={component}
      />
    );
  };

  return (
    <BottomTabNavigator.Navigator
      tabBar={(props) => (
        <View>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        tabBarActiveTintColor: "#a9cdeb",   // active light blue
        tabBarInactiveTintColor: "#ffffff", // inactive white
        tabBarStyle: {
          backgroundColor: "#181d45",       // dark blue background
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 8,
          height: 65,
        },
        tabBarLabelStyle: {
          fontFamily: "Arial",
          fontSize: 11,
        },
      }}
    >
      {tabs.map((args, index) => screen(args))}
    </BottomTabNavigator.Navigator>
  );
};

export default BottomNavigator;
