import Image from "next/image"

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
    alt: "Wedding celebration moment 1"
  },
  {
    src: "https://images.pexels.com/photos/1456614/pexels-photo-1456614.jpeg",
    alt: "Wedding celebration moment 2"
  },
  {
    src: "https://images.pexels.com/photos/1456615/pexels-photo-1456615.jpeg",
    alt: "Wedding celebration moment 3"
  },
  {
    src: "https://images.pexels.com/photos/1456616/pexels-photo-1456616.jpeg",
    alt: "Wedding celebration moment 4"
  },
  {
    src: "https://images.pexels.com/photos/1456617/pexels-photo-1456617.jpeg",
    alt: "Wedding celebration moment 5"
  }
]

export function InspirationGallery() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-4xl font-serif text-center mb-12">Get Inspired!</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

