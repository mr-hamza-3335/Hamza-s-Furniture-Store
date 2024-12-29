'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/products" className="text-blue-600 hover:underline">Continue shopping</Link></p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <div className="w-20 h-20 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">{formatCurrency(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16"
                  />
                  <Button variant="outline" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

