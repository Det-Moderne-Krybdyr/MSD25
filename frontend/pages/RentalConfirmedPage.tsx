import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/RentalConfirmedPage.styles";

function RentalConfirmedPage({ route, navigation }: any) {
  const { name, email, car, pickup, dropoff, range, price } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/check.png")}
        style={styles.checkIcon}
        resizeMode="contain"
      />

      <Text style={styles.title}>Your rental is confirmed!</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Car</Text>
        <Text style={styles.value}>{car.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Pickup</Text>
        <Text style={styles.value}>{pickup.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Drop-off</Text>
        <Text style={styles.value}>{dropoff.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Dates</Text>
        <Text style={styles.value}>
          {range.start} → {range.end}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.value}>{price}</Text>
      </View>
    </View>
  );
}

export default RentalConfirmedPage;
