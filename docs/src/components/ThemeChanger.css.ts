import { style } from "@vanilla-extract/css";
import { vars } from "src/styles/vars.css";

export const select = style({
  height: 34,
  appearance: "none",
  border: `1px solid ${vars.colors.border}`,
  marginLeft: vars.space.medium,
  paddingInline: vars.space.medium,
  fontSize: 16,
  backgroundColor: vars.colors.background,
});
