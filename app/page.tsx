"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CinemaHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPreviousMovie()
      } else if (event.key === "ArrowRight") {
        goToNextMovie()
      } else if (event.key === "Escape" && mobileMenuOpen) {
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
      image: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      thumbnail: "/action-movie-poster.png",
    },
    {
      id: 2,
      title: "Action Hero",
      image: "/action-movie-poster.png",
      thumbnail: "/action-movie-poster.png",
    },
    {
      id: 3,
      title: "Drama Story",
      image: "/drama-movie-poster.png",
      thumbnail: "/drama-movie-poster.png",
    },
    {
      id: 4,
      title: "Comedy Night",
      image: "/comedy-movie-poster.png",
      thumbnail: "/comedy-movie-poster.png",
    },
    {
      id: 5,
      title: "Thriller Mystery",
      image: "/thriller-movie-poster.png",
      thumbnail: "/thriller-movie-poster.png",
    },
    {
      id: 6,
      title: "Epic Adventure",
      image: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      thumbnail: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
    },
  ]

  const goToPreviousMovie = () => {
    setCurrentMovieIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1))
  }

  const goToNextMovie = () => {
    setCurrentMovieIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1))
  }

  const currentMovie = movies[currentMovieIndex]

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
            <Link href="/" className="flex items-center space-x-2" aria-label="Cine Test - Página inicial">
              <div className="bg-sky-400 px-3 py-1 rounded-lg">
                <span className="text-white font-bold text-xl">cine</span>
              </div>
              <span className="text-white font-semibold text-xl">test</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegação principal">
              <a
                href="#"
                className="text-white hover:text-sky-400 transition-colors bg-sky-400/20 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-current="page"
              >
                Início
              </a>
              <Link
                href="/filmes"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-2 py-1"
              >
                Filmes
              </Link>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-2 py-1"
              >
                Eventos
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-2 py-1"
              >
                Vale-presente
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-2 py-1"
              >
                Promoções
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-2 py-1"
                  aria-label="Fazer login"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Entrar</span>
                </a>
                <div className="relative">
                  <button
                    className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 rounded p-1"
                    aria-label="Carrinho de compras - 2 itens"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span
                      className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      2
                    </span>
                  </button>
                </div>
              </div>
              <Link
                href="/filmes"
                className="bg-sky-400 hover:bg-sky-500 px-6 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Comprar ingressos
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="border border-gray-600 hover:border-gray-400 px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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

      {/* Hero Section */}
      <main id="main-content" className="pt-20" role="main">
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          aria-label="Filme em destaque"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"
            aria-hidden="true"
          ></div>
          <img
            src={currentMovie.image || "/placeholder.svg"}
            alt={`Poster do filme ${currentMovie.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-6">
            <div className="max-w-2xl">
              {/* Play Button */}
              <div className="flex items-center space-x-4 mb-6">
                <button
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Assistir trailer de ${currentMovie.title}`}
                >
                  <svg
                    className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 text-balance">{currentMovie.title}</h1>
                  <p className="text-gray-300 text-lg">Assistir ao trailer</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/filmes"
                  className="bg-sky-400 hover:bg-sky-500 px-8 py-3 rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  Comprar ingressos
                </Link>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-3 rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                  Mais informações
                </button>
              </div>
            </div>
          </div>

          {/* Movie Carousel */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            role="region"
            aria-label="Carrossel de filmes"
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPreviousMovie}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Filme anterior"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="flex items-center space-x-3"
                aria-live="polite"
                aria-label={`Filme ${currentMovieIndex + 1} de ${movies.length}`}
              >
                <span className="text-white font-bold text-lg">{String(currentMovieIndex + 1).padStart(2, "0")}</span>
                <span className="text-gray-400" aria-hidden="true">
                  |
                </span>
                <span className="text-gray-400">{String(movies.length).padStart(2, "0")}</span>
              </div>

              <div className="flex space-x-2" role="tablist" aria-label="Selecionar filme">
                {movies.slice(0, 4).map((movie, index) => (
                  <button
                    key={movie.id}
                    onClick={() => setCurrentMovieIndex(index)}
                    className={`w-20 h-12 object-cover rounded border-2 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                      index === currentMovieIndex
                        ? "border-sky-400 opacity-100"
                        : "border-gray-600 opacity-70 hover:opacity-90"
                    }`}
                    role="tab"
                    aria-selected={index === currentMovieIndex}
                    aria-label={`Selecionar ${movie.title}`}
                  >
                    <img
                      src={movie.thumbnail || "/placeholder.svg"}
                      alt={`Miniatura de ${movie.title}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextMovie}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Próximo filme"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl" id="mobile-menu">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded p-2"
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-4 py-2"
            >
              Início
            </a>
            <Link
              href="/filmes"
              className="text-white hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-4 py-2"
            >
              Filmes
            </Link>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-4 py-2"
            >
              Eventos
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-4 py-2"
            >
              Vale-presente
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-4 py-2"
            >
              Promoções
            </a>
            <Link
              href="/filmes"
              className="bg-sky-400 px-8 py-3 rounded-lg font-semibold mt-8 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Comprar ingressos
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
