import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/ProfilePage.styles";

function ProfilePage({ navigation, route }: { navigation: any; route: any }): JSX.Element {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    birthdate: "1990-01-01",
    country: "Denmark",
    password: "********",
  });

  useEffect(() => {
    if (route.params?.updatedUser) {
      setUser(route.params.updatedUser);
    }
  }, [route.params?.updatedUser]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate("EditProfile", { user })}
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.buttonTextPressed : styles.buttonText}>
            Edit Profile
          </Text>
        )}
      </Pressable>
    </View>
  );
}

export default ProfilePage;
