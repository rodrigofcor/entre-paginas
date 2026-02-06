import { Book } from "@/types/book"
import { BookCarousel } from "./BookCarousel"

interface Props {
  title: string
  books: Book[]
}

export function CategorySection({ title, books }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl py-6 w-full text-center text-neutral-600 font-light tracking-tight">{title}</h2>
      <BookCarousel books={books} />
    </section>
  )
}
