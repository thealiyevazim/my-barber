import { NavigationContainer } from "@react-navigation/native";
import React, { ReactElement } from "react";
import { UserTypesEnum } from "~enums";
import { useIsAuthBarber, useIsAuthClient, useUserTypeSelector } from "~store";
import PublicNavigator from "./PublicNavigator";
import { BarberTabNavigator, ClientTabNavigator } from "./TabNavigation";

export function NavigationProvider(): ReactElement {
  const userType = useUserTypeSelector();
  const isBarberAuth = useIsAuthBarber();
  const isClientAuth = useIsAuthClient();

  const isPublic = !isBarberAuth && !isClientAuth;

  const isBarber = isBarberAuth && userType === UserTypesEnum.Barber;

  const isClient = isClientAuth && userType === UserTypesEnum.Client;

  return (
    <NavigationContainer>
      {isPublic && <PublicNavigator />}

      {isBarber && <BarberTabNavigator />}

      {isClient && < ClientTabNavigator />}
    </NavigationContainer>
  );
}
