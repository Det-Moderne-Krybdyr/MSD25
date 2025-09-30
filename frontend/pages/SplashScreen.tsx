import styles from "../styles/AboutUsPage.styles";
import {Image, Text, View} from "react-native";
import React from "react";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />
        </View>
    );
}

export default SplashScreen;