import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ClientNavigator from "../ClientNavigator/ClientNavigator";
import OnboardingNavigator from "../OnboardingNavigator/OnboardingNavigator";
import { AuthenticationRouteList } from "./RouteTypes";
import BarberNavigator from "../BarberNavigator/BarberNavigator";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

type InitialRouteState = "barber" | "client";

export const AuthenticationNavigator: React.FC = () => {
  // const userType = useAppSelector(selectedUserTypeSelector);
  // const isAuthed = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
      />
      <Stack.Screen name="ClientNavigator" component={ClientNavigator} />
      <Stack.Screen name="BarberNavigator" component={BarberNavigator} />
    </Stack.Navigator>
  );
};
