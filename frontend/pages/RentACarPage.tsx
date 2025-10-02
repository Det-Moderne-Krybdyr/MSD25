import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import {Calendar, DateData} from "react-native-calendars";
import { ChevronDown, Calendar as CalendarIcon } from "lucide-react-native";
import styles from "../styles/RentACarPage.styles";
import {getValueForAsync} from "../navigation/rootNavigator";
import {getCarsByLocationAndDates, getLocations, getPreviousReservationsByUser} from "../services/carService";
import {sendWithAuth} from "../services/service";
import {carImages} from "../assets/assets";
import {MarkedDates} from "react-native-calendars/src/types";

const carsData = [
  { id: "1", name: "Audi A3 Sportback", image: require("../assets/audi.png"), price: "100 kr./dag" },
  { id: "2", name: "Volkswagen ID.7", image: require("../assets/vw.png"), price: "120 kr./dag" },
  { id: "3", name: "Hyundai i20", image: require("../assets/hyundai.png"), price: "80 kr./dag" },
];

function RentACarPage({ navigation }: any) {
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [range, setRange] = useState<{ start: string | null; end: string | null }>({ start: null, end: null });

  const [locations, setLocations] = useState<any[]>([]);
  const [carModels, setCarModels] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async() => {
      return sendWithAuth(getLocations)
    }
    fetchLocations().then(setLocations)

  },[])

  useEffect(() => {
    const fetchCars = async () => {
      if (selectedLocation == null || !range.start || !range.end) return
      return sendWithAuth(getCarsByLocationAndDates, selectedLocation.id, new Date(range.start), new Date(range.end))
    }
    fetchCars().then(setCarModels)
  }, [selectedLocation, range])

  const handleDayPress = (date: DateData) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date.dateString, end: null });
    } else if (range.start && !range.end) {
      if (date.dateString > range.start) {
        setRange({ start: range.start, end: date.dateString });
        setCalendarVisible(false);
      } else {
        setRange({ start: date.dateString, end: null });
      }
    }
  };

  const getMarkedDates = ():MarkedDates => {
    if (!range.start) return {};
    if (!range.end) return { [range.start]: { startingDay: true, color: "#a9cdeb", textColor: "#181d45" } };
    let dates: any = {};
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

  const onViewDetails = (carModel: any) => {
    navigation.navigate("ChoosenCarPage", { carModel, location: selectedLocation, range });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topControls}>
        <TouchableOpacity style={styles.pickerButton} onPress={() => setLocationModalVisible(true)}>
          <Text style={[styles.pickerText, !selectedLocation && styles.placeholderText]}>
            {selectedLocation?.name || "Choose pickup location"}
          </Text>
          <ChevronDown size={20} color="#181d45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton} onPress={() => setCalendarVisible(true)}>
          <CalendarIcon size={20} color="#181d45" />
        </TouchableOpacity>
      </View>
      {selectedLocation && range.start && range.end ?
          <FlatList
              data={carModels}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
              renderItem={({ item: carModel }) => {
                if (carModel.cars.length == 0) return(<View/>)
                return (
                    <View style={styles.shadowCard}>
                      <View style={styles.cardInner}>
                        <Image source={carImages(carModel.image)} style={styles.carImage}
                               resizeMode="contain"/>
                        <View style={styles.cardFooter}>
                          <View>
                            <Text style={styles.carName}>{carModel.name}</Text>
                            <Text style={styles.modalItemText}>{carModel.cars.length} Available</Text>
                          </View>
                          <Pressable
                              style={styles.detailsButton}
                              onPress={() => onViewDetails(carModel)}
                          >
                            {({pressed}) => (
                                <Text style={pressed ? styles.detailsButtonTextPressed : styles.detailsButtonText}>
                                  View Details
                                </Text>
                            )}
                          </Pressable>
                        </View>
                      </View>
                    </View>
                )
              }}
          /> : <View style={styles.topControls}><Text style={styles.placeholderText}>Select dates and a location to see available models</Text></View>}


      <Modal transparent visible={locationModalVisible} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setLocationModalVisible(false)}>
          <View style={styles.modalContent}>
            {locations.map((loc: any) => (
              <TouchableOpacity
                key={loc.name}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedLocation(loc);
                  setLocationModalVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{loc.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal transparent visible={calendarVisible} animationType="slide">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setCalendarVisible(false)}>
          <View style={styles.calendarModalContent}>
            <Calendar onDayPress={handleDayPress} markedDates={getMarkedDates()} markingType="period" />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default RentACarPage;
