import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  checkIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#181d45",
    marginBottom: 20,
  },
  infoBox: {
    width: "100%",
    minHeight: 60,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
    paddingLeft: 25,
    marginVertical: 0,
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#181d45",
  },
  value: {
    fontSize: 18,
    marginTop: 4,
    color: "#000",
  },
});

export default styles;
