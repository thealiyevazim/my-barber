import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { UserTypesEnum } from "~enums";

export type AuthenticationRouteList = {
  navigate(e: string): unknown;
  goBack(): unknown;
  SelectRoleScreen: undefined;
  SignInScreen: {
    mode: UserTypesEnum;
  };
  RegisterScreen: undefined;
  RegisterNumberScreen: undefined;
  EnterMessagePassword: undefined;
  BarberRegister: undefined
  OpenScreen:undefined;
  EnterenceScreenThree: undefined;
  EnterenceScreenTwo: undefined;
  EnterenceScreenOne: undefined;
  UniqueMessageScreen: undefined;
  ClientScreen: undefined;
  BarberMessageScreen: undefined;
  BarberNameEnter: undefined;
  BarberFullData: undefined;
  BarberProfileData: undefined;
  TabbarScreen: undefined;

  bookingbarber: undefined;
  barbershopinformation: undefined;
  languageScreen: undefined;
  editProfileData: undefined;
  testScreen: undefined;
  historyScreen: undefined
};

export type AuthenticationNavigationProp<
  T extends keyof AuthenticationRouteList
> = StackNavigationProp<AuthenticationRouteList, T>;

export type AuthenticationNavProps<T extends keyof AuthenticationRouteList> =
  StackScreenProps<AuthenticationRouteList, T>;
