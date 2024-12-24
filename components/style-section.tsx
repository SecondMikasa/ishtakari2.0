import Image from "next/image"
import { Button } from "@/components/ui/button"

export function StyleSection() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
        <Image
          src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          alt="Woman in red traditional dress"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-8 left-8 bg-white rounded-full p-2">
          <div className="relative w-24 h-24">
            <Image
              src="https://images.pexels.com/photos/13401811/pexels-photo-13401811.jpeg"
              alt="Gold juttis"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center">
        <Image
          src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
          alt="Woman in black and pink saree"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
          <h2 className="text-5xl font-serif mb-6">Style 'em Like a Star</h2>
          <p className="text-lg mb-8 max-w-md">
            The most gorgeous looks spotted on your favourite celebs to get your dressing game going.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="w-fit text-white border-white hover:bg-white/10"
          >
            DISCOVER EDIT
          </Button>
        </div>
      </div>
    </section>
  )
}

