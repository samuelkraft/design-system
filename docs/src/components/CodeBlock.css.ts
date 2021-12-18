import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const editor = style({
  backgroundColor: "#000",
});

export const preview = style({
  padding: vars.space.large,
});

export const live = style({
  backgroundColor: vars.colors.card,
  marginBottom: vars.space.medium,
  borderRadius: 4,
  overflow: "hidden",
});
