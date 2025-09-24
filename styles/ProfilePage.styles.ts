import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  infoBox: {
    width: "100%",
    minHeight: 70,
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
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
  button: {
    width: "100%",
    minHeight: 70,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#181d45",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#a9cdeb",
  },
  buttonText: {
    color: "#a9cdeb",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextPressed: {
    color: "#181d45",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
