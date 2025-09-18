import * as React from 'react';
import {
    createStaticNavigation,
    NavigationContainer,
} from '@react-navigation/native';
import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation/BottomTabNavigator";






export default function App() {
    return <Navigation />;
}