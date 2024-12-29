import { HeroSection } from '@/components/hero-section'
import { FeaturedProducts } from '@/components/featured-products'
import { Categories } from '@/components/categories'
import { AboutSection } from '@/components/about-section'
import { Testimonials } from '@/components/testimonials'
import { BlogPosts } from '@/components/blog-posts'
import { Newsletter } from '@/components/newsletter'
import { Features } from '@/components/features'

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Features />
      <FeaturedProducts />
      <Categories />
      <AboutSection />
      <Testimonials />
      <BlogPosts />
      <Newsletter />
    </div>
  )
}

