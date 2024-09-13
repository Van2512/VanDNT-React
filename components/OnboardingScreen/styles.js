import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rectangle: {
    width: 250,
    height: 120,
    backgroundColor: "#D84861",
    position: "absolute",
    top: "32%",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    padding: 10,
    fontSize: 31,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textButton: {
    position: "absolute",
    top: "32.4%",
    padding: 10,
    fontSize: 37,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  descriptionContainer: {
    position: "absolute",
    bottom: "37%",
  },
});

export default styles;
