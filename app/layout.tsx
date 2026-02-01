import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pravaah - Premium Footwear & Men\'s Accessories',
  description: 'Discover premium footwear and men\'s accessories at Pravaah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
