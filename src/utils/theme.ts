import { createTheme } from "@shopify/restyle";

const palette = {
  white: "#fff",
  black: "#000",
  gray: "#808080",
  pressableColor: "#EB7640",
  defaultBlue: "#ADEFD1FF",
  defaultGreen: "#f9f7be",
};

// const Gradients = {};

const Spacing = {
  none: 0,
  s: 5,
  m: 10,
  l: 15,
  x: 20,
  xs: 25,
  xm: 30,
  xl: 35,
};

const MediumTextVariant = {
  color: "black",
};
const RegularTextVariant = {
  color: "black",
};

const BastInputVariant = {
  borderRadius: 10,
  height: 50,
  borderWidth: 1,
};

const BaseButtonVariant = {
  backgroundColor: "pressableColor",
  borderRadius: Spacing.l,
  paddingVertical: "l",
  paddingHorizontal: "l",
};

const BasicPressableVariant = {
  backgroundColor: "transparent",
};

const theme = createTheme({
  colors: {
    transparent: "transparent",
    ...palette,
  },
  spacing: {
    ...Spacing,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  buttonVariants: {
    defaults: {
      ...BaseButtonVariant,
    },
    basicPressable: {
      ...BasicPressableVariant,
    },
    none: {},
  },
  inputVariants: {
    defaults: {
      ...BastInputVariant,
    },
  },
  textVariants: {
    defaults: {
      ...RegularTextVariant,
    },
    title: {
      ...RegularTextVariant,
      fontSize: 16,
    },
    h1: {
      ...RegularTextVariant,
      fontSize: 32,
    },
    h2: {
      ...RegularTextVariant,
      fontSize: 24,
    },
    h3: {
      ...RegularTextVariant,
      fontSize: 18,
    },
    h4: {
      ...RegularTextVariant,
      fontSize: 16,
    },
    h5: {
      ...RegularTextVariant,
      fontSize: 12,
    },
    h6: {
      ...RegularTextVariant,
      fontSize: 10,
    },
  },
});

export type Theme = typeof theme;
export default theme;
