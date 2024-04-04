import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type OnboardingRouteList = {
  SelectLanguageScreen: undefined;
  OnboardingScreen: undefined;
};

export type OnboardingNavigationProp<T extends keyof OnboardingRouteList> =
  StackNavigationProp<OnboardingRouteList, T>;

export type OnboardingNavProps<T extends keyof OnboardingRouteList> =
  StackScreenProps<OnboardingRouteList, T>;
