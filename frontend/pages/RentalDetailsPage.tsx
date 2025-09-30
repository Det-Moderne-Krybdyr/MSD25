import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/RentalDetailsPage.styles";

function RentalDetailsPage({ route, navigation }: any) {
  const { name, email, car, dates, pickup, dropoff, totalPrice } = route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Car Rented</Text>
        <Text style={styles.value}>{car}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Dates Rented</Text>
        <Text style={styles.value}>{dates}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Picked up in</Text>
        <Text style={styles.value}>{pickup}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Dropped off at</Text>
        <Text style={styles.value}>{dropoff}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Total Price</Text>
        <Text style={styles.value}>{totalPrice} €</Text>
      </View>
    </View>
  );
}

export default RentalDetailsPage;
