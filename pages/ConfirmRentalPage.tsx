import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles/ConfirmRentalPage.styles";

function ConfirmRentalPage({ route, navigation }: any) {
  const { car, name, email, pickup, dropoff, range } = route.params;

  const [inputName, setInputName] = useState(name || "John Doe");
  const [inputEmail, setInputEmail] = useState(email || "johndoe@email.com");
  const [accepted, setAccepted] = useState(false);

  const isFormComplete = inputName.trim() !== "" && inputEmail.trim() !== "" && accepted;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={inputName}
          onChangeText={setInputName}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={inputEmail}
          onChangeText={setInputEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Car</Text>
        <TextInput style={styles.input} value={car.name} editable={false} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Pickup destination</Text>
        <TextInput style={styles.input} value={pickup} editable={false} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Drop off destination</Text>
        <TextInput style={styles.input} value={dropoff} editable={false} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Dates</Text>
        <TextInput
          style={styles.input}
          value={`${range.start} - ${range.end}`}
          editable={false}
        />
      </View>

      <View style={styles.checkboxRow}>
        <Checkbox
          value={accepted}
          onValueChange={setAccepted}
          color={accepted ? "#181d45" : undefined}
          style={styles.checkbox}
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
          pressed && isFormComplete && styles.confirmButtonPressed,
          !isFormComplete && { opacity: 0.5 },
        ]}
        disabled={!isFormComplete}
      >
        <Text
          style={[
            styles.confirmButtonText,
            !isFormComplete && { opacity: 0.5 },
          ]}
        >
          Confirm rental
        </Text>
      </Pressable>
    </View>
  );
}

export default ConfirmRentalPage;
