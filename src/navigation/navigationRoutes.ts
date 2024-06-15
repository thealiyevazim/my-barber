export const Routes = {
  dashboardScreen: "dashboardScreen",
  calendarScreen: "calendarScreen",
  profileScreen: "profileScreen",
  onboardingScreen: "onboardingScreen",
  selectRoleScreen: "selectRoleScreen",
  selectLanguageScreen: "selectLanguageScreen",
  loginScreen: "loginScreen",
  registerScreen: "registerScreen",
  barberCalendarScreen: "barberCalendarScreen",
  profileEditScreen: "profileEditScreen",
  bookedScreen: "bookedScreen",
  bookAppointmentScreen: "bookAppointmentScreen"
} as const;

export type RoutesType = (typeof Routes)[keyof typeof Routes];
