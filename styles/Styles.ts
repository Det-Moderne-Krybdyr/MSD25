import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const BOTTOM_NAV_BAR_HEIGHT =
  initialWindowMetrics?.frame.height! - WINDOW_HEIGHT - StatusBar.currentHeight!;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0.5,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === "android" ? BOTTOM_NAV_BAR_HEIGHT : 0,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
