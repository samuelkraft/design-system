import { style } from "@vanilla-extract/css";

export const editor = style({
  backgroundColor: "#000",
});

export const preview = style({
  padding: 20,
});

export const live = style({
  backgroundColor: "#1F1F1F",
  marginBottom: 32,
  borderRadius: 4,
  overflow: "hidden",
});
