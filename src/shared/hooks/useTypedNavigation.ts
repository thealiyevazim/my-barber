import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  BarberStackParamsList,
  ClientStackParamsList,
  PublicStackParamsList,
  StartStackParamsList,
} from "~navigation/navigationTypes";

type NavigationStack = "public" | "start" | "barber" | "client";

type ParamsList<T> = T extends "public"
  ? PublicStackParamsList
  : T extends "start"
  ? StartStackParamsList
  : T extends "barber"
  ? BarberStackParamsList
  : T extends "client"
  ? ClientStackParamsList
  : never;

export const useTypedNavigation = <T extends NavigationStack = "public">() => {
  return useNavigation<NavigationProp<ParamsList<T>, keyof ParamsList<T>>>();
};
