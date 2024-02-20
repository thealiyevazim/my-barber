import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { palette } from "~utils/theme";

interface TitleProps {
  title: string;
  btnTitle?: string;
  handleClick?: () => void;
}

const TitleComponent = ({ btnTitle, title, handleClick }: TitleProps) => {

  return (
    <View style={styles.twiceText}>
      <Text style={styles.boldText}>{title}</Text>
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