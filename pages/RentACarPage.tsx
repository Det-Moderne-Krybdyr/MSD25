import React, { useState } from "react";
import { View, Text, FlatList, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { ChevronDown, Calendar as CalendarIcon } from "lucide-react-native";
import styles from "../styles/RentACarPage.styles";

const carsData = [
  { id: "1", name: "Audi A3 Sportback", image: require("../assets/audi.png") },
  { id: "2", name: "Volkswagen ID.7", image: require("../assets/vw.png") },
  { id: "3", name: "Hyundai i20", image: require("../assets/hyundai.png") },
];

const locations = ["Copenhagen", "Aarhus", "Odense", "Aalborg"];

function RentACarPage({ navigation }) {
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [range, setRange] = useState<{ start: string | null; end: string | null }>({
    start: null,
    end: null,
  });

  const handleDayPress = (day) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day.dateString, end: null });
    } else if (range.start && !range.end) {
      if (day.dateString > range.start) {
        setRange({ start: range.start, end: day.dateString });
        setCalendarVisible(false);
      } else {
        setRange({ start: day.dateString, end: null });
      }
    }
  };

  const getMarkedDates = () => {
    if (!range.start) return {};
    if (!range.end)
      return {
        [range.start]: { startingDay: true, color: "#a9cdeb", textColor: "#181d45" },
      };
    let dates = {};
    let current = new Date(range.start);
    let last = new Date(range.end);
    while (current <= last) {
      const dateStr = current.toISOString().split("T")[0];
      dates[dateStr] = {
        color: "#a9cdeb",
        textColor: "#181d45",
        startingDay: dateStr === range.start,
        endingDay: dateStr === range.end,
      };
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const onViewDetails = (car) => {
    navigation.navigate("ChoosenCarPage", { car, location: selectedLocation, range });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topControls}>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => setLocationModalVisible(true)}
        >
          <Text style={[styles.pickerText, !selectedLocation && styles.placeholderText]}>
            {selectedLocation || "Choose pickup location"}
          </Text>
          <ChevronDown size={20} color="#181d45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton} onPress={() => setCalendarVisible(true)}>
          <CalendarIcon size={20} color="#181d45" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.shadowCard}>
            <View style={styles.cardInner}>
              <Image source={item.image} style={styles.carImage} resizeMode="contain" />
              <View style={styles.cardFooter}>
                <Text style={styles.carName}>{item.name}</Text>
                <Pressable
                  style={({ pressed }) => [
                    styles.detailsButton,
                    pressed && styles.detailsButtonPressed,
                  ]}
                  onPress={() => onViewDetails(item)}
                >
                  {({ pressed }) => (
                    <Text
                      style={[
                        styles.detailsButtonText,
                        pressed && styles.detailsButtonTextPressed,
                      ]}
                    >
                      View Details
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />

      <Modal transparent visible={locationModalVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setLocationModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {locations.map((loc) => (
              <TouchableOpacity
                key={loc}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedLocation(loc);
                  setLocationModalVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{loc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal transparent visible={calendarVisible} animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setCalendarVisible(false)}
        >
          <View style={styles.calendarModalContent}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={getMarkedDates()}
              markingType="period"
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default RentACarPage;
