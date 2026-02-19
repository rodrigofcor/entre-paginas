"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

interface Props {
  text: string
  maxLines?: number
}

export function ExpandableText({ text, maxLines = 4 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined)
  const [isOverflowing, setIsOverflowing] = useState(false)

  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current

    const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
    const collapsedHeight = lineHeight * maxLines

    const fullHeight = element.scrollHeight

    setIsOverflowing(fullHeight > collapsedHeight)

    if (isExpanded) {
      setMaxHeight(fullHeight)
    } else {
      setMaxHeight(collapsedHeight)
    }
  }, [isExpanded, maxLines, text])

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={textRef}
          style={{
            maxHeight: isOverflowing ? maxHeight : "none",
          }}
          className="overflow-hidden transition-all duration-700 ease-in-out text-neutral-700 leading-relaxed text-center md:text-left"
        >
          {text}
        </div>

        {!isExpanded && isOverflowing && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-paper to-transparent" />
        )}
      </div>

      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center mt-2 text-sm text-neutral-500 hover:text-neutral-700 transition cursor-pointer w-full"
        >
          <div className="h-px w-full bg-neutral-300" />

          <div className="w-96 md:w-72 flex justify-center items-center gap-1">
            {isExpanded ? "Ver menos" : "Ver mais"}

            <ChevronDown
              className={clsx(
                "h-5 w-5 transition-transform duration-700",
                isExpanded && "rotate-180"
              )}
            />
          </div>

          <div className="h-px w-full bg-neutral-300" />
        </button>
      )}
    </div>
  )
}
