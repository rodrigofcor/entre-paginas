import Image from "next/image"
import { Book } from "@/types/book"

interface Props {
  book: Book
}

export function BookCard({ book }: Props) {
  return (
    <div
      className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-sm transition"
    >
      <div className="relative aspect-3/4 bg-neutral-100">
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium leading-tight">
          {book.title}
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          {book.author}
        </p>
        <p className="text-xs text-neutral-400 mt-1">
          {book.pagesNumber} páginas • R$ {book.pricePerDay}/dia
        </p>
      </div>
    </div>
  )
}