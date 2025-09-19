import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RentalsPage = () => {
  return (
    <View style={styles.container}>
      <Text>Rentals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default RentalsPage;
