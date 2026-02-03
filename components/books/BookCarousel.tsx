import { Book } from "@/types/book"
import { BookCard } from "./BookCard"

interface Props {
  books: Book[]
}

export function BookCarousel({ books }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
