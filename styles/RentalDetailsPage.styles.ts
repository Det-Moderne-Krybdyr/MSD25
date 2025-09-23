import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181d45",
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
});

export default styles;
