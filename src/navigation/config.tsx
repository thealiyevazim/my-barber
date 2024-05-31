import { ComponentType } from "react";
import {
  CalendarScreen,
  DashboardScreen,
  LoginScreen,
  OnboardingScreen,
  ProfileScreen,
  SelectLanguageScreen,
  SelectRoleScreen,
  ProfileEditScreen,
} from "~screens";
import { Routes } from "./navigationRoutes";
import {
  BarberStackParamsList,
  ClientStackParamsList,
  PublicStackParamsList,
} from "./navigationTypes";

export interface NavigationRoute<Stack> {
  component: ComponentType;
  name: keyof Stack;
}

// Public Stack
export const PublicNavigationRoutes: NavigationRoute<PublicStackParamsList>[] =
  [
    { component: SelectLanguageScreen, name: Routes.selectLanguageScreen },
    { component: OnboardingScreen, name: Routes.onboardingScreen },
    { component: SelectRoleScreen, name: Routes.selectRoleScreen },
    { component: LoginScreen, name: Routes.loginScreen },
    // { component: RegisterScreen, name: Routes.registerScreen },
  ];

// Barber Stack
export const BarberNavigationRoutes: NavigationRoute<BarberStackParamsList>[] =
  [
    { component: CalendarScreen, name: Routes.barberCalendarScreen },
    { component: ProfileScreen, name: Routes.profileScreen },
    { component: ProfileEditScreen, name: Routes.profileEditScreen },
  ];

// Client Stack
export const ClientNavigationRoutes: NavigationRoute<ClientStackParamsList>[] =
  [{ component: DashboardScreen, name: Routes.dashboardScreen }];
