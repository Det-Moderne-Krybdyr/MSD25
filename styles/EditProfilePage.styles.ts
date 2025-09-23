import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  inputBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#181d45",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#181d45",
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: "#181d45",
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#a9cdeb",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonPressed: {
    backgroundColor: "#181d45",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
  saveButtonTextPressed: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a9cdeb",
  },
});

export default styles;
