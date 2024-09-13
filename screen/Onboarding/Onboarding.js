import React from "react";
import { View, StyleSheet } from "react-native";
import OnboardingScreen from "../../components/OnboardingScreen/OnboardingScreen";

const Onboarding = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Home"); // Đảm bảo tên này khớp với tên trong AppNavigator
  };

  return (
    <View style={styles.container}>
      <OnboardingScreen
        image={require("../../assets/images/background/background.jpg")}
        description={"TAP TO PLAY"}
        textButton={"TRICKY\n CUPS"}
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

export default Onboarding;
