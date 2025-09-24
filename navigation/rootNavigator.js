import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./bottomTabNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
