import React, {useEffect, useState} from "react";
import {View, Text, TextInput, Pressable, ScrollView} from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles/ConfirmRentalPage.styles";
import {sendWithAuth} from "../services/service";
import {getLocations, postReservation} from "../services/carService";
import {getUser} from "../services/authService";

function calculatePrice(range: any, carModel: any) {
    const days = (new Date(range.end).getTime() - new Date(range.start).getTime()) / (1000 * 60 * 60 * 24)
    return carModel.price * days;
}


function ConfirmRentalPage({ route, navigation }: any) {
  const { car, name, email, pickup, dropoff, range } = route.params;

  const [userInfo, setUserInfo] = useState<{name: string, email:string}>({name: "", email: ""});
  const [accepted, setAccepted] = useState(false);

  const canConfirm = accepted;

    useEffect(() => {
        const fetchUserInfo = async() => {
            return sendWithAuth(getUser)
        }
        fetchUserInfo().then(setUserInfo)

    },[])

  return (
      <ScrollView >
          <View style={styles.container}>
              <Pressable
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
              >
                  <Text style={styles.backButtonText}>← Back</Text>
              </Pressable>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                      style={styles.input}
                      value={userInfo.name}
                      textContentType="oneTimeCode"
                      onChangeText={(text: string) => setUserInfo({...userInfo, name: text})}
                  />
              </View>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput
                      style={styles.input}
                      value={userInfo.email}
                      textContentType="oneTimeCode"
                      onChangeText={(text: string) => setUserInfo({...userInfo, email: text})}
                      keyboardType="email-address"
                  />
              </View>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>Car</Text>
                  <TextInput style={styles.input} textContentType="oneTimeCode" value={car.name} editable={false} />
              </View>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>Pickup destination</Text>
                  <TextInput style={styles.input} textContentType="oneTimeCode" value={pickup.name} editable={false} />
              </View>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>Drop off destination</Text>
                  <TextInput style={styles.input} textContentType="oneTimeCode" value={dropoff.name} editable={false} />
              </View>

              <View style={styles.inputBox}>
                  <Text style={styles.label}>Dates</Text>
                  <TextInput
                      style={styles.input}
                      textContentType="oneTimeCode"
                      value={`${range.start} → ${range.end}`}
                      editable={false}
                  />
              </View>
              <View style={styles.inputBox}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput style={styles.input} textContentType="oneTimeCode" value={calculatePrice(range, car) + "€"} editable={false} />
              </View>

              <View style={styles.checkboxRow}>
                  <Checkbox
                      value={accepted}
                      onValueChange={setAccepted}
                      color={accepted ? "#181d45" : undefined}
                      style={styles.checkbox}
                      textContentType="oneTimeCode"
                  />
                  <Text style={styles.checkboxText}>
                      I confirm that I have read and accepted the{" "}
                      <Text
                          style={styles.link}
                          onPress={() => navigation.navigate("TermsPage")}
                      >
                          terms and conditions
                      </Text>
                  </Text>
              </View>

              <Pressable
                  style={({ pressed }) => [
                      styles.confirmButton,
                      pressed && styles.confirmButtonPressed,
                  ]}
                  disabled={!canConfirm}
                  onPress={() => {
                      sendWithAuth(postReservation, pickup.id, dropoff.id, car.cars[0].id, new Date(range.start), new Date(range.end)).then((res) => {
                          if (res == "success") {
                              navigation.navigate("RentalConfirmedPage", {
                                  name: userInfo.name,
                                  email: userInfo.email,
                                  car,
                                  pickup,
                                  dropoff,
                                  range,
                                  price: calculatePrice(range, car),
                              })
                          }
                      })

                  }
                  }
              >
                  <Text
                      style={[
                          styles.confirmButtonText,
                          !canConfirm && { opacity: 0.5 },
                      ]}
                  >
                      Confirm rental
                  </Text>
              </Pressable>
          </View>
      </ScrollView>

  );
}

export default ConfirmRentalPage;
