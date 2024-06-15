import React from "react";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors, windowHeight, windowWidth } from "~utils";
import BackgroundImage from "~assets/images/background-image.png";

type Props = {
  bottomStyles?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  bgImage?: boolean;
};

export const BottomComponent: React.FC<Props> = ({
  children,
  bottomStyles,
  bgImage
}) => {
  return (
    <View style={styles.container}>
      {!bgImage &&
        <Image source={BackgroundImage} style={styles.background} />
      }
      <View style={[styles.bottomView, bottomStyles]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  background: { alignSelf: "center", marginBottom: "30%" },
  bottomView: {
    bottom: "-5%",
    width: windowWidth,
    paddingVertical: 40,
    paddingHorizontal: 16,
    height: windowHeight / 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
});
