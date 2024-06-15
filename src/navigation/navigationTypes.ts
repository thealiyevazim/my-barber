import { UserTypesEnum } from "~enums";
import { Routes } from "./navigationRoutes";

export type PublicStackParamsList = {
  [Routes.onboardingScreen]: undefined;
  [Routes.selectLanguageScreen]: undefined;
  [Routes.selectRoleScreen]: undefined;
  [Routes.loginScreen]: undefined;
  [Routes.registerScreen]: undefined;
};

export type BarberStackParamsList = {
  [Routes.barberCalendarScreen]: undefined;
  [Routes.profileScreen]: { userType: UserTypesEnum };
  [Routes.profileEditScreen]: undefined;
  [Routes.bookedScreen]: undefined;
[Routes.bookAppointmentScreen]: undefined;
};

export type ClientStackParamsList = {
  [Routes.dashboardScreen]: undefined;
  [Routes.profileScreen]: { userType: UserTypesEnum };
  [Routes.bookedScreen]: undefined
};
