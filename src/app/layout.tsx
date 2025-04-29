import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Operations Portfolio - Finland',
  description: 'Professional operations management portfolio showcasing expertise in Finnish business operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Logo />
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
} 