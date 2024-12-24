'use client'

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleSpecChange = (name: string, value: string) => {
    setSelectedSpecs(prev => ({ ...prev, [name]: value }))
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedSpecs
    })
  }

  const renderSpecInput = (name: string, value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <Select onValueChange={(value) => handleSpecChange(name, value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select ${name}`} />
          </SelectTrigger>
          <SelectContent>
            {value.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    } else {
      return <span>{value}</span>
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-muted-foreground mt-2">
          MRP inclusive of all taxes
        </p>
        <div className="text-2xl font-bold mt-4">
          ₹{product.price.toLocaleString()}
        </div>
      </div>

      {Object.entries(product.specifications).map(([name, value]) => (
        <div key={name} className="space-y-2">
          <Label className="text-base">{name}</Label>
          {renderSpecInput(name, value)}
        </div>
      ))}

      <div className="space-y-4">
        <Label className="text-base">Quantity</Label>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full bg-black hover:bg-black/90"
        onClick={handleAddToCart}
      >
        ADD TO CART • ₹{(product.price * quantity).toLocaleString()}
      </Button>

      <div className="prose prose-sm">
        <p>{product.description}</p>
      </div>
    </div>
  )
}

