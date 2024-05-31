export const colors = {
  appBlack: "#141517",
  appGray: "#D0D7DD",
  iconGray: "#9CA3AF",
  white: "#FFFFFF",
  appBackground: "#F2F4F7",
  appGreen: "#50C878",
  appRed: "#FF3131",
  lightGray: "#E5E7EB",
};

export type ColorsType = (typeof colors)[keyof typeof colors];
