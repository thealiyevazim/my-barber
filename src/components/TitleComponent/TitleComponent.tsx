import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import React, { FC } from "react";
import { palette } from "~utils/theme";

interface TitleProps {
  title: string;
  btnTitle?: string;
  handleClick?: () => void;
  size?: boolean,
  height?: boolean
}

const TitleComponent = ({ btnTitle, title, handleClick, size, height }: TitleProps) => {

  return (
    <View style={[height ? {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: 45,
      marginBottom: 10
    } : styles.twiceText]}>
      <Text style={[size ? { fontSize: 16, fontWeight: "500" } : styles.boldText]}>{title}</Text>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.allTextStyle}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default TitleComponent


const styles = StyleSheet.create({
  twiceText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    marginBottom: 10
  },
  boldText: {
    color: palette.mainBlack,
    fontSize: 22,
    fontWeight: "700",
  },
  allTextStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: palette.textLight,
  },
});