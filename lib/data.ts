import { Product, Category } from './types'

export const categories: Category[] = [
  {
    name: "Juttis",
    image: "https://images.pexels.com/photos/13401811/pexels-photo-13401811.jpeg",
    description: "Handcrafted traditional footwear with modern aesthetics",
    filters: [
      { name: "Size", type: "select", options: ["36", "37", "38", "39", "40", "41"] },
      { name: "Color", type: "color", options: ["Gold", "Silver", "Red", "Green", "Blue"] },
      { name: "Price", type: "range", range: { min: 1000, max: 10000 } }
    ]
  },
  {
    name: "Bags",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    description: "Elegant bags for every occasion",
    filters: [
      { name: "Capacity", type: "select", options: ["Small", "Medium", "Large"] },
      { name: "Color", type: "color", options: ["Black", "Brown", "Beige", "Red", "Blue"] },
      { name: "Price", type: "range", range: { min: 2000, max: 20000 } }
    ]
  },
  {
    name: "Clutches",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    description: "Statement clutches for special occasions",
    filters: [
      { name: "Style", type: "select", options: ["Box", "Envelope", "Wristlet"] },
      { name: "Color", type: "color", options: ["Gold", "Silver", "Black", "Red", "Blue"] },
      { name: "Price", type: "range", range: { min: 3000, max: 15000 } }
    ]
  },
  {
    name: "Potlis",
    image: "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg",
    description: "Traditional potli bags with modern designs",
    filters: [
      { name: "Size", type: "select", options: ["Small", "Medium", "Large"] },
      { name: "Embellishment", type: "select", options: ["Beads", "Sequins", "Zari", "Mirrors"] },
      { name: "Price", type: "range", range: { min: 1500, max: 8000 } }
    ]
  },
  {
    name: "Footwear",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    description: "A wide variety of footwear options",
    filters: [
      { name: "Type", type: "select", options: ["Sandals", "Flats", "Juttis"] },
      { name: "Size", type: "select", options: ["36", "37", "38", "39", "40", "41"] },
      { name: "Color", type: "color", options: ["Brown", "Black", "Red", "Blue", "Gold", "Silver"] },
      { name: "Price", type: "range", range: { min: 1000, max: 10000 } }
    ]
  },
  {
    name: "Gifting",
    image: "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg",
    description: "Perfect gifts for any occasion",
    filters: [
      { name: "Type", type: "select", options: ["Gift Sets", "Wedding Collections"] },
      { name: "Price", type: "range", range: { min: 5000, max: 20000 } }
    ]
  }
]

