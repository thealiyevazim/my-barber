import {
  StyleSheet,
  View,
  Image,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Container, Text, Button, Input } from "~components";
import { palette } from "~utils/theme";
import { AuthenticationNavigationProp } from "~navigation";
import { useNavigation } from "@react-navigation/native";
import {
  selectedUserTypeSelector,
  setUserType,
  useAppDispatch,
  useAppSelector,
} from "~store";
import { CustomInput } from "~components/CustomInput";
const FlagImg = require("../../assets/images/FlagUzb.png");
import LeftBack from "~assets/icons/ArrowLeft";
const HeaderIMage = require("../../assets/images/HeaderIMage.png");

const BarberNameEnter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const goNextPage = () => {
    navigation.navigate("BarberFullData")
  }

  return (
    <Container
      // flex={1}
      style={styles.mainContainer}
    >
      <StatusBar backgroundColor="transparent" barStyle="white-content" />
      <View style={styles.topBackContainer}>
        <TouchableOpacity onPress={goBack}>
          <LeftBack
            color="#ffff"
            hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
          />
        </TouchableOpacity>
      </View>
      <Image source={HeaderIMage} style={styles.topImage} />
      <Container style={styles.whiteRoundedContainer}>
        <View style={styles.selectNumerContainer}>
          <CustomInput
            placeholder={"Email"}
            containerStyle={undefined}
            onChangeText={setEmail}
            error={undefined}
          />
          <CustomInput
            placeholder={"Password"}
            containerStyle={undefined}
            onChangeText={setPassword}
            error={undefined}
          /> 
          
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={"Ro'yhatdan o'tish"}
            textColor={palette.white}
            fontWeight={"bold"}
            style={styles.registerButtonStyle}
            onPress={goNextPage}
          ></Button>
        </View>
      </Container>
    </Container>
  );
};

export default BarberNameEnter;

const styles = StyleSheet.create({
  registerButtonStyle: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
  },
  telNumerText: {
    marginLeft: 10,
    color: palette.black,
    fontSize: 14,
  },
  buttonContainer: {
    borderRadius: 8,
    width: "100%",
    marginBottom: 10,
    marginTop:230,
  },
  pressableStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectNumerContainer: {
    flexDirection: "column",
    gap:10,
    paddingTop:40,
  },
  whiteRoundedContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    padding: 15,
    marginTop: 30,
  },
  topImage: {
    marginVertical: 45,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    paddingTop: 45,
  },
  flagImageStyle: {
    height: 20,
    width: 20,
  },
  topBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  openTextStyle: {
    color: palette.white,
    fontSize: 26,
    fontWeight: "400",
  },
});
