import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export function CartSheet() {
  const { items, updateQuantity, removeFromCart } = useCart()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <SheetContent className="w-full sm:max-w-xl flex flex-col h-full">
      <SheetHeader className="flex-shrink-0">
        <SheetTitle className="text-xl font-bold text-center">YOUR SHOPPING BAG</SheetTitle>
      </SheetHeader>
      <div className="flex-1 overflow-auto mt-8">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty</p>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium text-muted-foreground">
              <div>PRODUCT</div>
              <div className="text-center">QUANTITY</div>
              <div className="text-right">TOTAL</div>
            </div>
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-[2fr,1fr,1fr] gap-4 items-center pb-4 border-b">
                <div className="flex gap-4">
                  <div className="relative aspect-square h-20 w-20 min-w-fit overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.size || 'One Size'}
                    </p>
                    <p className="text-sm text-muted-foreground">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Enclose a heartfelt note (free and optional)
                </label>
                <Textarea 
                  placeholder="Your message here..."
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex-shrink-0 border-t pt-6 mt-6">
        <div className="space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>TOTAL:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Shipping & taxes calculated at checkout
          </p>
          <Button className="w-full bg-black hover:bg-black/90 text-white">
            CHECKOUT
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}

