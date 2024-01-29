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
    allTextStyle: {
        fontSize: 12,
        fontWeight: "400",
        color: palette.textLight,
      },
      boldText: {
        color: palette.mainBlack,
        fontSize: 22,
        fontWeight: "700",
      },
      twiceText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical: 10,
      },
});