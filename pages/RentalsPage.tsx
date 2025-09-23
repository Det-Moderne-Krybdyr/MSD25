import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../styles/RentalsPage.styles";

const rentalsData = {
  upcoming: [
    { id: "1", car: "Toyota Corolla", dates: "2025-10-01 → 2025-10-07", price: 80, pickup: "Copenhagen", dropoff: "Aarhus" },
    { id: "2", car: "Tesla Model 3", dates: "2025-11-15 → 2025-11-20", price: 120, pickup: "Odense", dropoff: "Copenhagen" },
  ],
  previous: [
    { id: "3", car: "Ford Fiesta", dates: "2025-08-10 → 2025-08-15", price: 100, pickup: "Copenhagen", dropoff: "Odense" },
    { id: "4", car: "BMW X5", dates: "2025-07-01 → 2025-07-10", price: 120, pickup: "Aarhus", dropoff: "Copenhagen" },
    { id: "5", car: "Hyundai i10", dates: "2025-06-05 → 2025-06-12", price: 80, pickup: "Odense", dropoff: "Aalborg" },
  ],
};

const calculatePrice = (dates: string, price: number) => {
  const [start, end] = dates.split(" → ");
  const startDate = new Date(start);
  const endDate = new Date(end);
  const days = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;
  return days * price;
};

const RentalCard = ({ rental, navigation }: { rental: any; navigation: any }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{rental.car}</Text>
    <Text style={styles.cardDates}>{rental.dates}</Text>
    <Pressable
      style={({ pressed }) => [styles.detailsButton, pressed && styles.detailsButtonPressed]}
      onPress={() =>
        navigation.navigate("RentalDetailsPage", {
          name: "John Doe",
          email: "johndoe@email.com",
          car: rental.car,
          dates: rental.dates,
          pickup: rental.pickup,
          dropoff: rental.dropoff,
          totalPrice: calculatePrice(rental.dates, rental.price),
        })
      }
    >
      {({ pressed }) => (
        <Text style={pressed ? styles.detailsButtonTextPressed : styles.detailsButtonText}>View Details</Text>
      )}
    </Pressable>
  </View>
);

function RentalsPage({ navigation }: any): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionLabel}>Upcoming Rentals</Text>
      {rentalsData.upcoming.map((rental) => (
        <RentalCard key={rental.id} rental={rental} navigation={navigation} />
      ))}

      <Text style={styles.sectionLabel}>Previous Rentals</Text>
      {rentalsData.previous.map((rental) => (
        <RentalCard key={rental.id} rental={rental} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

export default RentalsPage;
