import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RentACarPage = () => {
  return (
    <View style={styles.container}>
      <Text>Rent A Car Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default RentACarPage;
