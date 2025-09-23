import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "../../pages/ProfilePage";

const pages = [{ name: "Profile", component: ProfilePage }];

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {pages.map((page) => (
        <Stack.Screen key={page.name} name={page.name} component={page.component} />
      ))}
    </Stack.Navigator>
  );
}
