import Image from "next/image"
import { notFound } from "next/navigation"
import { getBookById } from "@/lib/books"
import { Button } from "@/components/ui/Button"
import { InputDate } from "@/components/ui/input/InputDate"

interface Props {
  params: Promise<{
    id: number
  }>
}

export default async function BookDetailsPage({ params }: Props) {
  const { id } = await params
  const book = getBookById(id)

  if (!book) {
    notFound()
  }

  return (
    <div className="h-[calc(100vh-6rem)] px-6 py-4">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        <div className="relative w-full md:w-1/3 lg:w-2/5 h-96 md:h-full shrink-0">
          <Image
            src={book.coverUrl}
            alt={book.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 flex-1 md:overflow-y-auto md:pr-2">
          <h1 className="text-3xl tracking-tight text-neutral-600 font-light w-full text-center md:text-left">
            {book.title}
          </h1>

          <p className="text-lg tracking-tight text-neutral-600 w-full text-center md:text-left">
            {book.author}
          </p>

          <p className="tracking-tight text-neutral-700 leading-relaxed w-full text-center md:text-left">
            {book.description}
          </p>

          <div className="tracking-tight text-sm text-neutral-500 w-full text-center md:text-left">
            {book.pagesNumber} páginas
          </div>

          <div className="tracking-tight text-xl font-medium w-full text-center md:text-left">
            R$ {book.pricePerDay}/dia
          </div>

          <hr className="border-neutral-300"/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 w-full">
            <InputDate
              id="returnDate"
              label="Data de devolução"
              min={new Date().toISOString().split("T")[0]}
            />

            <div className="flex flex-col gap-5">
              <span className="text-sm text-neutral-500 tracking-tight">
                Valor da reserva
              </span>
              <span className="text-lg font-medium tracking-tight text-lime-900">
                R$ 0,00
              </span>
            </div>
          </div>

          <Button>
            Reservar livro
          </Button>
        </div>
      </div>
    </div>
  )
}