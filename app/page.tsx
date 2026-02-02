import { booksMock } from "@/mocks/books.mock"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            Entre<span className="text-neutral-500">Páginas</span>
          </h1>

          <nav className="text-sm text-neutral-600">
            Entrar
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Descubra sua próxima leitura
        </h2>
        <p className="mt-2 text-neutral-600 max-w-xl">
          Escolha um livro, reserve por quantos dias quiser e retire na loja.
        </p>
      </section>

      {/* Grid provisório */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {booksMock.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-sm transition"
            >
              <div className="aspect-3/4 bg-neutral-100">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="h-full w-full object-cover"
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
          ))}
        </div>
      </section>
    </main>
  )
}
