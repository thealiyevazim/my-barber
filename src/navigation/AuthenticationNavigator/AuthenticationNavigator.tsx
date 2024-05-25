import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import ClientNavigator from "../ClientNavigator/ClientNavigator";
import OnboardingNavigator from "../OnboardingNavigator/OnboardingNavigator";
import { AuthenticationRouteList } from "./RouteTypes";
import BarberNavigator from "../BarberNavigator/BarberNavigator";
import { useAppSelector } from "~store";
import { UserTypesEnum } from "~enums";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

type InitialRouteState = "barber" | "client";

export const AuthenticationNavigator: React.FC = () => {
  const { userType } = useAppSelector((state) => state.userType);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
      />
      {userType === UserTypesEnum.Barber ? (
        <Stack.Screen name="BarberNavigator" component={BarberNavigator} />
      ) : (
        <Stack.Screen name="ClientNavigator" component={ClientNavigator} />
      )}
    </Stack.Navigator>
  );
};
