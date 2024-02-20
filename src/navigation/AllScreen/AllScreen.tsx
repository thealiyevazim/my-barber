import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ----- SCREENS ----- //
import TabbarScreen from "../DrowerContent/DrawerContent"
import { BookingBarber } from "~screens/BookingClient";
import { BarbershopInformation } from "~screens/BarbershopInformationScreen";
import { BarberProfileData } from "~screens/BarberProfileData";
import { Language } from "~screens/DropDownScreen/Language";
import { EditProfileData } from "~screens/EditProfileData";
import { TestScreen } from "~screens/TestScreen";
import { AuthenticationRouteList } from "~navigation/Authentication";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabbarScreen" component={TabbarScreen} />
      <Stack.Screen name="bookingbarber" component={BookingBarber} />
      <Stack.Screen name="barbershopinformation" component={BarbershopInformation} />
      <Stack.Screen name="BarberProfileData" component={BarberProfileData} />
      <Stack.Screen name="languageScreen" component={Language} />
      <Stack.Screen name="editProfileData" component={EditProfileData} />
      <Stack.Screen name="testScreen" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default ScreenNavigation;

