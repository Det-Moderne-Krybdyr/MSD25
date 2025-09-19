import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#181d45",
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    lineHeight: 24,
    textAlign: "left",
  },
});

export default styles;
