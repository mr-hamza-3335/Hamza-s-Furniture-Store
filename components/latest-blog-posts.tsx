import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const latestPosts = [
  {
    title: "The Art of Minimalist Living",
    slug: "art-of-minimalist-living",
    excerpt: "Discover how minimalist furniture can transform your living space and mindset.",
    image: "/7.webp",
    date: "2024-03-15",
  },
  {
    title: "Sustainable Furniture Trends",
    slug: "sustainable-furniture-trends",
    excerpt: "Exploring eco-friendly materials and sustainable production methods in furniture design.",
    image: "/5.webp",
    date: "2024-03-12",
  },
  {
    title: "Color Psychology in Interior Design",
    slug: "color-psychology-interior-design",
    excerpt: "Learn how different colors can affect the mood and atmosphere of your home.",
    image: "/6.webp",
    date: "2024-03-08",
  },
]

export function LatestBlogPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

