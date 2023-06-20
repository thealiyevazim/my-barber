import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SelectRoleScreen, SignInScreen } from "~screens";
import { selectedUserTypeSelector, useAppSelector } from "~store";
import { AuthenticationRouteList } from "./RouteTypes";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

type InitialRouteState = "barber" | "client";

const AuthenticationNavigator = () => {
  const userType = useAppSelector(selectedUserTypeSelector);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
