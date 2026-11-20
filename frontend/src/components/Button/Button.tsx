import { type JSX } from "preact";
import "./Button.scss";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: preact.ComponentChildren;
}

export function Button({ variant = "primary", class: className = "", children, ...props }: ButtonProps) {
  return (
    <button class={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}