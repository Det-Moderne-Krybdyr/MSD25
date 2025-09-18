import {Text, View} from "react-native";
import {JSX} from "react";
import styles from "../styles/Styles";

function HomePage(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    )
}

export default HomePage;