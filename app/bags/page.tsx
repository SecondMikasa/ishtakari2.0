'use client'

import { useState } from 'react'
import { CategoryHeader } from "@/components/category-header"
import { ProductGrid } from "@/components/product-grid"
import { SortFilter } from "@/components/sort-filter"
import { getCategoryByName, getProductsByCategory } from "@/lib/data"
import { Product } from "@/lib/types"

export default function BagsPage() {
  const category = getCategoryByName('Bags')
  
  if (!category) {
    throw new Error("Category not found")
  }

  const [products, setProducts] = useState<Product[]>(getProductsByCategory(category.name))

  const handleSortChange = (value: string) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (value === 'price-asc') return a.price - b.price
      if (value === 'price-desc') return b.price - a.price
      if (value === 'name-asc') return a.name.localeCompare(b.name)
      if (value === 'name-desc') return b.name.localeCompare(a.name)
      return 0
    })
    setProducts(sortedProducts)
  }

  const handleFilterChange = (filters: Record<string, any>) => {
    const filteredProducts = getProductsByCategory(category.name).filter(product => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === 'price') {
          return product.price >= value[0] && product.price <= value[1]
        }
        return product[key as keyof Product] === value
      })
    })
    setProducts(filteredProducts)
  }

  return (
    <div className="w-full">
      <CategoryHeader category={category} />
      <div className="container py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">All Bags</h2>
          <p className="mt-2 text-muted-foreground">
            Explore our collection of elegant bags for every occasion
          </p>
        </div>
        <SortFilter
          filters={category.filters}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
        />
        <ProductGrid products={products} viewMode="grid" />
      </div>
    </div>
  )
}

