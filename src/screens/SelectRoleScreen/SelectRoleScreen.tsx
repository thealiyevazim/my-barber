import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions } from "react-native";
import { Container, Pressable, Text } from "~components";
import { UserTypesEnum } from "~enums";
import { AuthenticationNavigationProp } from "~navigation";
import { setUserType, useAppDispatch } from "~store";
import { SelectRoleTemplate } from "~templates";

const SelectRoleScreen = () => {
  const navigation =
    useNavigation<AuthenticationNavigationProp<"SelectRoleScreen">>();

  const dispatch = useAppDispatch();

  const onUserSelectPress = useCallback((userType: UserTypesEnum) => {
    dispatch(setUserType(userType));
    navigation.navigate("SignInScreen", { mode: userType });
  }, []);

  return (
    <SelectRoleTemplate
      onBarberPress={() => onUserSelectPress(UserTypesEnum.Barber)}
      onClientPress={() => onUserSelectPress(UserTypesEnum.Client)}
    />
  );
};

export default SelectRoleScreen;
