import { type ComponentProps } from "preact";
import "./Input.scss";

type InputProps = ComponentProps<"input">;

export function Input({ class: className = "", ...props }: InputProps) {
  return <input class={`input ${className}`} {...props} />;
}