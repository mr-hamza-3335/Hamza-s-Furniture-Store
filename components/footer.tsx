import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, LinkedinIcon as LinkedIn, Twitter, Youtube } from 'lucide-react'

const categories = [
  { name: "New arrivals", href: "#" },
  { name: "Best sellers", href: "#" },
  { name: "Recently viewed", href: "#" },
  { name: "Popular this week", href: "#" },
  { name: "All products", href: "#" },
]

const ourCompany = [
  { name: "About us", href: "/about" },
  { name: "Vacancies", href: "#" },
  { name: "Contact us", href: "/contact" },
  { name: "Privacy", href: "#" },
  { name: "Returns policy", href: "#" },
]

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: LinkedIn },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Our Company</h3>
            <ul className="space-y-2">
              {ourCompany.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">Join our mailing list</h3>
            <form className="flex gap-2 mb-4">
              <Input type="email" placeholder="your@email.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
              <Button variant="secondary">Sign up</Button>
            </form>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hamza&apos;s Furniture Store - Pakistan</p>
        </div>
      </div>
    </footer>
  )
}

