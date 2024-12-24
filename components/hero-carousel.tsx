'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: "https://images.pexels.com/photos/12718066/pexels-photo-12718066.jpeg",
    title: "Handcrafted Luxury",
    description: "Discover our exquisite collection of traditional footwear",
  },
  {
    image: "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg",
    title: "Festive Collection",
    description: "Elegant clutches and potlis for special occasions",
  },
  {
    image: "https://images.pexels.com/photos/14544611/pexels-photo-14544611.jpeg",
    title: "Wedding Season",
    description: "Complete your bridal look with our designer juttis",
  }
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log('Carousel initialized')
    }
  }, [emblaApi])

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    productsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[80vh]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="max-w-2xl space-y-6 text-white">
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        {slide.title}
                      </h1>
                      <p className="text-lg text-gray-200">
                        {slide.description}
                      </p>
                      <Button 
                        size="lg" 
                        className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-700"
                        onClick={scrollToProducts}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-white/50 [&.active]:bg-white"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

