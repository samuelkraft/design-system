import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const table = style({
  backgroundColor: vars.colors.card,
  color: vars.colors.text,
  width: "100%",
  borderRadius: 8,
  overflow: "hidden",
});

export const td = style({
  padding: vars.space.large,
});

export const th = style({
  padding: vars.space.large,
  backgroundColor: vars.colors.card,
  fontWeight: "bold",
});
