'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { products } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="p-6 pb-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="w-full pl-12 pr-4 h-14 text-base border-gray-200 rounded-full focus-visible:ring-0 focus-visible:border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        {searchQuery && (
          <div className="border-t max-h-[400px] overflow-auto p-6 space-y-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">No products found</p>
            ) : (
              filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg"
                  onClick={() => onOpenChange(false)}
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <p className="text-sm font-medium">₹{product.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

