import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/BottomTabNavigator";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import RentACarPage from "./pages/RentACarPage";
import MapPage from "./pages/MapPage";
import RentalsPage from "./pages/RentalsPage";
import AboutUsPage from "./pages/AboutUsPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="RentACar" component={RentACarPage} />
                <Stack.Screen name="Map" component={MapPage} />
                <Stack.Screen name="Rentals" component={RentalsPage} />
                <Stack.Screen name="Account" component={AccountPage} />
                <Stack.Screen name="AboutUs" component={AboutUsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}