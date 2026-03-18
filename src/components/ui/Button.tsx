import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-prism-accent-purple to-prism-accent-blue text-white hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-prism-accent-purple/20",
    secondary:
      "glass text-white hover:bg-glass-hover hover:border-white/20",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
