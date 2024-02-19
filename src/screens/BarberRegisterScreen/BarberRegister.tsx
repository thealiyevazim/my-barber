import { StyleSheet, View, Image, Pressable, StatusBar,TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
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
const FlagImg = require("../../assets/images/FlagUzb.png");
import LeftBack from "~assets/icons/ArrowLeft";
const ReverseMainIMage = require("../../assets/images/ReaverseHeaderIMage.png");

const BarberRegister = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  // const navigation =
  //   useNavigation<AuthenticationNavigationProp<"SignInScreen">>();
  // const dispatch = useAppDispatch();

  const onPressBarberMessage = useCallback(() => {
    navigation.navigate("BarberMessageScreen");
  }, []);

  return (
    <Container 
      // flex={1}
    style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" barStyle="white-content" />
      <View style={styles.topBackContainer}>
        <TouchableOpacity  onPress={goBack}>
            <LeftBack color="#ffff" hitSlop={{left:10,right:10,top:10,bottom:10}} />
        </TouchableOpacity>
        <Text style={styles.openTextStyle}>Kirish</Text>
        <Text></Text>
      </View>
      <Image source={ReverseMainIMage} style={styles.topImage} />
      <Container style={styles.whiteRoundedContainer}>
        <View style={styles.selectNumerContainer}>
          <Pressable style={styles.pressableStyle}>
            <Image source={FlagImg} style={styles.flagImageStyle} />
            <Text style={styles.telNumerText}>+998</Text>
          </Pressable>
          <Input
            placeholder={"Telefon raqamingizni kiriting"}
            secureTextEntry={false}
            borderWidth={0}
            borderColor={"transparent"}
            margin={0}
            inputMode="numeric"
            style={styles.innerinputStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={"Ro'yhatdan o'tish"}
            textColor={palette.white}
            fontWeight={"bold"}
            onPress={onPressBarberMessage}
            style={styles.registerButtonStyle}
          ></Button>
        </View>
      </Container>
    </Container>
  );
};

export default BarberRegister;

const styles = StyleSheet.create({
  innerinputStyle:{
    width:'100%',
  },
  registerButtonStyle: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    justifyContent:'center',
  },
  telNumerText: {
    marginLeft: 10,
    color: palette.black,
    fontSize: 14,
  },
  buttonContainer: {
    borderRadius: 8,
    width:'100%',
    marginBottom:10,
    position:'absolute',
    bottom:10,
    left:15,
  },
  pressableStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectNumerContainer: {
    flexDirection: "row",
    borderColor: palette.hideGray,
    borderWidth: 1,
    borderRadius:6,
    paddingHorizontal:14,
  },
  whiteRoundedContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    paddingHorizontal:16,
    paddingTop:20,
    marginTop:30,
  },
  topImage: {
    marginVertical: 45,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    paddingTop:45,
  },
  flagImageStyle:{
    height: 20,
    width: 20,
  },
  topBackContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    width:'100%',
  },
  openTextStyle:{
    color:palette.white,
    fontSize:26,
    fontWeight:'400',
  },
});
