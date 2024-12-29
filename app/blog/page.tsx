import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    title: "5 Tips for Choosing the Perfect Sofa",
    slug: "choosing-perfect-sofa",
    excerpt: "Learn how to select a sofa that combines style, comfort, and durability for your Pakistani home.",
    image: "/4.webp",
    date: "2023-07-15",
  },
  {
    title: "Incorporating Traditional Pakistani Elements in Modern Decor",
    slug: "pakistani-elements-modern-decor",
    excerpt: "Discover how to blend traditional Pakistani design with contemporary furniture trends.",
    image: "/5.webp",
    date: "2023-07-10",
  },
  {
    title: "Sustainable Furniture: Our Commitment to the Environment",
    slug: "sustainable-furniture-commitment",
    excerpt: "Learn about our eco-friendly practices and how we're working towards a greener future.",
    image: "/6.webp",
    date: "2023-07-05",
  },
  {
    title: "The Art of Mixing and Matching Furniture Styles",
    slug: "mixing-matching-furniture-styles",
    excerpt: "Expert tips on how to create a cohesive look with different furniture styles.",
    image: "/7.webp",
    date: "2023-06-28",
  },
  {
    title: "Caring for Your Wooden Furniture: A Complete Guide",
    slug: "wooden-furniture-care-guide",
    excerpt: "Essential tips and tricks to keep your wooden furniture looking beautiful for years to come.",
    image: "/8.webp",
    date: "2023-06-20",
  },
  {
    title: "Small Space Solutions: Furniture for Compact Living",
    slug: "small-space-furniture-solutions",
    excerpt: "Innovative furniture ideas to maximize space in small Pakistani apartments and homes.",
    image: "/9.webp",
    date: "2023-06-15",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
              <Image src={post.image} alt={post.title} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:underline">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

