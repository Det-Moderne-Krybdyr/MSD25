import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/TermsPage.styles";

function TermsPage({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Welcome to Drive Now. By using our services, you agree to the following terms and conditions. {"\n\n"}
          1. All rentals are subject to availability and approval. {"\n\n"}
          2. Drivers must hold a valid driver’s license and meet minimum age requirements. {"\n\n"}
          3. Vehicles must be returned in the same condition as when rented, excluding normal wear and tear. {"\n\n"}
          4. Fuel costs, tolls, and traffic fines are the responsibility of the renter. {"\n\n"}
          5. Drive Now reserves the right to update these terms and conditions at any time. {"\n\n"}
          Please ensure you read and understand these terms before completing your rental.
        </Text>
      </ScrollView>
    </View>
  );
}

export default TermsPage;
