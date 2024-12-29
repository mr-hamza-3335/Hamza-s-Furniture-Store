'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

export interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    onAddToCart()
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-col items-start gap-2">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600">{formatCurrency(product.price)}</p>
          <Button variant="outline" size="sm" className="w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

