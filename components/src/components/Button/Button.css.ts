import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const variant = {
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "green",
    color: "white",
  },
};

export type Size = keyof typeof size;

const size = {
  small: {
    padding: "8px 12px",
    fontSize: 14,
  },
  medium: {
    padding: "12px 16px",
    fontSize: 16,
  },
  large: {
    padding: "14px 20px",
    fontSize: 18,
  },
};

export const button = recipe({
  base: {
    all: "unset",
    borderRadius: 6,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  },
  variants: {
    variant,
    size,
  },
});

export type Variant = keyof typeof variant;

export type ButtonVariants = RecipeVariants<typeof button>;
