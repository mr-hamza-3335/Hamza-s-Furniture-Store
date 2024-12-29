'use client'

import { ProductCard } from "@/components/product-card"
import { useCart } from '@/contexts/cart-context'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const featuredProducts = [
  { id: 1, name: "Elegant Sofa", price: 75000, image: "/1.webp" },
  { id: 2, name: "Modern Dining Table", price: 50000, image: "/2.webp" },
  { id: 3, name: "Comfortable Armchair", price: 30000, image: "/13.webp" },
  { id: 4, name: "Stylish Coffee Table", price: 25000, image: "/16.jpg" },
]

export function FeaturedProducts() {
  const { addToCart } = useCart()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart({ ...product, quantity: 1 })}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

