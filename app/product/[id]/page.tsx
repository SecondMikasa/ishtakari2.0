import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductRecommendations } from "@/components/product-recommendations"
import { getProductById, getRelatedProducts } from "@/lib/data"

export default function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <>
      <SiteHeader />
      <main className="py-12">
        <div className="container">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-fuchsia-600">Home</a>
              </li>
              <li>/</li>
              <li>
                <a href={`/${product.category.toLowerCase()}`} className="hover:text-fuchsia-600">
                  {product.category}
                </a>
              </li>
              <li>/</li>
              <li>{product.name}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ProductGallery images={product.images} />
            <ProductInfo product={product} />
          </div>
          <ProductRecommendations products={relatedProducts} />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

