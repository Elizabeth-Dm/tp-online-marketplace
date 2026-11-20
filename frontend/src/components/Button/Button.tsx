import { type ComponentProps } from "preact";
import "./Button.scss";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  class: className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button class={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}