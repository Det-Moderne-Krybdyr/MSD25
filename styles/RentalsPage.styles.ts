import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  sectionLabel: {
    backgroundColor: "#a9cdeb",
    borderColor: "#181d45",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
  cardDates: {
    fontSize: 14,
    color: "#181d45",
    marginVertical: 6,
  },
  detailsButton: {
    backgroundColor: "#a9cdeb",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  detailsButtonPressed: {
    backgroundColor: "#181d45",
  },
  detailsButtonText: {
    color: "#181d45",
    fontSize: 14,
    fontWeight: "bold",
  },
  detailsButtonTextPressed: {
    color: "#a9cdeb",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
