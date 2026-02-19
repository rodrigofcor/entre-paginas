"use client"

import { useRef, useState, useEffect } from "react"

import { Book } from "@/types/book"
import { BookCard } from "./BookCard"
import { BookCarouselNavButton } from "./BookCarouselNavButton"

interface Props {
  books: Book[]
}

export function BookCarousel({ books }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = containerRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    )
  }

  useEffect(() => {
    updateScrollState()
  }, [])

  const scrollByPage = (direction: "left" | "right") => {
    const el = containerRef.current
    if (!el) return

    const firstCard = el.firstElementChild as HTMLElement
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width

    const styles = getComputedStyle(el)
    const gap = parseFloat(styles.columnGap || styles.gap || "0")

    const fullCardWidth = cardWidth + gap

    const visibleWidth = el.clientWidth

    const cardsPerView = Math.floor(visibleWidth / fullCardWidth)

    const scrollAmount = fullCardWidth * (cardsPerView - 1)

    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <BookCarouselNavButton
          position="left"
          onClick={() => scrollByPage('left')} 
        />
      )}

      {canScrollRight && (
        <BookCarouselNavButton
          position="right"
          onClick={() => scrollByPage('right')} 
        />
      )}

      <div
        ref={containerRef}
        onScroll={updateScrollState}
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          px-2 py-1
          scrollbar-hide
        "
      >
        {books.map(book => (
          <div key={book.id} className="w-48 shrink-0">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  )
}
