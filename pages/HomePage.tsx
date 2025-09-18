import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <Button
        title="Rent a Car"
        onPress={() => navigation.navigate("RentACar")}
      />
      <Button
        title="Map"
        onPress={() => navigation.navigate("Map")}
      />
      <Button
        title="My Rentals"
        onPress={() => navigation.navigate("Rentals")}
      />
      <Button
        title="Account"
        onPress={() => navigation.navigate("Account")}
      />
      <Button
        title="About Us"
        onPress={() => navigation.navigate("AboutUs")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10, // spacing between buttons
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;
