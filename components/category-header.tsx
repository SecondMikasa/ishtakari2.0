import { Category } from "@/lib/types"

interface CategoryHeaderProps {
  category: Category
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="bg-gray-50 py-12 w-full">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
      </div>
    </div>
  )
}

