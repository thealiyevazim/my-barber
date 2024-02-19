import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions, Image } from "react-native";
import { Button, Container, Pressable, Text } from "~components";
import { UserTypesEnum } from "~enums";
import { AuthenticationNavigationProp } from "~navigation";
import { setUserType, useAppDispatch } from "~store";
import { palette } from "~utils/theme";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";

const SelectRoleScreen = () => {
  
  const navigation =
    useNavigation<AuthenticationNavigationProp<"SelectRoleScreen">>();

  const dispatch = useAppDispatch();

  const onUserSelectPress = useCallback((userType: UserTypesEnum) => {
    dispatch(setUserType(userType));
    navigation.navigate("SignInScreen", { mode: userType });
  }, []);

  const onBarberPress = useCallback(() => {
    navigation.navigate("BarberRegister");
  }, []);

  // const onBarberPress = () => onUserSelectPress(UserTypesEnum.Barber);
  const onClientPress = () => onUserSelectPress(UserTypesEnum.Client);

  const windowHalf = Dimensions.get("window").height / 2;

  return (
    <Container style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Container alignItems={"center"}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/images/barberNewBlackImage.png")}
        />
      </Container>
      <Container height={windowHalf - 50} justifyContent={"space-evenly"}>
        <Container>
          <Text bold variant={"h1"} marginBottom={10} style={styles.textStyle}>
            Xush kelibsiz!
          </Text>
          <Text variant={"h4"} color={"gray"}>
            Kim bo’lib davom etishingizni belgilang.
          </Text>
        </Container>
        <Container>
          <Button
            text={"Mijoz"}
            textColor={palette.white}
            onPress={onClientPress}
            style={styles.clientButton}
          />
          <Button
            text={"Barber"}
            textColor={palette.white}
            onPress={onBarberPress}
            style={styles.barberButton}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default SelectRoleScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: palette.mainBlack,
  },
  imageStyle: {
    marginTop: 20,
    width: 255,
    height: 255,
    borderRadius: 130,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    justifyContent: "space-around",
  },
  clientButton: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    padding: 14,
  },
  barberButton: {
    marginTop: 25,
    backgroundColor: palette.mainBlack,
    borderWidth: 2,
    borderColor: palette.white,
    borderRadius: 8,
    padding: 14,
  },
});
