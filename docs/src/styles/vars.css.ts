import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const root = createGlobalTheme("html", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
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
  card: null,
  text: null,
  link: null,
});

export const lightTheme = createTheme(colors, {
  background: "#EFF6FF",
  card: "#F5F8FA",
  text: "#1F2937",
  link: "blue",
});

export const darkTheme = createTheme(colors, {
  background: "#272727",
  card: "#1F2937",
  text: "#F9FAFB",
  link: "#f3f3f3",
});

export const christmasTheme = createTheme(colors, {
  background: "red",
  card: "white",
  text: "green",
  link: "darkgreen",
});

export const vars = { ...root, colors };
