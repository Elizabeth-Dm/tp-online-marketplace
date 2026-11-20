import { type JSX } from "preact";
import "./Input.scss";

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  type?: string;
}

export function Input({ class: className = "", ...props }: InputProps) {
  return <input class={`input ${className}`} {...props} />;
}