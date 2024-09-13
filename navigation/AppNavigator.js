import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "./routes";
import Onboarding from '../screen/Onboarding/Onboarding';
import Home from "../screen/Home/Home";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={ROUTES.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
