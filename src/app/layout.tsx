import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const navigo = localFont({
  src: '../assets/Navigo-Regular.ttf',
})

export const metadata: Metadata = {
  title: 'Толковый русско-китайский строительный словарь',
  description: 'Толковый русско-китайский строительный словарь',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${navigo.className} antialiased`}>{children}</body>
    </html>
  )
}
