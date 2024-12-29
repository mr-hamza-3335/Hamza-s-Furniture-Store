import { ProductGrid } from "@/components/product-grid"
import { categoryData } from '@/lib/category-data'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {Object.entries(categoryData).map(([key, category]) => (
          <div key={key} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <p className="mb-4 text-gray-600">{category.shortDescription}</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {category.features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button asChild variant="outline">
              <Link href={`/categories/${key}`}>
                View {category.title}
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-semibold mb-6">All Products</h2>
      <ProductGrid />
    </div>
  )
}

