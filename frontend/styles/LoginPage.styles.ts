import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  formContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  logoBox: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  inputBox: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#181d45",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  label: {
    color: "#181d45",
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    fontSize: 16,
    color: "#181d45",
    paddingVertical: 6,
  },
  errorText: {
    marginTop: 6,
    fontSize: 13,
    color: "#b00020",
  },
  submitButton: {
    backgroundColor: "#a9cdeb",
    height: 50,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  submitButtonPressed: {
    backgroundColor: "#181d45",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
  submitButtonTextPressed: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a9cdeb",
  },
  secondaryButton: {
    backgroundColor: "#181d45",
    height: 50,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  secondaryButtonPressed: {
    backgroundColor: "#a9cdeb",
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a9cdeb",
  },
  secondaryButtonTextPressed: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181d45",
  },
});

export default styles;
