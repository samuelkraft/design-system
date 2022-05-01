import { style } from "@vanilla-extract/css";
import { vars } from "src/styles/vars.css";

export const title = style({
  lineHeight: 1,
  color: vars.colors.text,
  fontSize: vars.fontSizes.large,
});

export const description = style({
  lineHeight: 1.5,
  fontSize: vars.fontSizes.medium,
  color: vars.colors.textSecondary,
  marginBottom: vars.space.large,
});
