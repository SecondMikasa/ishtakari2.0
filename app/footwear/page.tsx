import { use } from 'react'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryHeader } from "@/components/category-header"
import { ProductGrid } from "@/components/product-grid"
import { getCategoryByName, getProductsByCategory } from "@/lib/data"
import { StyleSection } from "@/components/style-section";
import { InspirationSection } from "@/components/inspiration-section";

export default function FootwearPage() {
  const category = getCategoryByName('Footwear')
  
  if (!category) {
    throw new Error("Category not found")
  }

  const products = getProductsByCategory(category.name)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <CategoryHeader category={category} />
        <div className="container py-12 px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">All Footwear</h2>
            <p className="mt-2 text-muted-foreground">
              Discover our collection of comfortable and stylish footwear
            </p>
          </div>
          <ProductGrid products={products} viewMode="grid" />
        </div>
      </main>
      <StyleSection />
      <InspirationSection />
      <SiteFooter />
    </div>
  )
}

