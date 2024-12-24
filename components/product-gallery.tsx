'use client'

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="grid gap-4">
      <div className="aspect-square relative rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-square relative rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? "border-fuchsia-600" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

