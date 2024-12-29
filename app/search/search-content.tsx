'use client'

import { useSearchParams } from 'next/navigation'
import { ProductGrid } from "@/components/product-grid"

export default function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <>
      <h2 className="text-2xl mb-4">Results for &apos;{query}&apos;</h2>
      <ProductGrid searchQuery={query || ''} />
    </>
  )
}

