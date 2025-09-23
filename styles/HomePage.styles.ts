import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    flex: 1,
    marginVertical: 8,
    backgroundColor: "#a9cdeb",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonText: {
    color: "#181d45",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
  },
  icon1: {
    width: 250,
    resizeMode: "contain",
    marginTop: 10,
  },
  icon2: {
    width: 300,
    resizeMode: "contain",
    marginTop: 10,
  },
  icon3: {
    width: 250,
    height: 130,
    resizeMode: "contain",
    marginTop: 5,
  },
});

export default styles;
