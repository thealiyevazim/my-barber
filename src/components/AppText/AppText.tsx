import React from "react";
import { Text, TextProps } from "react-native";
import { FONT_TYPES } from "~assets/fonts/types";

type Props = TextProps & {
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
};

export const AppText: React.FC<Props> = ({
  bold,
  medium = true,
  semibold,
  style,
  ...otherProps
}) => {
  const fontFamily = {
    ...(medium ? { fontFamily: FONT_TYPES.MEDIUM } : {}),
    ...(semibold ? { fontFamily: FONT_TYPES.SEMIBOLD } : {}),
    ...(bold ? { fontFamily: FONT_TYPES.BOLD } : {}),
  };

  return <Text style={[style, fontFamily]} {...otherProps} />;
};
