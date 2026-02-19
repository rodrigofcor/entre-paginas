import Image from "next/image"
import { notFound } from "next/navigation"
import { getBookById } from "@/lib/books"
import { ReservationSection } from "@/components/books/ReservationSection"
import { ExpandableText } from "@/components/ui/ExpandableText"

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
    <div className="h-[calc(100vh-6rem)] px-6 py-4 flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-1/3 lg:w-2/5 h-96 md:h-full shrink-0">
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-5 flex-1">
        <h1 className="text-3xl tracking-tight text-neutral-600 font-light w-full text-center md:text-left">
          {book.title}
        </h1>

        <p className="text-lg tracking-tight text-neutral-600 w-full text-center md:text-left">
          {book.author}
        </p>

        <ExpandableText text={book.description} />

        <div className="tracking-tight text-sm text-neutral-500 w-full text-center md:text-left">
          {book.pagesNumber} páginas
        </div>

        <div className="tracking-tight text-xl font-medium w-full text-center md:text-left">
          R$ {book.pricePerDay}/dia
        </div>

        <hr className="border-neutral-300"/>

        <ReservationSection pricePerDay={book.pricePerDay} />
      </div>
    </div>
  )
}