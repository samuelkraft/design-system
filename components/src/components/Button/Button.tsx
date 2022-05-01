import { ReactNode } from "react";
import * as styles from "./Button.css";

export type ButtonProps = {
  /** Button content */
  children: ReactNode;
  /** Sets the style of the button */
  variant?: styles.Variant;
  /** Sets the size  */
  size?: styles.Size;
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  return (
    <button className={styles.button({ variant, size })}>{children}</button>
  );
};
