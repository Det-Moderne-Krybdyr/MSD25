import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>About Us</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#181d45",
    fontWeight: "bold",
  },
  text:  { 
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});

export default AboutUsPage;
