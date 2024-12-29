import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-6 text-lg">
            We&apos;d love to hear from you. Whether you have a question about our products, need help with an order, or just want to say hello, don&apos;t hesitate to reach out.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
              <p>123 Furniture Street, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
              <p>+92 123 456 7890</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
              <p>info@hamzasfurniture.com</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Store Hours</h2>
            <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p>Sunday: 12:00 PM - 6:00 PM</p>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
            <Input id="subject" placeholder="Subject of your message" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <Textarea id="message" placeholder="Your message" rows={4} />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

