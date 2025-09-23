import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/AboutUsPage.styles";

const AboutUsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Welcome to Drive Now Rentals, your trusted partner for all your mobility needs.
        We offer a wide range of vehicles — from compact cars for city driving to spacious SUVs for family adventures.
        Our goal is to make renting a car simple, convenient, and affordable. With flexible rental plans,
        24/7 customer support, and a commitment to safety and quality, we ensure your journey is smooth and enjoyable.
        At Drive Now Rentals, we put our customers first, because your satisfaction drives us forward.
      </Text>
    </View>
  );
};

export default AboutUsPage;
