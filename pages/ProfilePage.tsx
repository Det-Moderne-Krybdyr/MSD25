import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/ProfilePage.styles";

const mockUser = {
  name: "John Doe",
  country: "Denmark",
};

function ProfilePage() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} resizeMode="contain" />

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{mockUser.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Country of Residence</Text>
        <Text style={styles.value}>{mockUser.country}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => console.log("Edit Profile pressed")}
      >
        {({ pressed }) => <Text style={pressed ? styles.buttonTextPressed : styles.buttonText}>Edit Profile</Text>}
      </Pressable>
    </View>
  );
}

export default ProfilePage;
