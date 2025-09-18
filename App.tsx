import * as React from 'react';
import Navigation from "./Navigation/BottomTabNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import {SafeAreaProviderCompat} from "@react-navigation/elements";

export default function App() {
    return (
        <SafeAreaProviderCompat>
            <BottomTabNavigator />
        </SafeAreaProviderCompat>
    )
}