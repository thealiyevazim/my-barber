import React, { useMemo } from "react";
import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import RightIcon from "~assets/images/arrow-right.png";
import { colors } from "~utils";

type Props = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export const CircleButon: React.FC<Props> = ({
  disabled,
  style,
  ...otherProps
}) => {
  const buttonColor = useMemo(() => {
    if (disabled) {
      return colors.appGray;
    } else return colors.appBlack;
  }, [disabled]);

  return (
    <Pressable
      style={[style, { backgroundColor: buttonColor }, styles.container]}
      disabled={disabled}
      {...otherProps}
    >
      <Image source={RightIcon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
