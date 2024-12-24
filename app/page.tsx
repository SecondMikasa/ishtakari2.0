import { SiteHeader } from "@/components/site-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { CategorySection } from "@/components/category-section"
import { ProductSections } from "@/components/product-sections"
import { StyleSection } from "@/components/style-section"
import { InspirationGallery } from "@/components/inspiration-gallery"
import { BrandFeatures } from "@/components/brand-features"
import { SiteFooter } from "@/components/site-footer"
import { newArrivals, bestsellers } from "@/lib/data"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroCarousel />
        <CategorySection />
        <ProductSections newArrivals={newArrivals} bestsellers={bestsellers} />
        <StyleSection />
        <InspirationGallery />
        <BrandFeatures />
      </main>
      <SiteFooter />
    </>
  )
}

