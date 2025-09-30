import {Image, StyleSheet, Text, View} from "react-native";
import styles from "../styles/Styles";

const CarRentalCard = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Image style={styles.container} src={"https://www.carlife365.dk/audi-a3-sportback-plug-in-hybrid-med-245-heste/"}></Image>
                <View style={{...styles.container, backgroundColor: "blue"}}>
                    <Text>Audi A3 sports back</Text>
                </View>
            </View>
        </View>
    )
}

export default CarRentalCard;

