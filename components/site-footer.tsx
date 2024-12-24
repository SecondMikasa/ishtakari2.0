import Link from "next/link"
import { Instagram, Mail, Heart, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/track-order" className="hover:text-white">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/our-story" className="hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-white">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:contact@ishtakari.com" className="hover:text-white">
                  contact@ishtakari.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <Link href="https://instagram.com/ishtakari" className="hover:text-white">
                  @ishtakari
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-400"
              />
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Ishtakari. All rights reserved.
            </div>
            <div className="flex items-center justify-start md:justify-end gap-1 text-sm text-gray-300">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Kumar Arnim
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

