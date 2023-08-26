import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions } from "react-native";
import { Container, Pressable, Text } from "~components";
import { UserTypesEnum } from "~enums";
import { AuthenticationNavigationProp } from "~navigation";
import { setUserType, useAppDispatch } from "~store";

const windowHalf = Dimensions.get("window").height / 2;

const SelectRoleScreen = () => {
  const navigation =
    useNavigation<AuthenticationNavigationProp<"SelectRoleScreen">>();
  const dispatch = useAppDispatch();

  const onUserSelectPress = useCallback((userType: UserTypesEnum) => {
    dispatch(setUserType(userType));
    navigation.navigate("SignInScreen", { mode: userType });
  }, []);

  return (
    <Container
      flex={1}
      paddingHorizontal={15}
      paddingVertical={25}
      justifyContent={"flex-end"}
    >
      <Container height={windowHalf}>
        <Text bold variant={"h1"}>
          Hush kelibsiz!
        </Text>
        <Text variant={"h4"} color={"gray"}>
          Kim bo’lib davom etishingizni belgilang.
        </Text>
        <Pressable onPress={() => undefined} variant={"defaultWhite"}>
          <Text color={"defaultBlue"} bold variant={"h2"}>
            Mijoz
          </Text>
        </Pressable>
        <Pressable
          onPress={() => undefined}
          variant={"defaultBlue"}
          marginTop={25}
        >
          <Text bold variant={"h2"}>
            Barber
          </Text>
        </Pressable>
      </Container>
    </Container>
  );
};

export default SelectRoleScreen;
