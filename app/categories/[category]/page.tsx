import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { categoryData } from '@/lib/category-data'

type Params = {
  category: string;
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = categoryData[params.category as keyof typeof categoryData]
  if (!category) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{category.title}</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">{category.description}</p>
          <ul className="list-disc list-inside mb-6">
            {category.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
        <div className="relative aspect-video">
          <Image 
            src={category.heroImage} 
            alt={category.title} 
            fill 
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
      <ProductGrid category={params.category} />
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Other Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(categoryData).map(([key, value]) => (
            key !== params.category && (
              <Link key={key} href={`/categories/${key}`} className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.shortDescription}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category: category,
  }))
}

