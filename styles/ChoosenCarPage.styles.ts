import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181d45",
  },
  carImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    minHeight: 60,
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    marginVertical: 8,
  },
  inputText: {
    fontSize: 16,
    color: "#181d45",
  },
  placeholderText: {
    fontSize: 16,
    color: "#767676",
    fontStyle: "italic",
  },
  rentButton: {
    width: "100%",
    minHeight: 70,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "#a9cdeb",
    alignItems: "center",
    justifyContent: "center",
  },
  rentButtonPressed: {
    backgroundColor: "#181d45",
  },
  rentButtonText: {
    color: "#181d45",
    fontSize: 22,
    fontWeight: "bold",
  },
  rentButtonTextPressed: {
    color: "#a9cdeb",
    fontSize: 22,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    margin: 32,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  modalItem: {
    paddingVertical: 12,
  },
  modalItemText: {
    fontSize: 16,
    color: "#181d45",
  },
  calendarModalContent: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
});

export default styles;
