import { Suspense } from 'react'
import SearchContent from './search-content'

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Search Results</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  )
}

