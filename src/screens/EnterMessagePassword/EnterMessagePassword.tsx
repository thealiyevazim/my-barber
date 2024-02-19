import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import { palette } from "~utils/theme";
import { Container, Text, Button, Input } from "~components";
import { AuthenticationNavigationProp } from "~navigation";
import {
  selectedUserTypeSelector,
  setUserType,
  useAppDispatch,
  useAppSelector,
} from "~store";
import { useNavigation } from "@react-navigation/native";
// ------ SVG ------ //
import LeftBack from "~assets/icons/ArrowLeft";

const FlagImg = require("../../assets/images/FlagUzb.png");
const ReverseMainIMage = require("../../assets/images/ReaverseHeaderIMage.png");

const EnterMessagePassword = () => {
  const navigation =
    useNavigation<AuthenticationNavigationProp<"SignInScreen">>();
  const dispatch = useAppDispatch();

  const onPressMessage = useCallback(() => {
    navigation.navigate("UniqueMessageScreen");
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
      <Image source={ReverseMainIMage} style={styles.reverseMainImageStyle} />

      <Container style={styles.whiteCircleContainer}>
        <View style={styles.numberContainerStyle}>
          <TouchableOpacity style={styles.touchableContainerStyle}>
            <Image source={FlagImg} style={{ height: 20, width: 20 }} />
            <Text style={styles.leftFlagText}>+998</Text>
          </TouchableOpacity>

          <Text style={styles.numberText}>94 125 99 77</Text>
        </View>

        <View
          style={styles.passwordButtonContainer}
        >
          <Button
            text={"Parol qabul qilish"}
            textColor={palette.white}
            fontWeight={"bold"}
            onPress={onPressMessage}
            style={styles.passwordButtonStyle}
          ></Button>
        </View>
      </Container>
    </Container>
  );
};

export default EnterMessagePassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    paddingTop: 45,
  },
  reverseMainImageStyle: {
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
    paddingHorizontal:16,
  },
  numberText: {
    color: palette.mainBlack,
  },
  leftFlagText: {
    marginLeft: 10,
    color: palette.mainBlack,
    fontSize: 14,
  },
  touchableContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberContainerStyle: {
    flexDirection: "row",
    borderColor: palette.hideGray,
    borderWidth: 1,
    borderRadius:6,
    height:50,
    alignItems:'center',
    paddingHorizontal:14,
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
  passwordButtonStyle:{
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    justifyContent:'center',
  },
  passwordButtonContainer:{
    borderRadius: 8,
    marginTop:390,
  },
});
