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
    marginBottom: 25,
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
    marginBottom: 0,
  },
  input: {
    fontSize: 16,
    color: "#181d45",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
    marginLeft: 10,
  },
  checkbox: {
    marginRight: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
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
    height: 50,
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
});

export default styles;
