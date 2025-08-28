"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"

export default function IngressosPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const movieId = params.id as string
  const sessionIndex = searchParams.get("session") || "0"
  const dateIndex = searchParams.get("date") || "0"

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [ticketTypes, setTicketTypes] = useState<{ [key: string]: "inteira" | "meia" }>({})
  const [currentStep, setCurrentStep] = useState(1) // 1: seats, 2: tickets, 3: payment

  const movies = [
    {
      id: "1",
      title: "Seven Kings Must Die",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Ação/Drama",
      duration: "111 min",
      rating: "16",
    },
    {
      id: "2",
      title: "Action Hero",
      poster: "/action-movie-poster.png",
      genre: "Ação/Aventura",
      duration: "125 min",
      rating: "14",
    },
    {
      id: "3",
      title: "Drama Story",
      poster: "/drama-movie-poster.png",
      genre: "Drama",
      duration: "98 min",
      rating: "12",
    },
    {
      id: "4",
      title: "Comedy Night",
      poster: "/comedy-movie-poster.png",
      genre: "Comédia",
      duration: "102 min",
      rating: "L",
    },
    {
      id: "5",
      title: "Thriller Mystery",
      poster: "/thriller-movie-poster.png",
      genre: "Suspense/Thriller",
      duration: "118 min",
      rating: "16",
    },
    {
      id: "6",
      title: "Epic Adventure",
      poster: "/epic-medieval-warrior-movie-poster-dark-cinematic.png",
      genre: "Aventura/Fantasia",
      duration: "145 min",
      rating: "12",
    },
  ]

  const movie = movies.find((m) => m.id === movieId) || movies[0]

  const sessions = [
    {
      time: "14:30",
      room: "Sala 1",
      type: "2D",
      accessibility: ["Dublado", "Legenda"],
      price: { inteira: 18.0, meia: 9.0 },
    },
    {
      time: "17:15",
      room: "Sala 2",
      type: "3D",
      accessibility: ["Dublado", "Audiodescrição"],
      price: { inteira: 25.0, meia: 12.5 },
    },
    {
      time: "20:00",
      room: "Sala 1",
      type: "2D",
      accessibility: ["Legendado", "Libras"],
      price: { inteira: 18.0, meia: 9.0 },
    },
    {
      time: "22:45",
      room: "Sala 3",
      type: "IMAX",
      accessibility: ["Dublado"],
      price: { inteira: 32.0, meia: 16.0 },
    },
  ]

  const session = sessions[Number.parseInt(sessionIndex)] || sessions[0]

  const dates = [
    { day: "Hoje", date: "27/08", weekday: "Ter" },
    { day: "Amanhã", date: "28/08", weekday: "Qua" },
    { day: "", date: "29/08", weekday: "Qui" },
    { day: "", date: "30/08", weekday: "Sex" },
    { day: "", date: "31/08", weekday: "Sáb" },
    { day: "", date: "01/09", weekday: "Dom" },
    { day: "", date: "02/09", weekday: "Seg" },
  ]

  const selectedDate = dates[Number.parseInt(dateIndex)] || dates[0]

  // Generate seat map (10 rows, 12 seats per row)
  const generateSeatMap = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const seatsPerRow = 12
    const occupiedSeats = ["A3", "A4", "B7", "C5", "C6", "D8", "F2", "F3", "G9", "H5", "I7", "I8"]

    return rows.map((row) => ({
      row,
      seats: Array.from({ length: seatsPerRow }, (_, i) => {
        const seatNumber = i + 1
        const seatId = `${row}${seatNumber}`
        return {
          id: seatId,
          number: seatNumber,
          occupied: occupiedSeats.includes(seatId),
          selected: selectedSeats.includes(seatId),
        }
      }),
    }))
  }

  const seatMap = generateSeatMap()

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
      const newTicketTypes = { ...ticketTypes }
      delete newTicketTypes[seatId]
      setTicketTypes(newTicketTypes)
    } else {
      setSelectedSeats([...selectedSeats, seatId])
      setTicketTypes({ ...ticketTypes, [seatId]: "inteira" })
    }
  }

  const handleTicketTypeChange = (seatId: string, type: "inteira" | "meia") => {
    setTicketTypes({ ...ticketTypes, [seatId]: type })
  }

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seatId) => {
      const type = ticketTypes[seatId] || "inteira"
      return total + session.price[type]
    }, 0)
  }

  const getSeatColor = (seat: any) => {
    if (seat.occupied) return "bg-red-500 cursor-not-allowed"
    if (seat.selected) return "bg-sky-400 cursor-pointer"
    return "bg-gray-600 hover:bg-gray-500 cursor-pointer"
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
                    {selectedSeats.length}
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
            <Link href={`/sessoes/${movieId}`} className="hover:text-white transition-colors">
              Sessões
            </Link>
            <span>/</span>
            <span className="text-white">Ingressos</span>
          </nav>

          {/* Session Info */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">{movie.title}</h1>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span>
                    {selectedDate.day || selectedDate.weekday} - {selectedDate.date}
                  </span>
                  <span>•</span>
                  <span>{session.time}</span>
                  <span>•</span>
                  <span>{session.room}</span>
                  <span>•</span>
                  <span>{session.type}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">
                  Total: R$ {calculateTotal().toFixed(2).replace(".", ",")}
                </div>
                <div className="text-sm text-gray-400">{selectedSeats.length} assento(s) selecionado(s)</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seat Selection */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">Selecione seus assentos</h2>

                {/* Screen */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-sky-400/20 to-sky-600/20 h-3 rounded-full mb-2"></div>
                  <p className="text-center text-gray-400 text-sm">TELA</p>
                </div>

                {/* Seat Map */}
                <div className="space-y-3 mb-6">
                  {seatMap.map((row) => (
                    <div key={row.row} className="flex items-center justify-center space-x-2">
                      <span className="text-gray-400 text-sm w-4">{row.row}</span>
                      <div className="flex space-x-1">
                        {row.seats.map((seat) => (
                          <button
                            key={seat.id}
                            onClick={() => !seat.occupied && handleSeatClick(seat.id)}
                            disabled={seat.occupied}
                            className={`w-8 h-8 rounded-t-lg text-xs font-semibold transition-colors ${getSeatColor(seat)}`}
                            title={seat.occupied ? "Ocupado" : seat.selected ? "Selecionado" : "Disponível"}
                          >
                            {seat.number}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-600 rounded-t"></div>
                    <span className="text-gray-400">Disponível</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-sky-400 rounded-t"></div>
                    <span className="text-gray-400">Selecionado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-t"></div>
                    <span className="text-gray-400">Ocupado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Types & Summary */}
            <div className="space-y-6">
              {/* Ticket Types */}
              {selectedSeats.length > 0 && (
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Tipo de ingresso</h3>
                  <div className="space-y-3">
                    {selectedSeats.map((seatId) => (
                      <div key={seatId} className="flex items-center justify-between">
                        <span className="text-gray-300">Assento {seatId}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleTicketTypeChange(seatId, "inteira")}
                            className={`px-3 py-1 rounded text-sm transition-colors ${
                              ticketTypes[seatId] === "inteira"
                                ? "bg-sky-400 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            Inteira
                          </button>
                          <button
                            onClick={() => handleTicketTypeChange(seatId, "meia")}
                            className={`px-3 py-1 rounded text-sm transition-colors ${
                              ticketTypes[seatId] === "meia"
                                ? "bg-sky-400 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            Meia
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Resumo do pedido</h3>
                <div className="space-y-3 mb-4">
                  {selectedSeats.map((seatId) => {
                    const type = ticketTypes[seatId] || "inteira"
                    const price = session.price[type]
                    return (
                      <div key={seatId} className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {seatId} - {type === "inteira" ? "Inteira" : "Meia-entrada"}
                        </span>
                        <span className="text-white">R$ {price.toFixed(2).replace(".", ",")}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-sky-400 text-lg">R$ {calculateTotal().toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>
                {selectedSeats.length > 0 && (
                  <button className="w-full bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-6">
                    Finalizar Compra
                  </button>
                )}
              </div>

              {/* Payment Info */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-sm font-semibold text-white mb-3">Formas de pagamento aceitas</h4>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cartão de crédito/débito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>PIX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Carteiras digitais</span>
                  </div>
                </div>
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
