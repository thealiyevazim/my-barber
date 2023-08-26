import React from "react";
import { createText } from "@shopify/restyle";
import { ComponentProps } from "react";
import { Theme } from "~utils";
import { FONT_TYPES } from "~assets/fonts/types";

const ThemeText = createText<Theme>();

type Props = ComponentProps<typeof ThemeText> & {
  bold?: boolean;
  regular?: boolean;
};

const Text = ({ children, bold, regular, ...props }: Props) => {
  const themeTextProps: ComponentProps<typeof ThemeText> = {
    ...props,
    ...(bold ? { fontFamily: FONT_TYPES.BOLD } : {}),
    ...(regular ? { fontFamily: FONT_TYPES.REGULAR } : {}),
  };
  return <ThemeText {...themeTextProps}>{children}</ThemeText>;
};

export default Text;
