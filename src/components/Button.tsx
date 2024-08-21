import { LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  variant?: "outline" | "solid";
  as?: React.ElementType;
}

export default function Button({
  className,
  variant = "solid",
  as: Component = "button",
  ...rest
}: ButtonProps &
  React.ComponentPropsWithRef<"button"> &
  React.ComponentPropsWithRef<"a"> &
  Partial<LinkProps>) {
  return (
    <Component
      className={twMerge(
        "flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold",
        variant === "outline" &&
          "border border-black/20 text-black hover:bg-black/5",
        variant === "solid" && "bg-secondary text-white hover:bg-secondary/85",
        className,
      )}
      {...rest}
    />
  );
}
