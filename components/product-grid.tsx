'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from "@/components/product-card"
import { useCart } from '@/contexts/cart-context'
import { categoryData } from '@/lib/category-data'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const allProducts: Product[] = Object.entries(categoryData).flatMap(([category, data]) =>
  data.featuredProducts.map(product => ({ ...product, category }))
);

interface ProductGridProps {
  category?: string;
  searchQuery?: string;
}

export function ProductGrid({ category: initialCategory, searchQuery }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all')
  const { addToCart } = useCart()

  useEffect(() => {
    let filteredProducts = allProducts
    if (selectedCategory && selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory)
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    setProducts(filteredProducts)
  }, [selectedCategory, searchQuery])

  const handleAddToCart = (product: Product) => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })
  }

  return (
    <div>
      <div className="mb-6">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.keys(categoryData).map((cat) => (
              <SelectItem key={cat} value={cat}>{categoryData[cat as keyof typeof categoryData].title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
    </div>
  )
}

