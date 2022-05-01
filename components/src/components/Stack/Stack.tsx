import { ReactNode } from "react";

export type StackProps = {
  children: ReactNode[];
  space?: string;
  direction?: "row" | "column";
  align?: "start" | "end" | "center" | "stretch";
  justify?: "start" | "end" | "center" | "space-between" | "space-around";
};

export const Stack = ({
  children,
  space = "10px",
  direction = "row",
  align,
  justify,
}: StackProps) => (
  <div
    style={{
      display: "flex",
      alignItems: align,
      gap: space,
      flexDirection: direction,
      justifyContent: justify,
    }}
  >
    {children}
  </div>
);
