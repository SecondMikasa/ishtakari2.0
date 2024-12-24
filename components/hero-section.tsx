import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&auto=format&fit=crop"
        alt="Fashion background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="container relative">
        <div className="max-w-2xl space-y-6 text-white">
          <div className="inline-block rounded-lg bg-fuchsia-600 px-3 py-1 text-sm font-medium">
            New Collection
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Discover Timeless Elegance
          </h1>
          <p className="text-lg text-gray-200">
            Explore our exquisite collection of handcrafted accessories that blend traditional artistry with contemporary style
          </p>
          <Button size="lg" className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-700">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}

