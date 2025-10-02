import React, {JSX, useEffect, useState} from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import styles from "../styles/RentalsPage.styles";
import {getValueForAsync} from "../navigation/rootNavigator"
import {
    getCurrentReservationsByUser,
    getFutureReservationsByUser,
    getPreviousReservationsByUser
} from "../services/carService";
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
    const [futureRentals, setFutureRentals] = useState([])

    useEffect(() => {
        const fetchPreviousRentals = async() => {
            return sendWithAuth(getPreviousReservationsByUser)
        }
        const fetchCurrentRentals = async() => {
            return sendWithAuth(getCurrentReservationsByUser)
        }
        const fetchFutureRentals = async() => {
            return sendWithAuth(getFutureReservationsByUser)
        }

        fetchPreviousRentals().then(setPreviousRentals)
        fetchCurrentRentals().then(setCurrentRentals)
        fetchFutureRentals().then(setFutureRentals)
    },[])


  return (
    <ScrollView style={styles.container}>
        {currentRentals.length > 0 ? <Text style={styles.sectionLabel}>Current Rentals</Text> : <></>}
        {currentRentals.map((rental: any) => (
            <RentalCard key={rental.id} rental={rental} navigation={navigation} />
        ))}
        {futureRentals.length > 0 ? <Text style={styles.sectionLabel}>Upcoming Rentals</Text> : <></>}
        {futureRentals.map((rental: any) => (
            <RentalCard key={rental.id} rental={rental} navigation={navigation} />
        ))}
        {previousRentals.length > 0 ? <Text style={styles.sectionLabel}>Previous Rentals</Text> : <></>}
      {previousRentals.map((rental: any) => (
        <RentalCard key={rental.id} rental={rental} navigation={navigation} />
      ))}
        {previousRentals.length == 0 && currentRentals.length == 0 && futureRentals.length == 0 ? <Text style={{...styles.detailsButtonText, textAlign: "center"}}>Rent a car from the home page to view here!</Text>: <></>}
    </ScrollView>
  );
}

export default RentalsPage;
