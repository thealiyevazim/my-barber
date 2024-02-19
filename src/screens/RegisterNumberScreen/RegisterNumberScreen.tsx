import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationNavigationProp } from "~navigation";
import {
  selectedUserTypeSelector,
  setUserType,
  useAppDispatch,
  useAppSelector,
} from "~store";
import { UserTypesEnum } from "~enums";
import { Container, Text, Button, Input } from "~components";
import { palette } from "~utils/theme";
const FlagImg = require("../../assets/images/FlagUzb.png");
// ----- SVG ----- //
import LeftBack from "~assets/icons/ArrowLeft";

const ReverseMainIMage = require("../../assets/images/ReaverseHeaderIMage.png");
const RegisterNumberScreen = () => {
  const userType = useAppSelector(selectedUserTypeSelector);
  const navigation =
    useNavigation<AuthenticationNavigationProp<"SignInScreen">>();
  const dispatch = useAppDispatch();
  const onPressPasswordMessage = useCallback(() => {
    navigation.navigate("EnterMessagePassword");
  }, []);
  const goBack = () => {
    navigation.goBack();
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
      <Image source={ReverseMainIMage} style={styles.reverseMainImage} />
      <Container style={styles.whiteCircleContainer}>
        <View style={styles.numberInputContainer}>
          <TouchableOpacity style={styles.numberPressStyle}>
            <Image source={FlagImg} style={{ height: 20, width: 20 }} />
            <Text style={styles.flagText}>+998</Text>
          </TouchableOpacity>
          <Input
            placeholder={"Telefon raqamingizni kiriting"}
            secureTextEntry={false}
            borderWidth={0}
            borderColor={"transparent"}
            margin={0}
            inputMode="numeric"
            style={styles.innerInputStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={"Ro'yhatdan o'tish"}
            textColor={palette.white}
            fontWeight={"bold"}
            onPress={onPressPasswordMessage}
            style={styles.registerButton}
          ></Button>
        </View>
      </Container>
    </Container>
  );
};

export default RegisterNumberScreen;

const styles = StyleSheet.create({
  innerInputStyle:{
    width:'100%',
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    paddingTop: 45,
  },
  topBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  enterText: {
    fontSize: 26,
    fontWeight: "400",
    color: palette.backWhite,
  },
  reverseMainImage: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  whiteCircleContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    paddingTop: 20,
    paddingHorizontal:14,
  },
  flagText: {
    marginLeft: 10,
    color: palette.black,
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
  },
  numberInputContainer: {
    flexDirection: "row",
    borderColor: palette.hideGray,
    borderWidth: 1,
    borderRadius:6,
    paddingHorizontal: 16,
    padding: 0,
  },
  numberPressStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 390,
    borderRadius: 8,
  },
});
