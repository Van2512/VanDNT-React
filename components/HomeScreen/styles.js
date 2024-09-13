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
    width: "100%",
    bottom: "38%",
    height: 50,
    backgroundColor: "#E6E6E6",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  description: {
    position: "absolute",
    bottom: "38%",
    padding: 10,
    fontSize: 31.2,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  cupsContainer: {
    position: "absolute",
    bottom: "42%", // Điều chỉnh vị trí của hàng cup
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cup: {
    width: 55,
    height: 80,
  },
  cup_two: {
    width: 55,
    height: 80,
    marginLeft: 50, // Khoảng cách giữa cup_one và cup_two
  },
  cup_three: {
    width: 55,
    height: 80,
    marginLeft: 50, // Khoảng cách giữa cup_two và cup_three
  },
  ball: {
    width: 35,
    height: 30,
    bottom: "10%",
    marginLeft: 10,
    position: "absolute",
  },

  restartButtonText: {
    color: "#fff",
    bottom: 100,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
