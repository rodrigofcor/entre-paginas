import { InputHTMLAttributes } from "react"
import clsx from "clsx"

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
}

export function InputDate({
  id,
  label,
  error,
  className,
  ...props
}: InputDateProps) {

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-neutral-500 tracking-tight"
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        name={id}
        type="date"
        className={clsx(
          "px-4 py-3 border rounded-lg tracking-tight transition",
          "focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-neutral-300",
          className
        )}
        {...props}
      />
      
      {error && (
        <span className="text-sm text-red-600 tracking-tight">{error}</span>
      )}
    </div>
  )
}