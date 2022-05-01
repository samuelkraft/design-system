import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

import {
  gray,
  blue,
  blueDark,
  sand,
  sandDark,
  purple,
  sandA,
  sandDarkA,
  purpleA,
} from "@radix-ui/colors";

const root = createGlobalTheme("html", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "24px",
  },
  fontSizes: {
    small: "16px",
    medium: "20px",
    large: "36px",
  },
  lineHeights: {
    small: "24px",
    medium: "28px",
    large: "40px",
  },
});

const colors = createThemeContract({
  background: null,
  backgroundOpaque: null,
  card: null,
  text: null,
  textSecondary: null,
  link: null,
  border: null,
  code: null,
});

export const lightTheme = createTheme(colors, {
  background: sand.sand1,
  backgroundOpaque: "rgba(253, 253, 253, 0.9)",
  card: sand.sand4,
  text: sand.sand12,
  textSecondary: sand.sand11,
  link: blue.blue11,
  border: sand.sand5,
  code: sand.sand12,
});

export const darkTheme = createTheme(colors, {
  background: sandDark.sand1,
  backgroundOpaque: "rgba(22,22, 21, 0.9)",
  card: sandDark.sand5,
  text: sandDark.sand12,
  textSecondary: sandDark.sand11,
  link: blueDark.blue11,
  border: sandDark.sand4,
  code: sandDark.sand3,
});

export const purpleTheme = createTheme(colors, {
  background: purple.purple6,
  backgroundOpaque: "rgba(223, 205, 241, 0.9)",
  card: purple.purple8,
  text: purple.purple12,
  textSecondary: purple.purple11,
  link: gray.gray12,
  border: purple.purple7,
  code: purple.purple12,
});

export const vars = { ...root, colors };
