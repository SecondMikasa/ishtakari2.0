import { Product } from "@/lib/types"
import { ProductCard } from "./product-card"

interface ProductRecommendationsProps {
  products: Product[]
}

export function ProductRecommendations({ products }: ProductRecommendationsProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">You May Also Like</h2>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

