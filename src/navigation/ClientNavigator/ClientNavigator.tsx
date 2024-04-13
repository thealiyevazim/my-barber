import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppHeader } from "~components";
import {
  AuthLoadingScreen,
  EnterFullNameScreen,
  EnterOtpScreen,
  EnterPhoneNumberScreen,
  LoginScreen,
} from "~screens";
import { screenWithCustomHeaderOptions } from "~utils";
import { ClientTabNavigator } from "../TabNavigation";
import { ClientRouteList } from "./RouteTypes";

const Stack = createNativeStackNavigator<ClientRouteList>();

const ClientNavigator: React.FC = () => {
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
          gestureDirection: "vertical",
        }}
        component={AuthLoadingScreen}
      />
      <Stack.Screen
        name="ClientTabNavigator"
        component={ClientTabNavigator}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default ClientNavigator;
