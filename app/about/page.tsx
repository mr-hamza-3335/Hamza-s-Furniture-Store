import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Hamza&apos;s Furniture</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mb-6 text-lg">
            Founded in 2010 in Lahore, Hamza&apos;s Furniture has grown from a small local workshop to a nationwide brand known for quality and style. Our journey began with a simple idea: to create beautiful, functional furniture that reflects the rich cultural heritage of Pakistan while embracing modern design principles.
          </p>
          <p className="mb-6 text-lg">
            Today, we&apos;re proud to offer a wide range of furniture and home decor items, each piece carefully crafted to bring comfort and elegance to Pakistani homes. Our commitment to quality craftsmanship, sustainable practices, and customer satisfaction remains at the heart of everything we do.
          </p>
          <p className="mb-6 text-lg">
            As we continue to grow, we remain dedicated to our roots, supporting local artisans and contributing to the vibrant Pakistani design community. We believe in creating furniture that not only looks good but also tells a story - a story of tradition, innovation, and the beauty of Pakistani craftsmanship.
          </p>
          <Button asChild>
            <Link href="/products">Explore Our Collections</Link>
          </Button>
        </div>
        <div className="space-y-6">
          <div className="relative h-[300px]">
            <Image
              src="/33.jpg"
              alt="Hamza's Furniture workshop"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/29.jpg"
              alt="Hamza's Furniture showroom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

