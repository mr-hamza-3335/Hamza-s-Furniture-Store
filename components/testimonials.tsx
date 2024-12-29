import Image from 'next/image'

const testimonials = [
  {
    quote: "The quality of Hamza's furniture is outstanding. It has completely transformed our living room!",
    author: "Fatima K.",
    location: "Karachi",
    image: "/12.webp"
  },
  {
    quote: "Excellent customer service and prompt delivery. I highly recommend Hamza's Furniture!",
    author: "Ahmed R.",
    location: "Lahore",
    image: "/11.webp"
  },
  {
    quote: "The attention to detail in their furniture is amazing. It's both beautiful and functional.",
    author: "Zainab M.",
    location: "Islamabad",
    image: "/12.webp"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.author} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <span className="font-semibold block">{testimonial.author}</span>
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

