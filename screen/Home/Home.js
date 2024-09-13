import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import HomeScreen from "../../components/HomeScreen/HomeScreen";

const Home = ({ navigation }) => {
  const [ballPosition, setBallPosition] = useState(getRandomPosition());
  const [selectedCup, setSelectedCup] = useState(null);
  const [gameResult, setGameResult] = useState({
    description: "",
    textButton: "",
  });

  // Hàm để chọn vị trí ngẫu nhiên cho quả bóng
  function getRandomPosition() {
    const positions = ["cup", "cup_two", "cup_three"];
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
  }

  // Xử lý khi người dùng nhấn vào một cốc
  function handleCupPress(cup) {
    setSelectedCup(cup);

    if (ballPosition === cup) {
      setGameResult({
        description: "TAP TO RESTART",
        textButton: "YOU WIN",
      });
      Alert.alert("Congratulations!", "You found the ball!");
    } else {
      setGameResult({
        description: "TAP TO RESTART",
        
        textButton: "YOU LOSE",
      });
      Alert.alert("Sorry!", "Try again.");
    }
  }

  // Xử lý khi người dùng nhấn nút khởi động lại
  function handleRestart() {
    setBallPosition(getRandomPosition());
    setSelectedCup(null);
    setGameResult({
      description: "",
      textButton: "",
    });
  }

  // Điều hướng đến màn hình tiếp theo
  const handleNext = () => {
    navigation.navigate("ONBOARDING_TWO");
  };

  return (
    <View style={styles.container}>
      <HomeScreen
        image={require("../../assets/images/background/backgound_game.jpg")}
        ball={require("../../assets/images/toys/ball.png")}
        cup_one={require("../../assets/images/toys/cups.png")}
        cup_two={require("../../assets/images/toys/cups.png")}
        cup_three={require("../../assets/images/toys/cups.png")}
        textButton={gameResult.textButton}
        description={gameResult.description}
        ballPosition={ballPosition}
        onCupPress={handleCupPress}
        onRestart={handleRestart}
        onNext={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
