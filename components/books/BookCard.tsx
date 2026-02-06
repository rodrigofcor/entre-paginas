import Image from "next/image"
import { Book } from "@/types/book"

interface Props {
  book: Book
}

export function BookCard({ book }: Props) {
  return (
    <div className="group cursor-pointer h-96 rounded-lg border-2 border-transparent hover:border-neutral-300 hover:shadow-lg transition-all duration-200
">
      <div className="relative h-64 aspect-3/4 overflow-hidden mb-3 group-hover:rounded-t-lg">
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          sizes="160px"
          className="object-contain group-hover:scale-125 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-3 px-2">
        <h3 className="font-medium text-base leading-tight w-full h-10 text-center line-clamp-2 group-hover:text-lime-900 transition-colors">
          {book.title}
        </h3>

        <div className="h-full flex flex-col justify-between">
          <p className="text-sm w-full text-center line-clamp-2 text-neutral-600 group-hover:text-lime-900 transition-colors">
            {book.author}
          </p>
          <p className="text-sm w-full text-center text-neutral-500 group-hover:text-lime-900 transition-colors">
            {book.pagesNumber} páginas • R$ {book.pricePerDay}/dia
          </p>
        </div>
      </div>
    </div>
  )
}