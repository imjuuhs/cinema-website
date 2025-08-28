"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SessoesPage() {
  const params = useParams()
  const movieId = params.id as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(0)

  const movies = [
    {
      id: "1",
      title: "Seven Kings Must Die",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Ação/Drama",
      duration: "111 min",
      rating: "16",
      synopsis: "Uma épica batalha medieval que definirá o destino de sete reinos.",
    },
    {
      id: "2",
      title: "Action Hero",
      poster: "/action-movie-poster.png",
      genre: "Ação/Aventura",
      duration: "125 min",
      rating: "14",
      synopsis: "Um herói improvável deve salvar a cidade de uma ameaça iminente.",
    },
    {
      id: "3",
      title: "Drama Story",
      poster: "/drama-movie-poster.png",
      genre: "Drama",
      duration: "98 min",
      rating: "12",
      synopsis: "Uma história tocante sobre família, amor e superação.",
    },
    {
      id: "4",
      title: "Comedy Night",
      poster: "/comedy-movie-poster.png",
      genre: "Comédia",
      duration: "102 min",
      rating: "L",
      synopsis: "Uma comédia hilariante que vai fazer você rir do início ao fim.",
    },
    {
      id: "5",
      title: "Thriller Mystery",
      poster: "/thriller-movie-poster.png",
      genre: "Suspense/Thriller",
      duration: "118 min",
      rating: "16",
      synopsis: "Um mistério intrigante que manterá você na beira do assento.",
    },
    {
      id: "6",
      title: "Epic Adventure",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Aventura/Fantasia",
      duration: "145 min",
      rating: "12",
      synopsis: "Uma jornada épica através de mundos fantásticos e criaturas mágicas.",
    },
  ]

  const movie = movies.find((m) => m.id === movieId) || movies[0]

  const dates = [
    { day: "Hoje", date: "27/08", weekday: "Ter" },
    { day: "Amanhã", date: "28/08", weekday: "Qua" },
    { day: "", date: "29/08", weekday: "Qui" },
    { day: "", date: "30/08", weekday: "Sex" },
    { day: "", date: "31/08", weekday: "Sáb" },
    { day: "", date: "01/09", weekday: "Dom" },
    { day: "", date: "02/09", weekday: "Seg" },
  ]

  const sessions = [
    {
      time: "14:30",
      room: "Sala 1",
      type: "2D",
      accessibility: ["Dublado", "Legenda"],
      price: "R$ 18,00",
      available: true,
    },
    {
      time: "17:15",
      room: "Sala 2",
      type: "3D",
      accessibility: ["Dublado", "Audiodescrição"],
      price: "R$ 25,00",
      available: true,
    },
    {
      time: "20:00",
      room: "Sala 1",
      type: "2D",
      accessibility: ["Legendado", "Libras"],
      price: "R$ 18,00",
      available: true,
    },
    {
      time: "22:45",
      room: "Sala 3",
      type: "IMAX",
      accessibility: ["Dublado"],
      price: "R$ 32,00",
      available: false,
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

  const getAccessibilityIcon = (feature: string) => {
    switch (feature) {
      case "Dublado":
        return "🎤"
      case "Legendado":
        return "📝"
      case "Legenda":
        return "📝"
      case "Audiodescrição":
        return "🔊"
      case "Libras":
        return "👋"
      default:
        return "ℹ️"
    }
  }

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full top-0 z-50">
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
              <Link href="/filmes" className="text-gray-300 hover:text-white transition-colors">
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
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/filmes" className="hover:text-white transition-colors">
              Filmes
            </Link>
            <span>/</span>
            <span className="text-white">Sessões</span>
          </nav>

          {/* Movie Info Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-64 flex-shrink-0">
              <img
                src={movie.poster || "/placeholder.svg"}
                alt={`Poster do filme ${movie.title}`}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-balance">{movie.title}</h1>
                <span className={`${getRatingColor(movie.rating)} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                  {movie.rating}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                <span>{movie.genre}</span>
                <span>•</span>
                <span>{movie.duration}</span>
              </div>
              <p className="text-gray-300 text-lg mb-8">{movie.synopsis}</p>

              {/* Date Selector */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Selecione a data</h2>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {dates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(index)}
                      className={`flex-shrink-0 px-4 py-3 rounded-lg text-center transition-colors ${
                        selectedDate === index ? "bg-sky-400 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <div className="text-sm font-semibold">{date.day || date.weekday}</div>
                      <div className="text-xs">{date.date}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sessions */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Horários para {dates[selectedDate].day || dates[selectedDate].weekday} - {dates[selectedDate].date}
            </h2>
            <div className="grid gap-4">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transition-all ${
                    session.available ? "hover:bg-gray-900/70 cursor-pointer" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-6">
                      {/* Time */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{session.time}</div>
                        <div className="text-sm text-gray-400">{session.type}</div>
                      </div>

                      {/* Room */}
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">{session.room}</div>
                        <div className="text-sm text-gray-400">Cinema</div>
                      </div>

                      {/* Accessibility Features */}
                      <div className="flex flex-wrap gap-2">
                        {session.accessibility.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center space-x-1 bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full text-sm"
                            title={feature}
                          >
                            <span className="text-xs">{getAccessibilityIcon(feature)}</span>
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">{session.price}</div>
                        <div className="text-sm text-gray-400">Inteira</div>
                      </div>
                      {session.available ? (
                        <Link
                          href={`/ingressos/${movieId}?session=${index}&date=${selectedDate}`}
                          className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                          Comprar
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="bg-gray-600 text-gray-400 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                        >
                          Esgotado
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility Info */}
          <div className="mt-12 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recursos de Acessibilidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-sky-400">🎤</span>
                <span className="text-gray-300">Dublado - Audio em português</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sky-400">📝</span>
                <span className="text-gray-300">Legendado - Legendas em português</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sky-400">🔊</span>
                <span className="text-gray-300">Audiodescrição - Para deficientes visuais</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sky-400">👋</span>
                <span className="text-gray-300">Libras - Interpretação em libras</span>
              </div>
            </div>
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
          </div>
        </div>
      )}
    </div>
  )
}
