import Link from "next/link"
import Image from "next/image"
import { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
  viewMode: 'grid' | 'list'
}

export function ProductGrid({ products, viewMode }: ProductGridProps) {
  return (
    <div className={`grid gap-6 w-full ${
      viewMode === 'grid'
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        : 'grid-cols-1'
    }`}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group"
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase">
                {product.category}
              </span>
              {product.new && (
                <span className="text-xs font-medium text-fuchsia-600 uppercase">
                  NEW
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

