import {Button, Text, View} from "react-native";
import {JSX} from "react";
import styles from "../styles/Styles";

function  HomePage({navigation}: {navigation: any}) {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"}}>
            <Text>Home Page</Text>
            <Button title={"About Us"} onPress={() => navigation.navigate("AboutUs")}></Button>
            <Button title={"Rent A Car"} onPress={() => navigation.navigate("RentACar")}></Button>
            <Button title={"Rentals"} onPress={() => navigation.navigate("Rentals")}></Button>

        </View>
    )
}

export default HomePage;