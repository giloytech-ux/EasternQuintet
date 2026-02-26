import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles = {
  primary:
    "bg-ruby text-white hover:bg-ruby-dark font-bold ruby-glow",
  outline:
    "border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-bold",
  ghost:
    "text-smoke hover:text-white",
};

const sizeStyles = {
  sm: "px-6 py-2.5 text-sm tracking-wide",
  md: "px-8 py-4 text-sm tracking-wide",
  lg: "px-10 py-4 text-base tracking-wide",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", as = "button", ...rest } = props;
  const className = `inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${(rest as Record<string, string>).className || ""}`;

  if (as === "a") {
    const { ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a {...anchorProps} className={className} />;
  }

  const { ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...buttonProps} className={className} />;
}
