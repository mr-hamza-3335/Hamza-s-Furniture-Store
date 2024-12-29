import Image from 'next/image'

const instagramPosts = [
  { id: 1, image: "/58.jpg" },
  { id: 2, image: "/59.jpg" },
  { id: 3, image: "/44.jpg" },
  { id: 4, image: "/68.jpg" },
]

export function InstagramFeed() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Follow Us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative aspect-square">
              <Image src={post.image} alt={`Instagram post ${post.id}`} fill className="object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

