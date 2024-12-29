'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useCart } from '@/contexts/cart-context'
import { categoryData } from '@/lib/category-data'
import { formatCurrency } from '@/lib/utils'

type Params = {
  id: string;
}

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const allProducts: Product[] = Object.values(categoryData).flatMap(category => category.featuredProducts)

export default function ProductPage({ params }: { params: Params }) {
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(params.id))
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      notFound()
    }
  }, [params.id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image src={product.image} alt={product.name} fill className="object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">{formatCurrency(product.price)}</p>
          <p className="mb-6">{product.description || 'No description available.'}</p>
          <Button onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