export const products: Product[] = [
  // Juttis
  {
    id: "jutti-1",
    name: "Noorani Jutti",
    price: 7990,
    category: "Juttis",
    image: "https://images.pexels.com/photos/13401811/pexels-photo-13401811.jpeg",
    images: [
      "https://images.pexels.com/photos/13401811/pexels-photo-13401811.jpeg",
      "https://images.pexels.com/photos/13401812/pexels-photo-13401812.jpeg",
      "https://images.pexels.com/photos/13401813/pexels-photo-13401813.jpeg",
    ],
    description: "Traditional handcrafted juttis with intricate mirror work",
    specifications: {
      "Size": ["36", "37", "38", "39", "40", "41"],
      "Color": "Gold",
      "Material": "Genuine Leather",
      "Sole": "Leather",
      "Heel Height": "0.5 inches"
    },
    new: true
  },
  {
    id: "jutti-2",
    name: "Pearl Embellished Jutti",
    price: 6990,
    category: "Juttis",
    image: "https://images.pexels.com/photos/14544622/pexels-photo-14544622.jpeg",
    images: [
      "https://images.pexels.com/photos/14544622/pexels-photo-14544622.jpeg",
      "https://images.pexels.com/photos/14544623/pexels-photo-14544623.jpeg",
      "https://images.pexels.com/photos/14544624/pexels-photo-14544624.jpeg",
    ],
    description: "Elegant juttis adorned with pearls and beads",
    specifications: {
      "Size": ["36", "37", "38", "39", "40"],
      "Color": "Ivory",
      "Material": "Genuine Leather",
      "Sole": "Leather",
      "Heel Height": "0.5 inches"
    },
    bestseller: true
  },
  // Bags
  {
    id: "bag-1",
    name: "Royal Zardozi Bag",
    price: 12990,
    category: "Bags",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      "https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg",
      "https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg",
    ],
    description: "Luxurious bag with traditional zardozi embroidery",
    specifications: {
      "Capacity": "Medium",
      "Color": ["Maroon", "Gold"],
      "Material": "Silk, Zardozi",
      "Dimensions": "12 x 8 x 4 inches",
      "Style": "Shoulder Bag"
    },
    new: true
  },
  // Clutches
  {
    id: "clutch-1",
    name: "Crystal Evening Clutch",
    price: 8990,
    category: "Clutches",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    images: [
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
      "https://images.pexels.com/photos/1927260/pexels-photo-1927260.jpeg",
      "https://images.pexels.com/photos/1927261/pexels-photo-1927261.jpeg",
    ],
    description: "Elegant crystal-embellished evening clutch",
    specifications: {
      "Style": "Box",
      "Color": "Silver",
      "Material": "Metal, Crystal",
      "Dimensions": "8 x 4 x 2 inches",
      "Closure": "Clasp"
    },
    bestseller: true
  },
  // Potlis
  {
    id: "potli-1",
    name: "Bridal Potli",
    price: 5990,
    category: "Potlis",
    image: "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg",
    images: [
      "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg",
      "https://images.pexels.com/photos/1721938/pexels-photo-1721938.jpeg",
      "https://images.pexels.com/photos/1721939/pexels-photo-1721939.jpeg",
    ],
    description: "Traditional bridal potli with kundan work",
    specifications: {
      "Size": "Medium",
      "Color": ["Red", "Gold"],
      "Material": "Silk, Kundan",
      "Dimensions": "6 inches diameter",
      "Embellishment": "Kundan"
    },
    new: true
  },
  {
    id: "footwear-1",
    name: "Classic Leather Sandals",
    price: 4990,
    category: "Footwear",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg",
      "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg",
    ],
    description: "Comfortable leather sandals with elegant design",
    specifications: {
      "Size": ["36", "37", "38", "39", "40", "41"],
      "Color": ["Brown", "Black"],
      "Material": "Genuine Leather",
      "Sole": "Rubber",
      "Heel Height": "1 inch"
    },
    new: true
  },
  {
    id: "footwear-2",
    name: "Embroidered Flats",
    price: 3990,
    category: "Footwear",
    image: "https://images.pexels.com/photos/1447367/pexels-photo-1447367.jpeg",
    images: [
      "https://images.pexels.com/photos/1447367/pexels-photo-1447367.jpeg",
      "https://images.pexels.com/photos/1447368/pexels-photo-1447368.jpeg",
      "https://images.pexels.com/photos/1447369/pexels-photo-1447369.jpeg",
    ],
    description: "Elegant flats with traditional embroidery",
    specifications: {
      "Size": ["36", "37", "38", "39", "40"],
      "Color": ["Red", "Blue"],
      "Material": "Cotton, Leather",
      "Sole": "Rubber",
      "Heel Height": "0.5 inch"
    },
    bestseller: true
  },
  {
    id: "gift-1",
    name: "Luxury Gift Box Set",
    price: 9990,
    category: "Gifting",
    image: "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg",
    images: [
      "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg",
      "https://images.pexels.com/photos/264788/pexels-photo-264788.jpeg",
      "https://images.pexels.com/photos/264789/pexels-photo-264789.jpeg",
    ],
    description: "Premium gift set including juttis and matching potli",
    specifications: {
      "Contents": ["Juttis", "Potli", "Gift Box"],
      "Jutti Size": ["36", "37", "38", "39", "40"],
      "Color": ["Gold", "Rose Gold"],
      "Packaging": "Premium Gift Box",
      "Customization": "Available"
    },
    new: true
  },
  {
    id: "gift-2",
    name: "Wedding Collection Box",
    price: 15990,
    category: "Gifting",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    images: [
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
      "https://images.pexels.com/photos/1927260/pexels-photo-1927260.jpeg",
      "https://images.pexels.com/photos/1927261/pexels-photo-1927261.jpeg",
    ],
    description: "Complete wedding accessories set",
    specifications: {
      "Contents": ["Juttis", "Clutch", "Potli", "Gift Box"],
      "Jutti Size": ["36", "37", "38", "39", "40"],
      "Color": ["Red", "Maroon"],
      "Packaging": "Premium Wedding Box",
      "Customization": "Available"
    },
    bestseller: true
  }
]

export const newArrivals = products.filter(product => product.new)
export const bestsellers = products.filter(product => product.bestseller)

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(category => 
    category.name.toLowerCase() === name.toLowerCase()
  )
}

