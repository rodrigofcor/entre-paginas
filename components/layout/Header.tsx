import Link from "next/link"

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <header
      className={`${className ?? ""} border-b border-neutral-200 shadow-md bg-stone-200 fixed top-0 left-0 right-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-light tracking-tight">
          <Link href="/">
            <span className="text-neutral-600">Entre</span>
            <span className="text-lime-900">Páginas</span>
          </Link>
        </h1>

        <nav className="text-sm text-neutral-600 font-light">
          Entrar
        </nav>
      </div>
    </header>
  )
}
