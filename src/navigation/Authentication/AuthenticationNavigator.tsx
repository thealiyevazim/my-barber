import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SelectRoleScreen } from "~screens";

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
