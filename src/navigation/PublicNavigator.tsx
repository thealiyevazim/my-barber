import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PublicNavigationRoutes } from "./config";
import { PublicStackParamsList } from "./navigationTypes";

const Stack = createNativeStackNavigator<PublicStackParamsList>();

const PublicNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {PublicNavigationRoutes.map(({ component, name }) => {
        return <Stack.Screen name={name} component={component} key={name} />;
      })}
    </Stack.Navigator>
  );
};

export default PublicNavigator;
