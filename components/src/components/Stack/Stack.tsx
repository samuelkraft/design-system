import { ReactNode } from "react";

export type StackProps = {
  children: ReactNode[];
  space?: string;
  direction: "row" | "column";
  align?: "start" | "end" | "center" | "stretch";
};

export const Stack = ({
  children,
  space = "10px",
  direction = "row",
  align,
}: StackProps) => (
  <div
    style={{
      display: "flex",
      alignItems: align,
      gap: space,
      flexDirection: direction,
    }}
  >
    {children}
  </div>
);
