'use client'

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Search, Instagram, Mail } from 'lucide-react'
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "./cart-sheet"
import { SearchDialog } from "./search-dialog"

export function SiteHeader() {
  const { items } = useCart()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="bg-fuchsia-600 text-white py-2 text-center text-sm font-medium">
        FREE SHIPPING ON ORDERS ABOVE ₹2999
      </div>
      
      <div className="container flex h-16 items-center">
        <Link href="/" className="text-2xl font-bold text-fuchsia-700">
          Ishtakari
        </Link>

        <nav className="mx-6 hidden md:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/juttis" className="text-sm font-medium hover:text-fuchsia-600">
                JUTTIS
              </Link>
            </li>
            <li>
              <Link href="/bags" className="text-sm font-medium hover:text-fuchsia-600">
                BAGS
              </Link>
            </li>
            <li>
              <Link href="/footwear" className="text-sm font-medium hover:text-fuchsia-600">
                FOOTWEAR
              </Link>
            </li>
            <li>
              <Link href="/clutches" className="text-sm font-medium hover:text-fuchsia-600">
                CLUTCHES
              </Link>
            </li>
            <li>
              <Link href="/potlis" className="text-sm font-medium hover:text-fuchsia-600">
                POTLIS
              </Link>
            </li>
            <li>
              <Link href="/gifting" className="text-sm font-medium hover:text-fuchsia-600">
                GIFTING
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center ml-auto space-x-4">
          <Link href="mailto:contact@ishtakari.com" className="hidden md:inline-flex hover:text-fuchsia-600">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com/ishtakari" className="hidden md:inline-flex hover:text-fuchsia-600">
            <Instagram className="h-5 w-5" />
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:text-fuchsia-600"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-fuchsia-600">
            <User className="h-5 w-5" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-fuchsia-600 relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-fuchsia-600 text-xs text-white flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <CartSheet />
          </Sheet>
        </div>
      </div>
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  )
}

