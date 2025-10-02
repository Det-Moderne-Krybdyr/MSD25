import React, {JSX, useEffect, useState} from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../styles/RentalsPage.styles";
import {getValueForAsync} from "../navigation/rootNavigator"
import {getCurrentReservationsByUser, getPreviousReservationsByUser} from "../services/carService";
import {sendWithAuth} from "../services/service";

const formatDates = (start: number, end: number): string => {
    return new Date(start).toDateString() + " → " + new Date(end).toDateString()
}

const RentalCard = ({ rental, navigation }: any) => {
    const datesString = formatDates(rental.start_date, rental.end_date)
    return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{rental.car.model.name}</Text>
      <Text style={styles.cardDates}>{datesString}</Text>
      <Pressable
        style={({ pressed }) => [styles.detailsButton, pressed && styles.detailsButtonPressed]}
        onPress={() =>
          navigation.navigate("RentalDetailsPage", {
            rental: rental
          })
        }
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.detailsButtonTextPressed : styles.detailsButtonText}>View Details</Text>
        )}
      </Pressable>
    </View>
    )
};

function RentalsPage({ navigation }: any): JSX.Element {
    const [previousRentals, setPreviousRentals] = useState([])
    const [currentRentals, setCurrentRentals] = useState([])

    useEffect(() => {
        const fetchPreviousRentals = async() => {
            return sendWithAuth(getPreviousReservationsByUser)
        }
        const fetchCurrentRentals = async() => {
            return sendWithAuth(getCurrentReservationsByUser)
        }

        fetchPreviousRentals().then(setPreviousRentals)
        fetchCurrentRentals().then(setCurrentRentals)
    },[])


  return (
    <ScrollView style={styles.container}>
        <Text style={styles.sectionLabel}>Current Rentals</Text>
        {currentRentals.map((rental: any) => (
            <RentalCard key={rental.id} rental={rental} navigation={navigation} />
        ))}
      <Text style={styles.sectionLabel}>Previous Rentals</Text>
      {previousRentals.map((rental: any) => (
        <RentalCard key={rental.id} rental={rental} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

export default RentalsPage;
