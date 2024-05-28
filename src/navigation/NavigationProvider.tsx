import { NavigationContainer } from "@react-navigation/native";
import React, { ReactElement } from "react";
import { UserTypesEnum } from "~enums";
import { useIsAuthBarber, useUserTypeSelector } from "~store";
import PublicNavigator from "./PublicNavigator";
import { BarberTabNavigator } from "./TabNavigation";

export function NavigationProvider(): ReactElement {
  const userType = useUserTypeSelector();
  const isBarberAuth = useIsAuthBarber();

  const isPublic = !isBarberAuth;

  const isBarber = isBarberAuth && userType === UserTypesEnum.Barber;

  return (
    <NavigationContainer>
      {isPublic && <PublicNavigator />}

      {isBarber && <BarberTabNavigator />}

      {/* <ClientNavigator /> */}
    </NavigationContainer>
  );
}
