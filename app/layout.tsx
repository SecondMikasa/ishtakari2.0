import { Inter } from 'next/font/google'
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

