import { booksMock } from "@/mocks/books.mock"
import { CategorySection } from "@/components/books/CategorySection"

export default function HomePage() {
  const categories = Array.from(
    new Set(booksMock.map(book => book.category))
  )

  return (
    <main>
      <section className="px-6 py-6">
        <h2 className="text-3xl text-lime-900 font-light tracking-tight">
          Descubra sua próxima leitura
        </h2>
        <p className="mt-2 text-neutral-600 max-w-7xl">
          Escolha um livro, reserve por quantos dias quiser e retire na loja.
        </p>
      </section>
      
      <div className="pt-6">
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
