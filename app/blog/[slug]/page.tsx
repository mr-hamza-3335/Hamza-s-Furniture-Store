import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

type Params = {
  slug: string;
}

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  // ... (keep your existing blog posts data)
]

export default function BlogPost({ params }: { params: Params }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{formatDate(post.date)}</p>
      <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-lg mb-8" />
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

