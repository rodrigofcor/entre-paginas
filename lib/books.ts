import { booksMock } from "@/mocks/books.mock"

export function getAllBooks() {
  return booksMock
}

export function getBookById(id: number) {
  return booksMock.find(book => book.id === Number(id))
}