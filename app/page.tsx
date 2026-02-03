import { booksMock } from "@/mocks/books.mock"
import { CategorySection } from "@/components/books/CategorySection"

export default function HomePage() {
  const categories = Array.from(
    new Set(booksMock.map(book => book.category))
  )

  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Descubra sua próxima leitura
        </h2>
        <p className="mt-2 text-neutral-600 max-w-xl">
          Escolha um livro, reserve por quantos dias quiser e retire na loja.
        </p>
      </section>
      
      <div className="space-y-10">
        {categories.map(category => (
          <CategorySection
            key={category}
            title={category}
            books={booksMock.filter(b => b.category === category)}
          />
        ))}
      </div>
    </main>
  )
}
