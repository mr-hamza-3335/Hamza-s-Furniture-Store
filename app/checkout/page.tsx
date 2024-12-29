'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/cart-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatCurrency } from '@/lib/utils'

const steps = ['Shipping', 'Payment', 'Review']

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [shippingInfo, setShippingInfo] = useState({ name: '', email: '', address: '' })
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' })
  const { cart, clearCart } = useCart()
  const router = useRouter()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 500 // Fixed shipping cost of 500 PKR
  const total = subtotal + shipping

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(1)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order placed:', { shippingInfo, paymentInfo, cart, total })
    clearCart()
    router.push('/order-confirmation')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step} className={`flex items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              {index + 1}
            </div>
            {step}
          </div>
        ))}
      </div>
      {currentStep === 0 && (
        <form onSubmit={handleShippingSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={shippingInfo.name}
            onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
            required
          />
          <Input
            placeholder="Shipping Address"
            value={shippingInfo.address}
            onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
            required
          />
          <Button type="submit">Continue to Payment</Button>
        </form>
      )}
      {currentStep === 1 && (
        <form onSubmit={handlePaymentSubmit} className="space-y-4">
          <Input
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
            required
          />
          <Input
            placeholder="Expiry (MM/YY)"
            value={paymentInfo.expiry}
            onChange={(e) => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
            required
          />
          <Input
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
            required
          />
          <Button type="submit">Review Order</Button>
        </form>
      )}
      {currentStep === 2 && (
        <form onSubmit={handleOrderSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <Button type="submit">Place Order</Button>
        </form>
      )}
    </div>
  )
}

