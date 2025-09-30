import React, {JSX, useEffect, useState} from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../styles/RentalsPage.styles";
import {getValueForAsync} from "../navigation/rootNavigator"
import {getReservationsByUser} from "../services/carService";

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
    const [rentals, setRentals] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const email = await getValueForAsync("email")
            const token = await getValueForAsync("user_token")

            return getReservationsByUser(email!, token!)
        }

        fetchData().then((data: any) => {
            setRentals(data)
        })
    },[])


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionLabel}>Previous Rentals</Text>
      {rentals.map((rental: any) => (
        <RentalCard key={rental.id} rental={rental} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

export default RentalsPage;
