import {Button, View} from "react-native";
import styles from "../../styles/Styles";
import {JSX} from "react";

export default function LoginPage({navigation}: {navigation: any}): JSX.Element {
    return (
        <View style={styles.container}>
            <Button title={"Login"} onPress={() => navigation.navigate("HomeScreen")}/>
        </View>
    )
}