import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Modern Real Estate Platform | Find Your Dream Home',
  description: 'Discover premium properties with transparent pricing, secure transactions, and professional support. Your next home is just a click away.',
  keywords: 'real estate, properties, homes, apartments, buy house, rent apartment',
  authors: [{ name: 'Real Estate Platform' }],
  openGraph: {
    title: 'Modern Real Estate Platform',
    description: 'Find your dream home with our modern real estate platform',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Real Estate Platform',
    description: 'Find your dream home with our modern real estate platform',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}