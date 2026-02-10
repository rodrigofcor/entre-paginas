"use client"

import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BookCarouselNavButtonProps {
  onClick: () => void
  position: "left" | "right"
}

export function BookCarouselNavButton({
  onClick,
  position,
}: BookCarouselNavButtonProps) {
  const isLeft = position === "left"

  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Scroll left" : "Scroll right"}
      className={clsx(
        "absolute top-1/2 -translate-y-14 z-10",
        isLeft ? "left-2" : "right-2",
        "h-12 w-12 flex items-center justify-center",
        "bg-white/60 backdrop-blur",
        "border border-neutral-200/60",
        "rounded-full shadow cursor-pointer",
        "transition hover:bg-white hover:border-neutral-200",
        "group",
      )}
    >
      {isLeft ? (
        <ChevronLeft
          className="
            h-7 w-7 text-neutral-800
            transition-transform duration-200
            group-hover:scale-110
          "
        />
      ) : (
        <ChevronRight
          className="
            h-7 w-7 text-neutral-800
            transition-transform duration-200
            group-hover:scale-110
          "
        />
      )}
    </button>
  )
}
