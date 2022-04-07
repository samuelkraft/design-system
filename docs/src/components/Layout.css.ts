import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  maxWidth: 1100,
  width: "100%",
  padding: "24px 16px",
  margin: "0 auto",
});

export const sidebar = style({
  position: "sticky",
  top: 0,
  flex: "0 0 280px",
  marginRight: 80,
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const main = style({
  width: "100%",
});

export const sidebarTitle = style({
  textTransform: "uppercase",
  fontSize: "0.7rem",
  fontWeight: "600",
  opacity: 0.7,
});
