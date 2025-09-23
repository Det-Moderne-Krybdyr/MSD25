import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  topControls: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  pickerButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: "#fff",
    marginRight: 8,
  },
  pickerText: {
    fontSize: 16,
    color: "#181d45",
  },
  placeholderText: {
    color: "#767676",
    fontStyle: "italic",
  },
  dateButton: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingVertical: 15,
  },
  shadowCard: {
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 10,
    backgroundColor: "transparent",
  },
  cardInner: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    padding: 16,
  },
  carImage: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
  detailsButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  detailsButtonText: {
    color: "#181d45",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  detailsButtonTextPressed: {
    color: "#a9cdeb",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
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
  calendarModalContent: {
    margin: 16,
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
});

export default styles;
