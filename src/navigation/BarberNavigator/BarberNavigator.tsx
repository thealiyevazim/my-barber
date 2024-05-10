import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppHeader } from "~components";
import {
  AuthLoadingScreen,
  EnterFullNameScreen,
  EnterOtpScreen,
  EnterPhoneNumberScreen,
  LoginScreen,
  SignupScreen,
} from "~screens";
import { screenWithCustomHeaderOptions } from "~utils";
import { ClientTabNavigator } from "../TabNavigation";
import { BarberRouteList } from "./RouteTypes";

const Stack = createNativeStackNavigator<BarberRouteList>();

const BarberNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppHeader />,
        ...screenWithCustomHeaderOptions,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="EnterPhoneNumber"
        component={EnterPhoneNumberScreen}
      />
      <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
      <Stack.Screen
        name="EnterFullNameScreen"
        component={EnterFullNameScreen}
      />
      <Stack.Screen
        name="AuthLoadingScreen"
        options={{
          header: () => null,
        }}
        component={AuthLoadingScreen}
      />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="BarberTabNavigator"
        component={ClientTabNavigator}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default BarberNavigator;
