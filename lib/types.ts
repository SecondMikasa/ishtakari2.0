export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  images: string[]
  description: string
  specifications: Record<string, string | string[]>
  new?: boolean
  bestseller?: boolean
}

export interface CartItem extends Product {
  quantity: number
  selectedSpecs: Record<string, string>
}

export interface Category {
  name: string
  image: string
  description: string
  filters: Filter[]
}

export interface Filter {
  name: string
  type: 'select' | 'range' | 'color'
  options?: string[]
  range?: { min: number; max: number }
}

