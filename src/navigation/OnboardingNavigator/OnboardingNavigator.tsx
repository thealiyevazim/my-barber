import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  OnboardingScreen,
  SelectLanguageScreen,
  SelectRoleScreen,
} from "~screens";
import { OnboardingRouteList } from "./RouteTypes";

const Stack = createNativeStackNavigator<OnboardingRouteList>();

const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SelectLanguageScreen"
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen
        name="SelectLanguageScreen"
        component={SelectLanguageScreen}
      />
      <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
