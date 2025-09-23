import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 40,
  },
  backButtonText: {
    color: "#181d45",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBox: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  label: {
    color: "#181d45",
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: "#181d45",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: "#181d45",
  },
  checkboxText: {
    fontSize: 14,
    color: "#181d45",
    flexShrink: 1,
  },
  link: {
    color: "#181d45",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  confirmButton: {
    backgroundColor: "#a9cdeb",
    height: 60,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonPressed: {
    backgroundColor: "#181d45",
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
  confirmButtonTextPressed: {
    color: "#a9cdeb",
  },
});

export default styles;
