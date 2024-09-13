import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const OnboardingScreen = ({ image, description, textButton, onNext }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <View style={styles.rectangle} />

      <TouchableOpacity onPress={onNext} style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
      <Text style={styles.textButton}>{textButton}</Text>
    </View>
  );
};

export default OnboardingScreen;
