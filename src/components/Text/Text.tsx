import React from "react";
import { createText } from "@shopify/restyle";
import { ComponentProps } from "react";
import { Theme } from "~utils";

const ThemeText = createText<Theme>();

type Props = ComponentProps<typeof ThemeText> & {
  medium?: boolean;
  regular?: boolean;
};

const Text = ({ children, medium, regular, ...props }: Props) => {
  const themeTextProps: ComponentProps<typeof ThemeText> = {
    ...props,
    // ...(medium ? { fontFamily: FONT_TYPES.MEDIUM } : {}),
    // ...(regular ? { fontFamily: FONT_TYPES.REGULAR } : {}),
  };
  return <ThemeText {...themeTextProps}>{children}</ThemeText>;
};

export default Text;
