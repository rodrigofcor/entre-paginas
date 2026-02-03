interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <header
      className={`${className ?? ""} border-b border-neutral-200 bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">
          Entre<span className="text-neutral-500">Páginas</span>
        </h1>

        <nav className="text-sm text-neutral-600">
          Entrar
        </nav>
      </div>
    </header>
  )
}
