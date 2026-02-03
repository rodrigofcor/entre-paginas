import { Book } from "@/types/book"
import { BookCarousel } from "./BookCarousel"

interface Props {
  title: string
  books: Book[]
}

export function CategorySection({ title, books }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <BookCarousel books={books} />
    </section>
  )
}
