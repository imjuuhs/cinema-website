"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function FilmesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  const movies = [
    {
      id: 1,
      title: "Seven Kings Must Die",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Ação/Drama",
      duration: "111 min",
      rating: "16",
      synopsis: "Uma épica batalha medieval que definirá o destino de sete reinos.",
    },
    {
      id: 2,
      title: "Action Hero",
      poster: "/action-movie-poster.png",
      genre: "Ação/Aventura",
      duration: "125 min",
      rating: "14",
      synopsis: "Um herói improvável deve salvar a cidade de uma ameaça iminente.",
    },
    {
      id: 3,
      title: "Drama Story",
      poster: "/drama-movie-poster.png",
      genre: "Drama",
      duration: "98 min",
      rating: "12",
      synopsis: "Uma história tocante sobre família, amor e superação.",
    },
    {
      id: 4,
      title: "Comedy Night",
      poster: "/comedy-movie-poster.png",
      genre: "Comédia",
      duration: "102 min",
      rating: "L",
      synopsis: "Uma comédia hilariante que vai fazer você rir do início ao fim.",
    },
    {
      id: 5,
      title: "Thriller Mystery",
      poster: "/thriller-movie-poster.png",
      genre: "Suspense/Thriller",
      duration: "118 min",
      rating: "16",
      synopsis: "Um mistério intrigante que manterá você na beira do assento.",
    },
    {
      id: 6,
      title: "Epic Adventure",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Aventura/Fantasia",
      duration: "145 min",
      rating: "12",
      synopsis: "Uma jornada épica através de mundos fantásticos e criaturas mágicas.",
    },
  ]

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "L":
        return "bg-green-500"
      case "12":
        return "bg-yellow-500"
      case "14":
        return "bg-orange-500"
      case "16":
        return "bg-red-500"
      case "18":
        return "bg-red-700"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-400 text-white px-4 py-2 rounded-lg z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full top-0 z-50" role="banner">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-sky-400 px-3 py-1 rounded-lg">
                <span className="text-white font-bold text-xl">cine</span>
              </div>
              <span className="text-white font-semibold text-xl">test</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link
                href="/filmes"
                className="text-white hover:text-sky-400 transition-colors bg-sky-400/20 px-4 py-2 rounded-full"
              >
                Filmes
              </Link>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Eventos
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Vale-presente
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Promoções
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Entrar</span>
                </a>
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>
              <button className="bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-lg font-semibold transition-colors">
                Comprar ingressos
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="border border-gray-600 hover:border-gray-400 px-3 py-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-24 pb-12" role="main">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Filmes em Cartaz</h1>
            <p className="text-gray-300 text-lg">Descubra os melhores filmes em exibição no nosso cinema</p>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {movies.map((movie) => (
              <article
                key={movie.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 group focus-within:ring-2 focus-within:ring-sky-400"
                role="listitem"
              >
                {/* Movie Poster */}
                <div className="relative overflow-hidden">
                  <img
                    src={movie.poster || "/placeholder.svg"}
                    alt={`Poster do filme ${movie.title}`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${getRatingColor(movie.rating)} text-white text-sm font-bold px-3 py-1 rounded-full`}
                      aria-label={`Classificação indicativa: ${movie.rating} anos`}
                    >
                      {movie.rating}
                    </span>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2 text-balance">{movie.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                    <span>{movie.genre}</span>
                    <span aria-hidden="true">•</span>
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{movie.synopsis}</p>

                  {/* Action Button */}
                  <Link
                    href={`/sessoes/${movie.id}`}
                    className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    aria-label={`Ver sessões do filme ${movie.title}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 010-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Ver Sessões</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <Link href="/" className="text-white hover:text-sky-400 transition-colors">
              Início
            </Link>
            <Link href="/filmes" className="text-white hover:text-sky-400 transition-colors">
              Filmes
            </Link>
            <a href="#" className="text-white hover:text-sky-400 transition-colors">
              Eventos
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition-colors">
              Vale-presente
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition-colors">
              Promoções
            </a>
            <button className="bg-sky-400 px-8 py-3 rounded-lg font-semibold mt-8">Comprar ingressos</button>
          </div>
        </div>
      )}
    </div>
  )
}
