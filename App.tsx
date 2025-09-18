import * as React from 'react';
import MainNavigator from "./navigation/rootNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import styles from "./styles/Styles";

export default function App() {
    return (
        <SafeAreaProvider style={styles.AndroidSafeArea}>
            <MainNavigator />
        </SafeAreaProvider>
    )
}