import Image from "next/image"
import { Gift, Fingerprint, Brush, Palette, Diamond, Feather } from 'lucide-react'

const features = [
  { icon: Gift, label: "GIFTABLE" },
  { icon: Fingerprint, label: "UNIQUE" },
  { icon: Brush, label: "100% HANDCRAFTED" },
  { icon: Palette, label: "ARTISANAL" },
  { icon: Diamond, label: "FINEST MATERIALS" },
  { icon: Feather, label: "SUPER COMFY" }
]

const inspirationImages = [
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400",
  "/placeholder.svg?height=600&width=400"
]

export function InspirationSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-4xl font-serif text-center mb-12">Get Inspired!</h2>
        
        <div className="grid grid-cols-5 gap-4 mb-16">
          {inspirationImages.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Inspiration ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif">
            Wearing <span className="text-[#E5B875]">ISHTAKRI</span> means
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((Feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <Feature.icon className="h-12 w-12" />
              <span className="text-sm font-medium">{Feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

