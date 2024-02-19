import React, { useCallback } from "react";
import { Container, Text, Button } from "~components";
import { selectedUserTypeSelector, useAppSelector } from "~store";
// import InputContainer from "./components/InputContainer";
const MainImage = require("../../assets/images/HeaderIMage.png");
import { StyleSheet, View, Image, Pressable, StatusBar,TouchableOpacity } from "react-native";
import { palette } from "~utils/theme";
import GmailInput from "~screens/SignInScreen/components/GmailInput";
import PasswordInput from "~screens/SignInScreen/components/PasswordInput";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationNavigationProp } from "~navigation";
import { setUserType, useAppDispatch } from "~store";
import { UserTypesEnum } from "~enums";
// ----- SVG ----- // 
import LeftBack from "~assets/icons/ArrowLeft";

const SignInScreen = () => {
  const userType = useAppSelector(selectedUserTypeSelector);

  const navigation =
    useNavigation<AuthenticationNavigationProp<"SignInScreen">>();
  const dispatch = useAppDispatch();

  const goBack = () => {
    navigation.goBack()
  };

  const onRegisterPress = useCallback(() => {
    navigation.navigate("RegisterScreen");
  }, []);

  const onClientPress = useCallback(() => {
    navigation.navigate("TabbarScreen");
  }, []);

  return (
    <Container style={styles.mainContainer}>
      <StatusBar barStyle="white-content" backgroundColor="transpatent" />
      {/* <Header/> */}
      <View style={styles.topPreviousButtonStyle}>
      <TouchableOpacity style={styles.backButtonStyle} onPress={goBack}>
        <LeftBack  color={palette.white}/>
      </TouchableOpacity>
        <Text style={styles.enterText}>Kirish</Text>
        <View></View>
      </View>
      <Image source={MainImage} style={styles.mainImage} />
      <Container style={styles.whiteRoundedContainer}>
        <GmailInput />
        <PasswordInput />

        <TouchableOpacity style={styles.pressableStyle}>
          <Text style={styles.passwordText}>Parolni unutdingizmi?</Text>
        </TouchableOpacity>

        <View style={styles.enterContainer}>
          <Button
            text={"Tizimga kirish"}
            textColor={palette.white}
            onPress={onClientPress}
            style={styles.enterButtonStyle}
            fontWeight={"bold"}
          />
        </View>

        <Button
          text={"Ro’yhatdan o’tish"}
          textColor={palette.mainBlue}
          fontWeight="regular"
          onPress={onRegisterPress}
          style={styles.registerButtonStyle}
        />
      </Container>
    </Container>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    paddingTop:45,
  },
  mainImage: {
    marginHorizontal:16,
    marginBottom: 60,
  },
  whiteRoundedContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    paddingTop:10,
  },
  pressableStyle: {
    marginTop: 10,
    marginRight: 16,
  },
  passwordText: {
    color: palette.mainBlack,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
  },
  enterContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 180,
  },
  enterButtonStyle: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    padding: 14,
    gap: 10,
  },
  registerButtonStyle: {
    borderRadius: 8,
    marginHorizontal: 16,
    height: 60,
    borderWidth: 2,
    borderColor: palette.mainBlack,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonStyle:{
  },
  topPreviousButtonStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:15,
    width:'90%'
  },
  enterText:{
    fontSize:26,
    fontWeight:'400',

  },
});
