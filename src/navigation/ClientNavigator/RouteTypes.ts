import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type ClientRouteList = {
  LoginScreen: undefined;
  EnterPhoneNumber: undefined;
  EnterOtpScreen: { phoneNumber: string };
  EnterFullNameScreen: { phoneNumber: string };
  AuthLoadingScreen: undefined;
};

export type ClientNavigationProp<T extends keyof ClientRouteList> =
  StackNavigationProp<ClientRouteList, T>;

export type ClientRouteProp<RouteName extends keyof ClientRouteList> =
  RouteProp<ClientRouteList, RouteName>;

export type ClientNavProps<T extends keyof ClientRouteList> = StackScreenProps<
  ClientRouteList,
  T
>;
