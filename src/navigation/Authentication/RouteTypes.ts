import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { UserTypesEnum } from "~enums";

export type AuthenticationRouteList = {
  SelectRoleScreen: undefined;
  SignInScreen: {
    mode: UserTypesEnum;
  };
  RegisterScreen: undefined;
  RegisterNumberScreen: undefined;
  EnterMessagePassword: undefined;
};

export type AuthenticationNavigationProp<
  T extends keyof AuthenticationRouteList
> = StackNavigationProp<AuthenticationRouteList, T>;

export type AuthenticationNavProps<T extends keyof AuthenticationRouteList> =
  StackScreenProps<AuthenticationRouteList, T>;
