import { createTheme } from "@shopify/restyle";

const palette = {
  white: "#fff",
  black: "#000",
  gray: "#808080",
  defaultBlue: "#11145A",
  defaultGreen: "#f9f7be",
};

// const Gradients = {};

const Spacing = {
  0: 0,
  5: 5,
  10: 10,
  15: 15,
  20: 20,
  25: 25,
  30: 30,
  35: 35,
};

const RegularTextVariant = {
  color: "white",
};

const BastInputVariant = {
  borderRadius: 10,
  height: 50,
  borderWidth: 1,
};

const BaseButtonVariant = {
  backgroundColor: "white",
  borderRadius: 15,
  height: 60,
};

const DefaultBlueButton = {
  backgroundColor: "defaultBlue",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  height: 60,
};
const DefaultWhiteButton = {
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  height: 60,
};

const DefaultBorderedButton = {
  borderWidth: 4,
  height: 60,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  borderColor: "defaultBlue",
  backgroundColor: "white",
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

    none: {},

    defaultBlue: {
      ...DefaultBlueButton,
      borderWidth: 3,
      borderColor: "white",
    },

    defaultWhite: {
      ...DefaultWhiteButton,
    },

    defaultBordered: {
      ...DefaultBorderedButton,
    },
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
