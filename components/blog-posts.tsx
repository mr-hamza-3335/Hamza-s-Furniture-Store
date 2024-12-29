import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const latestPosts = [
  {
    title: "5 Tips for Choosing the Perfect Sofa",
    slug: "choosing-perfect-sofa",
    excerpt: "Learn how to select a sofa that combines style, comfort, and durability for your Pakistani home.",
    image: "/5.webp",
    date: "2023-07-15",
  },
  {
    title: "Incorporating Traditional Pakistani Elements in Modern Decor",
    slug: "pakistani-elements-modern-decor",
    excerpt: "Discover how to blend traditional Pakistani design with contemporary furniture trends.",
    image: "/7.webp",
    date: "2023-07-10",
  },
  {
    title: "Sustainable Furniture: Our Commitment to the Environment",
    slug: "sustainable-furniture-commitment",
    excerpt: "Learn about our eco-friendly practices and how we're working towards a greener future.",
    image: "/6.webp",
    date: "2023-07-05",
  },
]

export function BlogPosts() {
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
