import { Platform, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import LeftBack from '~assets/icons/ArrowLeft'

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
  changeColor?: boolean
}

function HeaderTitleArrow({ onPress, style, title, changeColor }: Props) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.leftBack} onPress={onPress}>
        <LeftBack color={changeColor ? "#fff" : "#000"} />
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default HeaderTitleArrow

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 50 : 30
  },
  leftBack: {
    alignItems: "flex-start",
    width: "10%"
  },
  titleBox: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25
  },
  title: {
    fontWeight: "700",
    fontSize: 22
  }
})