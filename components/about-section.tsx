import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              From a workshop in Lahore to a nationwide brand
            </h2>
            <p className="text-lg text-gray-600">
              Hamza&apos;s Furniture started as a small workshop in Lahore, crafting quality furniture for local homes. Today, we&apos;ve grown into a beloved brand across Pakistan, known for our commitment to quality, style, and affordability.
            </p>
            <p className="text-lg text-gray-600">
              Our journey is a testament to Pakistani craftsmanship and entrepreneurship. We&apos;re proud to bring beautiful, functional furniture to homes across the nation.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn Our Story
              </Button>
            </Link>
          </div>
          <div className="relative aspect-[4/3] bg-gray-100">
            <Image 
              src="/30.jpg" 
              alt="Hamza's Furniture workshop" 
              fill 
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

