"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { Book } from "@/types/book"
import { BookCard } from "./BookCard"

interface Props {
  books: Book[]
}

export function BookCarousel({ books }: Props) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView="auto"
      spaceBetween={24}
      grabCursor
    >
      {books.map(book => (
        <SwiperSlide key={book.id} className="w-48!">
          <BookCard book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
