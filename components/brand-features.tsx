'use client'

import { useState } from 'react'
import { Gift, Fingerprint, Brush, Palette, Diamond, Feather } from 'lucide-react'

const features = [
  { icon: Gift, label: "GIFTABLE" },
  { icon: Fingerprint, label: "UNIQUE" },
  { icon: Brush, label: "100% HANDCRAFTED" },
  { icon: Palette, label: "ARTISANAL" },
  { icon: Diamond, label: "FINEST MATERIALS" },
  { icon: Feather, label: "SUPER COMFY" }
]

export function BrandFeatures() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif">
            Wearing <span className="text-[#E5B875]">ISHTAKRI</span> means
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {features.map((Feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <Feature.icon className="h-12 w-12" />
              <span className="text-sm font-medium text-center">{Feature.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-8">
            TRADITIONAL & MODERN HANDCRAFTED INDIA'S FINEST FOOTWEAR - ISHTAKRI
          </h2>
          <div className="prose prose-gray mx-auto text-center">
            <p className="text-muted-foreground">
              Welcome to Ishtakari, where handcrafted excellence meets India's finest footwear. 
              Discover a captivating array of women's ethnic juttis, heels, mules, Kolhapur, and purses, 
              meticulously crafted with premium materials and traditional craftsmanship.
            </p>
            {isExpanded && (
              <>
                <p className="text-muted-foreground">
                  Embrace ethnic elegance with our exquisite designs, featuring intricate embroidery, 
                  luxurious fabrics, and timeless motifs celebrating India's rich heritage. 
                  Whether it's a timeless pair of kolhapuris or an intricately embroidered purse, 
                  our collection promises to elevate your wardrobe and evoke a sense of pride in 
                  India's artisanal heritage.
                </p>
                <p className="text-muted-foreground">
                  Explore our range of men's and kids' juttis, each reflecting the same level of 
                  craftsmanship and attention to detail. At Ishtakari, we take pride in creating 
                  more than just shoes; we create pieces of art that tell a story of tradition and passion.
                </p>
              </>
            )}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground underline mt-4"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

