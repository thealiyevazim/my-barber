import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type BarberRouteList = {
  LoginScreen: undefined;
  EnterPhoneNumber: undefined;
  EnterOtpScreen: { phoneNumber: string };
  EnterFullNameScreen: { phoneNumber: string };
  AuthLoadingScreen: undefined;
  SignupScreen: undefined;

  BarberTabNavigator: undefined;
};

export type BarberNavigationProp<T extends keyof BarberRouteList> =
  StackNavigationProp<BarberRouteList, T>;

export type BarberRouteProp<RouteName extends keyof BarberRouteList> =
  RouteProp<BarberRouteList, RouteName>;

export type BarberNavProps<T extends keyof BarberRouteList> = StackScreenProps<
  BarberRouteList,
  T
>;
