import React, { useCallback, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { FONT_TYPES } from "~assets/fonts/types";
import ClosedEye from "~assets/images/eye-closed.png";
import OpenedEye from "~assets/images/eye-opened.png";
import FlagIcon from "~assets/images/uzb-flag.png";
import { colors } from "~utils";
import { AppText } from "../AppText";

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  rightIcon?: ImageSourcePropType;
  placeholder: string;
  isPhoneNumber?: boolean;
  inputStyles?: StyleProp<ViewStyle>;
  onRightPress?: () => void;
  isSecure?: boolean;
};

export const AppInput: React.FC<Props> = ({
  rightIcon,
  style,
  placeholder,
  isPhoneNumber,
  inputStyles,
  onRightPress,
  isSecure,
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, [isVisible]);

  return (
    <View
      style={[
        styles.container,
        style,
        { justifyContent: isPhoneNumber ? "flex-start" : "space-between" },
      ]}
    >
      {isPhoneNumber ? (
        <View style={styles.flagContainer}>
          <Image source={FlagIcon} />
          <AppText style={{ fontSize: 16 }}> +998</AppText>
        </View>
      ) : null}
      <TextInput
        placeholder={placeholder}
        verticalAlign="middle"
        style={[inputStyles, styles.input]}
        secureTextEntry={isSecure && !isVisible}
        {...otherProps}
      />

      {isSecure ? (
        <Pressable onPress={handleVisibility}>
          <Image source={isVisible ? OpenedEye : ClosedEye} />
        </Pressable>
      ) : null}

      {rightIcon ? (
        <Pressable onPress={onRightPress}>
          <Image source={rightIcon} />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderWidth: 1.5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: colors.appBlack,
    marginBottom: 15,
  },
  flagContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginRight: 10,
  },
  input: {
    width: "90%",
    fontSize: 16,
    fontFamily: FONT_TYPES.MEDIUM,
  },
});
