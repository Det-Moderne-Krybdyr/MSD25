import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../styles/RentalsPage.styles";

const rentalsData = {
  upcoming: [
    { id: "1", car: "Toyota Corolla", dates: "2025-10-01 → 2025-10-07" },
    { id: "2", car: "Tesla Model 3", dates: "2025-11-15 → 2025-11-20" },
  ],
  previous: [
    { id: "3", car: "Ford Fiesta", dates: "2025-08-10 → 2025-08-15" },
    { id: "4", car: "BMW X5", dates: "2025-07-01 → 2025-07-10" },
    { id: "5", car: "Hyundai i10", dates: "2025-06-05 → 2025-06-12" },
  ],
};

const RentalCard = ({ car, dates }: { car: string; dates: string }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{car}</Text>
    <Text style={styles.cardDates}>{dates}</Text>
    <Pressable
      style={({ pressed }) => [
        styles.detailsButton,
        pressed && styles.detailsButtonPressed,
      ]}
    >
      {({ pressed }) => (
        <Text style={pressed ? styles.detailsButtonTextPressed : styles.detailsButtonText}>
          View Details
        </Text>
      )}
    </Pressable>
  </View>
);

function RentalsPage(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionLabel}>Upcoming Rentals</Text>
      {rentalsData.upcoming.map((rental) => (
        <RentalCard key={rental.id} car={rental.car} dates={rental.dates} />
      ))}

      <Text style={styles.sectionLabel}>Previous Rentals</Text>
      {rentalsData.previous.map((rental) => (
        <RentalCard key={rental.id} car={rental.car} dates={rental.dates} />
      ))}
    </ScrollView>
  );
}

export default RentalsPage;
