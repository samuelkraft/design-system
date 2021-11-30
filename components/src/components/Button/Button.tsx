import { ReactNode } from "react";
import * as styles from "./Button.css";

export type ButtonProps = styles.ButtonVariants & {
  children: ReactNode;
};

export const Button = ({ children, variant, size }: ButtonProps) => {
  return (
    <button className={styles.button({ variant, size })}>{children}</button>
  );
};
