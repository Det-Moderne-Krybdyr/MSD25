import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../styles/HomePage.styles";

type HomePageProps = {
  readonly navigation: any;
};

function HomePage({ navigation }: HomePageProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RentACar")}
      >
        <Image source={require("../assets/dn.png")} style={styles.icon1} />
        <Text style={styles.buttonText}>Rent A Car</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Rentals")}
      >
        <Image source={require("../assets/car.png")} style={styles.icon2} />
        <Text style={styles.buttonText}>Rentals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutUs")}
      >
        <Image source={require("../assets/au.png")} style={styles.icon3} />
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage;
