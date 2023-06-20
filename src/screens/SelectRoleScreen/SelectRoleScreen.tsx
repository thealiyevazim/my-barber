import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Container, Pressable, Text } from "~components";
import { UserTypesEnum } from "~enums";
import { AuthenticationNavigationProp } from "~navigation";
import { setUserType, useAppDispatch } from "~store";

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
      backgroundColor={"white"}
      paddingHorizontal={20}
      justifyContent={"space-between"}
    >
      <Container marginTop={35}>
        <Text color={"black"} variant={"h1"} textAlign={"left"}>
          Who would you like to continue as?
        </Text>
      </Container>
      <Container marginBottom={15}>
        <Pressable
          marginBottom={15}
          variant={"defaultBlue"}
          onPress={() => onUserSelectPress(UserTypesEnum.Client)}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            I'm client
          </Text>
        </Pressable>
        <Pressable
          variant={"defaultBordered"}
          onPress={() => onUserSelectPress(UserTypesEnum.Barber)}
        >
          <Text style={{ color: "#11145A", fontWeight: "bold", fontSize: 20 }}>
            I'm barber
          </Text>
        </Pressable>
      </Container>
    </Container>
  );
};

export default SelectRoleScreen;
