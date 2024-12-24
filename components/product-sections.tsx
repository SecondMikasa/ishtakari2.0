'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import { Product } from "@/lib/types"

interface ProductSectionsProps {
  newArrivals: Product[]
  bestsellers: Product[]
}

export function ProductSections({ newArrivals, bestsellers }: ProductSectionsProps) {
  const [activeSection, setActiveSection] = useState<'new' | 'best'>('new')

  return (
    <div className="py-16" id="products">
      <div className="container">
        <div className="space-y-16">
          <section>
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={activeSection === 'new' ? 'default' : 'outline'}
                className="min-w-[200px]"
                onClick={() => setActiveSection('new')}
              >
                New Arrivals
              </Button>
              <Button
                variant={activeSection === 'best' ? 'default' : 'outline'}
                className="min-w-[200px]"
                onClick={() => setActiveSection('best')}
              >
                Bestsellers
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(activeSection === 'new' ? newArrivals : bestsellers).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

