"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, className = "", disabled, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden group";

    const variants = {
      primary:
        "bg-foreground text-background hover:bg-white/90 glow-white",
      secondary:
        "glass-sm text-foreground hover:bg-white/10 hover:border-border-hover",
      ghost:
        "text-muted hover:text-foreground",
    };

    const sizes = {
      sm: "px-5 py-2 text-base font-bold",
      md: "px-8 py-3 text-xl font-bold",
      lg: "px-10 py-4 text-2xl font-bold",
    };

    const content = (
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    );

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={disabled ? {} : { scale: 1.03 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
        disabled={disabled}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
