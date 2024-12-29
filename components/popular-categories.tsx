import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { name: 'Plant Pots', image: '/68.jpg', href: '/categories/plant-pots' },
  { name: 'Ceramics', image: '/48.jpg', href: '/categories/ceramics' },
  { name: 'Tables', image: '/34.jpg', href: '/categories/tables' },
  { name: 'Chairs', image: '/66.jpg', href: '/categories/chairs' },
  { name: 'Crockery', image: '/47.jpg', href: '/categories/crockery' },
  { name: 'Tableware', image: '/20.jpg', href: '/categories/tableware' },
]

export function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={category.image} alt={category.name} fill className="object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
