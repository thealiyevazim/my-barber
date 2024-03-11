import React, { useState, useCallback } from "react";
import { Container, Text, Button } from "~components";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { palette } from "~utils/theme";
import { Input } from "~components/Input";
import {
  selectedUserTypeSelector,
  setUserType,
  useAppDispatch,
  useAppSelector,
} from "~store";
import { UserTypesEnum } from "~enums";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationNavigationProp } from "~navigation";
// ------ SVG ------ //
import LeftBack from "~assets/icons/ArrowLeft";
const MainImage = require("../../assets/images/HeaderIMage.png");


const RegisterScreen = () => {
  const userType = useAppSelector(selectedUserTypeSelector);

  const navigation =
    useNavigation<AuthenticationNavigationProp<"SignInScreen">>();
  const dispatch = useAppDispatch();

  const onRegisterPress = useCallback(() => {
    navigation.navigate("RegisterNumberScreen");
  }, []);

  const goBack = () => {
    navigation.goBack()
  };


  return (
    <Container style={styles.mainContainer}>
      <View style={styles.topBack}>
        <TouchableOpacity onPress={goBack}>
          <LeftBack color={palette.backWhite} />
        </TouchableOpacity>
        <Text style={styles.enterText}>Kirish</Text>
        <View></View>
      </View>
      <Image source={MainImage} style={styles.mainImageStyle} />
      <Container style={styles.whiteCircleContainer}>
        <View style={styles.inputcontainer}>
          <Input
            placeholder={"Ism"}
            secureTextEntry={false}
            borderWidth={0}
            borderColor={"transparent"}
            margin={0}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Input
            placeholder={"Familiya"}
            secureTextEntry={false}
            borderWidth={0}
            borderColor={"transparent"}
            margin={0}
          />
        </View>
        <TouchableOpacity style={styles.registerButtonContainerStyle}>
          <Button
            text={"Ro'yhatdan o'tish"}
            textColor={palette.white}
            fontWeight={"bold"}
            onPress={onRegisterPress}
            style={styles.registerButtontyle}
          ></Button>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    paddingTop: 45,
  },
  mainImageStyle: {
    // marginHorizontal:16,
    marginVertical: 64,
  },
  whiteCircleContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    padding: 14,
  },
  inputcontainer: {
    flexDirection: "row",
    borderColor: palette.hideGray,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    padding: 0,
    width: '100%'
  },
  registerButtonContainerStyle: {
    marginTop: 260,
  },
  registerButtontyle: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    gap: 10,
    justifyContent: 'center',
    width: '100%'
  },
  topBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },
  enterText: {
    fontSize: 26,
    fontWeight: '400',
    color: palette.backWhite,
  },
});
