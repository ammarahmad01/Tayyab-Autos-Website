import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tayyab Autos & Decoration',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/bike1111.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
