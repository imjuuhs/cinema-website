import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cine Test - Cinema Premium",
  description:
    "Descubra os melhores filmes em cartaz no Cine Test. Compre seus ingressos online com facilidade e desfrute da melhor experiência cinematográfica.",
  keywords: "cinema, filmes, ingressos, sessões, entretenimento",
  authors: [{ name: "Cine Test" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
