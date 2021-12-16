import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const editor = style({
  backgroundColor: "#000",
});

export const preview = style({
  padding: 20,
});

export const live = style({
  backgroundColor: vars.colors.card,
  marginBottom: 32,
  borderRadius: 4,
  overflow: "hidden",
});
