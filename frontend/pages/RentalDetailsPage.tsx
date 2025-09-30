import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/RentalDetailsPage.styles";

function RentalDetailsPage({ route, navigation }: any) {

    const {rental} = route.params;

    const formatDates = (start: number, end: number): string => {
        return new Date(start).toDateString() + " → " + new Date(end).toDateString()
    }

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{rental.user.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>{rental.user.email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Car Rented</Text>
        <Text style={styles.value}>{rental.car.model.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Dates Rented</Text>
        <Text style={styles.value}>{formatDates(rental.start_date, rental.end_date)}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Picked up in</Text>
        <Text style={styles.value}>{rental.pickup_location.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Dropped off at</Text>
        <Text style={styles.value}>{rental.dropoff_location.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Total Price</Text>
        <Text style={styles.value}>{rental.price} €</Text>
      </View>
    </View>
  );
}

export default RentalDetailsPage;
