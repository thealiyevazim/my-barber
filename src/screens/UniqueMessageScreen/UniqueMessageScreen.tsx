import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView ,Image,TouchableOpacity} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";
import { palette } from "~utils/theme";
import { Container, Button } from "~components";
// ------ IMG ------ //
const ReverseMainIMage = require('../../assets/images/ReaverseHeaderIMage.png');
// ----- SVG ----- // 
import LeftBack from "~assets/icons/ArrowLeft";

const CELL_COUNT = 4;

const UniqueMessageScreen = () => {

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const goNextPage = () => {
    navigation.navigate("TabbarScreen")
  }
  const goEditNumber = () => {
    navigation.navigate("RegisterNumberScreen")
  }
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container style={styles.mainContainer}>
      <View style={styles.topBackContainer}>
        <TouchableOpacity  onPress={goBack}>
            <LeftBack color={palette.backWhite} hitSlop={{left:10,right:10,top:10,bottom:10}} />
        </TouchableOpacity>
        <View style={styles.messageCentrBox}>
        <Text style={styles.openTextStyle}>SMS</Text>
        <Text style={styles.openTextRightStyle}>kodni kiritnig</Text>
        </View>
        <Text> </Text>
      </View>
      <View style={styles.imageDivStyle}>
        <Text style={styles.centerTextStyle}>Faollashtirish kodi raqamingizga yuborildi</Text>
        <Text style={styles.numberTextStyle}>  +998 94 *** ** 77</Text>

      </View>
      <TouchableOpacity style={styles.prevContainer} onPress={goEditNumber}>
        <Text style={styles.prevButtonText}>Raqamni o'zgartirish!</Text>
      </TouchableOpacity>
      <Container style={styles.topContainer}>
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
        <View style={styles.buttonContainer}>
          <Button
            text={"Parol qabul qilish"}
            textColor={palette.white}
            fontWeight={"bold"}
            style={styles.passwordButton}
            onPress={goNextPage}
          />
        </View>
      </Container>
    </Container>
  );
};

export default UniqueMessageScreen;

const styles = StyleSheet.create({
  root: { flex: 1, padding: 25 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 60,
    height: 45,
    lineHeight: 38,
    fontSize: 26,
    borderWidth: 2,
    borderColor:palette.totalGray,
    textAlign: "center",
    justifyContent: "space-evenly",
    borderRadius: 8,
  },
  focusCell: {
    borderColor: palette.mainBlack,
    color:palette.mainBlack,
  },
  topContainer: {
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
    marginTop: 15,
    flex:1,
  },
  buttonContainer: {
    marginHorizontal:16,
    marginTop: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordButton: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    justifyContent:'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: palette.mainBlack,
    flexDirection:'column',
    paddingTop:45,
  },
  mainImage:{
    resizeMode:'cover',
  },
  topBackContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  openTextStyle:{
    color:palette.white,
    fontSize:26,
    fontWeight:'400',
   
  },
  imageDivStyle:{
    paddingHorizontal:10,
    marginVertical:15,
    alignItems:'center',
    flexDirection:'column',
    // gap:10,
  },
  centerTextStyle:{
    color:palette.backWhite,
    width:230,
    fontSize:12,
  },
  numberTextStyle:{
    color:palette.backWhite,
    fontSize:12,
  },
  messageCentrBox:{
    flexDirection:'row',
    alignItems:'baseline',
    gap:5,
  },
  openTextRightStyle:{
    fontSize:20,
    fontWeight:'400',
    color:palette.backWhite,
  },
  prevButtonText:{
    fontSize:12,
    color:palette.backWhite,
    fontWeight:'400',
    textDecorationLine:"underline",
  },
  prevContainer:{
    alignItems:'center',
    marginTop:75,
  },
});
