import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RegisterScreen, SelectRoleScreen, SignInScreen } from "~screens";
import { selectedUserTypeSelector, useAppSelector } from "~store";
import { AuthenticationRouteList } from "./RouteTypes";
import { RegisterNumberScreen } from "~screens/RegisterNumberScreen";
import { EnterMessagePassword } from "~screens/EnterMessagePassword";
import ClientScreen from "~screens/MainClientScreen/ClientScreen";
import BarberRegister from "~screens/BarberRegisterScreen/BarberRegister";
import { BarberMessageScreen } from "~screens/BarberMessage";
import AllScreens from "../AllScreen/AllScreen";
import {UniqueMessageScreen} from "~screens/UniqueMessageScreen";
import { BarberNameEnter } from "~screens/BarberNameEnter";
import { BarberFullData } from "~screens/BarberFullData";
import { BarberProfileData } from "~screens/BarberProfileData";
import TabbarScreen from '../DrowerContent/DrawerContent'
import { EnterenceScreenOne } from "~screens/EnterenceScreenOne";
import EnterenceScreenTwo from "~screens/EnterScreenTwo/EnterScreenTwo";
import EnterenceScreenThree from "~screens/EnterenceScreenThree/EnterenceScreenThree";
import { OpenScreen } from "~screens/OpenScreen";

const Stack = createNativeStackNavigator<AuthenticationRouteList>();

type InitialRouteState = "barber" | "client";

const AuthenticationNavigator = () => {
  const userType = useAppSelector(selectedUserTypeSelector);
  const isAuthed = true;
  return (
    <>
      {isAuthed ? (
        <AllScreens />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Client screens */}
          <Stack.Screen name="OpenScreen" component={OpenScreen} />
          <Stack.Screen name="EnterenceScreenThree" component={EnterenceScreenThree} />
          <Stack.Screen name="EnterenceScreenTwo" component={EnterenceScreenTwo} />
          <Stack.Screen name="EnterenceScreenOne" component={EnterenceScreenOne} />
          <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="RegisterNumberScreen" component={RegisterNumberScreen} />
          <Stack.Screen name="EnterMessagePassword" component={EnterMessagePassword} />
          <Stack.Screen name="UniqueMessageScreen" component={UniqueMessageScreen} />
          <Stack.Screen name="ClientScreen" component={ClientScreen} />
          {/* Barber screens */}
          <Stack.Screen name="BarberRegister" component={BarberRegister} />
          <Stack.Screen name="BarberMessageScreen" component={BarberMessageScreen} />
          <Stack.Screen name="BarberNameEnter" component={BarberNameEnter}/>
          <Stack.Screen name="BarberFullData" component={BarberFullData}/>
          <Stack.Screen name="BarberProfileData" component={BarberProfileData}/>
          <Stack.Screen name="TabbarScreen" component={TabbarScreen}/>
        </Stack.Navigator>
      )}
    </>
  );
};

export default AuthenticationNavigator;
