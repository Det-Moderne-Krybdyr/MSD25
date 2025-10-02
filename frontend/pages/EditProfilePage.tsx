import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import styles from "../styles/EditProfilePage.styles";

function EditProfilePage({ navigation, route }: { navigation: any; route: any }) {
  const { user } = route.params;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const [country, setCountry] = useState(user.country);
  const [password, setPassword] = useState(user.password);

  const handleSave = () => {
    const updatedUser = { name, email, birthdate, country, password };
    navigation.navigate("ProfilePage", { updatedUser });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Birthdate</Text>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={setBirthdate}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} value={country} onChangeText={setCountry} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.saveButton,
          pressed && styles.saveButtonPressed,
        ]}
        onPress={handleSave}
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.saveButtonTextPressed : styles.saveButtonText}>
            Save
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

export default EditProfilePage;
