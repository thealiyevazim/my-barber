import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type AuthenticationRouteList = {
  OnboardingNavigator: undefined;
  ClientNavigator: undefined;
  BarberNavigator: undefined;
};

export type AuthenticationNavigationProp<
  T extends keyof AuthenticationRouteList
> = StackNavigationProp<AuthenticationRouteList, T>;

export type AuthenticationNavProps<T extends keyof AuthenticationRouteList> =
  StackScreenProps<AuthenticationRouteList, T>;
