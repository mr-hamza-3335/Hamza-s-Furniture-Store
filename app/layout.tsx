import './globals.css'
import type { Metadata } from 'next'
import { inter } from '@/lib/fonts'
import { CartProvider } from '@/contexts/cart-context'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: "Hamza's Furniture Store",
  description: 'High-quality furniture for your home in Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

