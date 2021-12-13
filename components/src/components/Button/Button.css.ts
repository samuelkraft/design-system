import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    all: "unset",
    borderRadius: 6,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
      secondary: {
        backgroundColor: "green",
        color: "white",
      },
    },
    size: {
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
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
