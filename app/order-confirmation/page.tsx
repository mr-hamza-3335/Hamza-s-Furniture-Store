import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">Your order has been received and is being processed. We&apos;ll send you an email with the order details and tracking information once your order ships.</p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  )
}

