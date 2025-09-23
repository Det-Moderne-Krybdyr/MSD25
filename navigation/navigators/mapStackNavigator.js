import { createStackNavigator } from "@react-navigation/stack";
import MapPage from "../../pages/MapPage";

const pages = [{ name: "Map", component: MapPage }];

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {pages.map((page) => (
        <Stack.Screen key={page.name} name={page.name} component={page.component} />
      ))}
    </Stack.Navigator>
  );
}
