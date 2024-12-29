import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Hamza&apos;s Furniture
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for exclusive offers, new product announcements, and Pakistani interior design tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="your@email.com" className="flex-1" />
          <Button type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

