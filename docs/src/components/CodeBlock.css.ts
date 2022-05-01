import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const editor = style({
  backgroundColor: vars.colors.code,
});

export const preview = style({
  padding: vars.space.xlarge,
});

export const wrapper = style({
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  marginBottom: vars.space.medium,
  borderRadius: 8,
  overflow: "hidden",
});
