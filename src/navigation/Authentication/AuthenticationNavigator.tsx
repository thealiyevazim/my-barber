import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  BarberHistoryScreen,
  EditProfileData,
  EnterenceScreenThree,
  Language,
  LatestVisitScreen,
  NearbyBarbershopScreen,
  OpenScreen,
  RegisterScreen,
  SelectRoleScreen,
  SignInScreen,
  TopRecommendedScreen,
  RegisterNumberScreen,
  EnterMessagePassword,
  UniqueMessageScreen,
  ClientScreen,
  BarberRegister,
  BarberMessageScreen,
  BarberNameEnter,
  BarberFullData,
  BarberProfileData,
  EnterenceScreenOne,
  ClientEditProfile
} from "~screens";
import { selectedUserTypeSelector, useAppSelector } from "~store";
import { AuthenticationRouteList } from "./RouteTypes";
import TabbarScreen from '../DrowerContent/DrawerContent'
import EnterScreenTwo from "~screens/EnterScreenTwo/EnterScreenTwo";
import { AllScreen } from "~navigation/AllScreen";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

type InitialRouteState = "barber" | "client";

const AuthenticationNavigator = () => {

  const userType = useAppSelector(selectedUserTypeSelector);
  const isAuthed = true;
  return (
    <>
      {isAuthed ? (
        <AllScreen />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Client screens */}
          <Stack.Screen name="OpenScreen" component={OpenScreen} />
          <Stack.Screen name="EnterenceScreenThree" component={EnterenceScreenThree} />
          <Stack.Screen name="EnterenceScreenTwo" component={EnterScreenTwo} />
          <Stack.Screen name="EnterenceScreenOne" component={EnterenceScreenOne} />
          <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="RegisterNumberScreen" component={RegisterNumberScreen} />
          <Stack.Screen name="EnterMessagePassword" component={EnterMessagePassword} />
          <Stack.Screen name="UniqueMessageScreen" component={UniqueMessageScreen} />
          <Stack.Screen name="ClientScreen" component={ClientScreen} />
          <Stack.Screen name="languageScreen" component={Language} />
          <Stack.Screen name="editProfileData" component={EditProfileData} />
          <Stack.Screen name="historyScreen" component={BarberHistoryScreen} />
          <Stack.Screen name="latestVisit" component={LatestVisitScreen} />
          <Stack.Screen name="nearbyBarbershop" component={NearbyBarbershopScreen} />
          <Stack.Screen name="topRecommended" component={TopRecommendedScreen} />
          <Stack.Screen name="clientEdit" component={ClientEditProfile} />
          {/* Barber screens */}
          <Stack.Screen name="BarberRegister" component={BarberRegister} />
          <Stack.Screen name="BarberMessageScreen" component={BarberMessageScreen} />
          <Stack.Screen name="BarberNameEnter" component={BarberNameEnter} />
          <Stack.Screen name="BarberFullData" component={BarberFullData} />
          <Stack.Screen name="BarberProfileData" component={BarberProfileData} />
          <Stack.Screen name="TabbarScreen" component={TabbarScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AuthenticationNavigator;
