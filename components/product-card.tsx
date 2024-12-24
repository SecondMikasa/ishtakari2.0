'use client'

import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">₹{product.price.toLocaleString()}</p>
          <Button
            onClick={() => addToCart(product)}
            variant="ghost"
            size="icon"
            className="hover:text-fuchsia-600"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

