import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles"; // Import styles from the new file

const HomeScreen = ({
  image,
  description,
  textButton,
  ball,
  cup_one,
  cup_two,
  cup_three,
  ballPosition,
  onCupPress,
  onRestart,
  onNext,
  selectedCup
}) => {
  const handleCupPress = (cup) => {
    onCupPress(cup); // Gọi hàm xử lý bên ngoài
  };

  const handleDescriptionPress = () => {
    if (description === "TAP TO RESTART") {
      onRestart(); // Gọi hàm khởi động lại từ props
    }
  };

  const getCupStyle = (cup) => {
    return {
      transform: [{ translateY: cup === selectedCup ? -20 : 0 }],
    };
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="stretch" />
      <View style={styles.rectangle} />
      <View style={styles.cupsContainer}>
        {ballPosition === "cup" && (
          <Image source={ball} style={[styles.ball, { left: 0 }]} />
        )}
        <TouchableOpacity onPress={() => handleCupPress("cup")}>
          <Image source={cup_one} style={[styles.cup, getCupStyle("cup")]} />
        </TouchableOpacity>
        {ballPosition === "cup_two" && (
          <Image source={ball} style={[styles.ball, { left: 55 + 50 }]} />
        )}
        <TouchableOpacity onPress={() => handleCupPress("cup_two")}>
          <Image
            source={cup_two}
            style={[styles.cup_two, getCupStyle("cup_two")]}
          />
        </TouchableOpacity>
        {ballPosition === "cup_three" && (
          <Image source={ball} style={[styles.ball, { left: 2 * (55 + 50) }]} />
        )}
        <TouchableOpacity onPress={() => handleCupPress("cup_three")}>
          <Image
            source={cup_three}
            style={[styles.cup_three, getCupStyle("cup_three")]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleDescriptionPress}
        style={[
          styles.restartButton,
          {
            transform: [
              { translateY: description === "TAP TO RESTART" ? -20 : 0 },
            ],
          },
        ]}
      >
        <Text style={styles.restartButtonText}>{description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.resultButton,
          {
            transform: [
              { translateY: description === "TAP TO RESTART" ? -40 : 0 },
            ],
          },
        ]}
        onPress={onNext}
      >
    
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
