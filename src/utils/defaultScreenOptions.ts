import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const screenWithCustomHeaderOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerBackVisible: false,
  headerShadowVisible: false,
  headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: "transparent",
  },
};
