import React, { useState } from "react";
import { View, Text, Image, Pressable, Modal, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "../styles/ChoosenCarPage.styles";

const locations = ["Copenhagen", "Aarhus", "Odense"];

function ChoosenCarPage({ route, navigation }: { route: any; navigation: any }) {
  const { car, range: initialRange, location: initialLocation } = route.params;

  const [pickup, setPickup] = useState(initialLocation || "");
  const [dropoff, setDropoff] = useState("");
  const [range, setRange] = useState(initialRange || {});
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState<null | "pickup" | "dropoff">(null);

  const onDayPress = (day: any) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day.dateString, end: undefined });
    } else if (range.start && !range.end) {
      if (day.dateString >= range.start) {
        setRange({ ...range, end: day.dateString });
      } else {
        setRange({ start: day.dateString, end: undefined });
      }
    }
  };

  const getMarkedDates = () => {
    const marked: any = {};
    if (range.start) {
      marked[range.start] = { startingDay: true, color: "#a9cdeb", textColor: "#181d45" };
    }
    if (range.end) {
      marked[range.end] = { endingDay: true, color: "#a9cdeb", textColor: "#181d45" };

      let current = new Date(range.start!);
      const end = new Date(range.end);
      current.setDate(current.getDate() + 1);

      while (current < end) {
        const dateString = current.toISOString().split("T")[0];
        marked[dateString] = { color: "#a9cdeb", textColor: "#181d45" };
        current.setDate(current.getDate() + 1);
      }
    }
    return marked;
  };

  const isFormComplete = pickup && dropoff && range.start && range.end;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <Image source={car.image} style={styles.carImage} resizeMode="contain" />

      <View style={styles.input}>
        <Text style={styles.inputText}>{car.name}</Text>
      </View>

      <Pressable style={styles.input} onPress={() => setLocationModalVisible("pickup")}>
        <Text style={pickup ? styles.inputText : styles.placeholderText}>
          {pickup || "Pickup destination"}
        </Text>
      </Pressable>

      <Pressable style={styles.input} onPress={() => setLocationModalVisible("dropoff")}>
        <Text style={dropoff ? styles.inputText : styles.placeholderText}>
          {dropoff || "Drop-off destination"}
        </Text>
      </Pressable>

      <Pressable style={styles.input} onPress={() => setCalendarVisible(true)}>
        <Text style={range?.start ? styles.inputText : styles.placeholderText}>
          {range?.start ? (range.end ? `${range.start} → ${range.end}` : range.start) : "Select rental dates"}
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.rentButton,
          pressed && isFormComplete && styles.rentButtonPressed,
          !isFormComplete && { opacity: 0.5 },
        ]}
        disabled={!isFormComplete}
        onPress={() =>
          navigation.navigate("ConfirmRentalPage", {
            car,
            pickup,
            dropoff,
            range,
          })
        }
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.rentButtonTextPressed : styles.rentButtonText}>
            Rent this car now
          </Text>
        )}
      </Pressable>

      <Modal visible={calendarVisible} transparent animationType="slide">
        <Pressable style={styles.modalOverlay} onPress={() => setCalendarVisible(false)}>
          <View style={styles.calendarModalContent}>
            <Calendar onDayPress={onDayPress} markingType="period" markedDates={getMarkedDates()} />
          </View>
        </Pressable>
      </Modal>

      <Modal visible={!!locationModalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setLocationModalVisible(null)}>
          <View style={styles.modalContent}>
            <FlatList
              data={locations}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.modalItem}
                  onPress={() => {
                    if (locationModalVisible === "pickup") setPickup(item);
                    if (locationModalVisible === "dropoff") setDropoff(item);
                    setLocationModalVisible(null);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

export default ChoosenCarPage;
