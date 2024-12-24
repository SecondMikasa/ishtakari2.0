import { use } from 'react'
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryHeader } from "@/components/category-header"
import { ProductGrid } from "@/components/product-grid"
import { FilterDrawer } from "@/components/filter-drawer"
import { categories, getProductsByCategory, getCategoryByName } from "@/lib/data"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params)
  const category = getCategoryByName(resolvedParams.category)
  
  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(category.name)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <CategoryHeader category={category} />
        <div className="container py-12 px-4 md:px-6">
          <ProductGrid products={products} viewMode="grid" />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

