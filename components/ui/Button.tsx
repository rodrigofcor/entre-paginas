"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg font-medium transition-all duration-200 cursor-pointer tracking-tight",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",

        variant === "primary" &&
          "bg-lime-800 text-white hover:bg-lime-900 focus:ring-lime-600",

        variant === "secondary" &&
          "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-400",

        size === "sm" && "px-3 py-2 text-sm",
        size === "md" && "px-4 py-2.5 text-base",
        size === "lg" && "px-6 py-3 text-lg",

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
