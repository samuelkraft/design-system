import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  maxWidth: 1100,
  width: "100%",
  padding: "0 16px",
  margin: "0 auto",
});

export const sidebar = style({
  position: "sticky",
  top: 0,
  width: 280,
  marginRight: 80,
  alignSelf: "flex-start",
});

export const main = style({
  width: "100%",
});
