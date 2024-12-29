'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/lib/cart-context"
import { categoryData } from '@/lib/category-data'

const ceramics = categoryData.ceramics.featuredProducts.slice(0, 4)

export function NewCeramics() {
  const { addToCart } = useCart()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-semibold mb-8">New ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ceramics.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={() => addToCart({ ...item, quantity: 1 })}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/products?category=ceramics">
            <Button variant="outline" size="lg">
              View collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

