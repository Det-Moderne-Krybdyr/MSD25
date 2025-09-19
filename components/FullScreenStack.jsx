import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from "../styles/Styles";

const FullScreenStack = ({navigation, children}) => {
    useEffect(() => {
        // Hide the bottom tab bar when this screen is active
        navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
        return () => {
            // Restore the bottom tab bar when leaving this screen
            navigation.getParent()?.setOptions({
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    paddingTop: 10,
                    //height: Platform.OS === 'android' ? 65 : null,
                },
            });
        };
    }, [navigation])

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default FullScreenStack;