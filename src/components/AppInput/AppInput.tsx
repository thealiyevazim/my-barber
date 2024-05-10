import React, { useCallback, useRef, useState } from "react";
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
import { Entypo } from "@expo/vector-icons";

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  rightIcon?: ImageSourcePropType;
  leftIcon?: string;
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
  leftIcon,
  ...otherProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, [isVisible]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View
      style={[
        styles.container,
        style,
        { borderColor: isFocused ? colors.appBlack : colors.appGray },
        { justifyContent: isPhoneNumber ? "flex-start" : "space-between" },
      ]}
    >
      {isPhoneNumber ? (
        <View style={styles.flagContainer}>
          <Image source={FlagIcon} />
          <AppText style={{ fontSize: 16 }}> +998</AppText>
        </View>
      ) : null}
      {leftIcon ? (
        <Entypo
          size={24}
          color={colors.iconGray}
          name={leftIcon as "magnifying-glass"}
        />
      ) : null}
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        verticalAlign="middle"
        style={[inputStyles, styles.input]}
        secureTextEntry={isSecure && !isVisible}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    height: "100%",
    fontSize: 16,
    fontFamily: FONT_TYPES.MEDIUM,
  },
});
