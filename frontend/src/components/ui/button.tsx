import * as React from "react";
import { cn } from "./utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "ghost"; size?: "sm" | "md" | "lg" }
>(({ className, variant = "default", size = "md", ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-muted",
  };
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-md",
    lg: "h-12 px-6 text-lg",
  };

  return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
});
Button.displayName = "Button";
