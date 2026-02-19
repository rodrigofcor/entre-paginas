"use client"

import { useState, useMemo } from "react"
import { addDays, differenceInDays, isBefore, parseISO, startOfDay } from "date-fns"

import { Button } from "@/components/ui/Button"
import { InputDate } from "@/components/ui/input/InputDate"

interface Props {
  pricePerDay: number
}

export function ReservationSection({ pricePerDay }: Props) {
  const today = startOfDay(new Date())
  const minDate = addDays(today, 1)

  const minDateString = minDate.toISOString().split("T")[0]

  const [returnDate, setReturnDate] = useState<string>("")

  const { total, isValid } = useMemo(() => {
    if (!returnDate) {
      return { total: 0, isValid: false }
    }

    const selectedDate = startOfDay(parseISO(returnDate))

    if (isBefore(selectedDate, minDate)) {
      return { total: 0, isValid: false }
    }

    const diffDays = differenceInDays(selectedDate, today)

    return {
      total: diffDays * pricePerDay,
      isValid: diffDays > 0
    }
  }, [returnDate, pricePerDay, minDate, today])

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 w-full">
        <InputDate
          id="returnDate"
          label="Data de devolução"
          min={minDateString}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          error={
            returnDate && !isValid
              ? "O período de aluguel deve ser de pelo menos um dia!"
              : undefined
          }
        />

        <div className="flex flex-col pt-1 gap-4">
          <span className="text-sm text-neutral-500 font-medium tracking-tight">
            Total aluguel
          </span>
          <span className="text-xl font-medium tracking-tight text-lime-900">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>

      <Button size="lg" disabled={!isValid}>
        Reservar livro
      </Button>
    </div>
  )
}
