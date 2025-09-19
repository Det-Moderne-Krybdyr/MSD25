import {createStackNavigator} from "@react-navigation/stack"
import HomePage from "../../pages/HomePage";
import AboutUsPage from "../../pages/AboutUsPage";
import RentalsPage from "../../pages/RentalsPage";
import RentACarPage from "../../pages/RentACarPage";

const pages = [
    {name: "Home", component: HomePage},
    {name: "AboutUs", component: AboutUsPage},
    {name: "Rentals", component: RentalsPage},
    {name: "RentACar", component: RentACarPage},
]

const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            {pages.map((page) => (
                <Stack.Screen key={page.name} name={page.name} component={page.component}></Stack.Screen>
            ))}
        </Stack.Navigator>
    )
}