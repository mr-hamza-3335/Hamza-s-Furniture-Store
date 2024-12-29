import { Truck, Paintbrush, BadgeDollarSign, Recycle } from 'lucide-react'

const features = [
  {
    title: "Next day delivery",
    description: "Order before 3pm and get your order the next day as standard",
    icon: Truck,
  },
  {
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship",
    icon: Paintbrush,
  },
  {
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere",
    icon: BadgeDollarSign,
  },
  {
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable",
    icon: Recycle,
  },
]

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-semibold text-center mb-12">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start space-y-3">
              <feature.icon className="h-6 w-6" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

