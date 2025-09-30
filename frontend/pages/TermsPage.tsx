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
          By using the Drive Now application and proceeding to rent a vehicle through our service,
          you agree to the following terms and conditions: you acknowledge and consent that we collect
          and process personal information including your full name (for identification), email address
          (for contact purposes), date of birth (to confirm legal eligibility to rent a car), and a password
          (for account security), and that such information may be stored, updated, and accessed within the
          app by you. {"\n\n"}

          When renting a car, you agree that Drive Now may securely transmit necessary personal information
          to a verified third-party rental partner at the location where you will pick up the vehicle, solely
          for the purpose of confirming your identity and completing the rental agreement, in accordance with
          GDPR principles of data minimization, purpose limitation, and lawful processing. You further confirm
          that you are above the legal age required in the relevant jurisdiction for renting a car and accept
          that it is your responsibility to comply with local laws. Payment for the rental must be made upon
          receiving the vehicle, and you agree that failure to appear, failure to pay, or failure to pick up
          the car at the agreed time and place may result in additional charges or fees, including but not
          limited to penalties for late cancellation, no-shows, or breach of rental conditions. You will also be held
           accountable for any damage inflicted upon the car during your rental period.{"\n\n"}

          You understand that all information displayed in the app, including car availability, pricing, and
          location details, is subject to change, and that previous rentals are recorded in your account
          history for your own reference and in compliance with our legal obligations under GDPR for data
          retention. Drive Now is committed to protecting your privacy and personal data, and will not share
          your information with any party other than verified rental partners directly involved in fulfilling
          your booking, unless required by law. {"\n\n"}

          By confirming a booking, you accept that these terms constitute a binding agreement between you and
          Drive Now, and that your continued use of the app signifies acceptance of our data processing practices,
          payment terms, and rental obligations as outlined above. {"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}

export default TermsPage;
