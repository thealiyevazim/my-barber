import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ----- SCREENS ----- //
import TabbarScreen from "../DrowerContent/DrawerContent"
import { AuthenticationRouteList } from "~navigation/Authentication";
import { BarberHistoryScreen, BarberProfileData, BarbershopInformation, BookingBarber, ClientEditProfile, EditProfileData, Language, LatestVisitScreen, NearbyBarbershopScreen, TopRecommendedScreen } from "~screens";

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
      <Stack.Screen name="historyScreen" component={BarberHistoryScreen} />
      <Stack.Screen name="latestVisit" component={LatestVisitScreen} />
      <Stack.Screen name="nearbyBarbershop" component={NearbyBarbershopScreen} />
      <Stack.Screen name="topRecommended" component={TopRecommendedScreen} />
      <Stack.Screen name="clientEdit" component={ClientEditProfile} />
    </Stack.Navigator>
  );
};

export default ScreenNavigation;