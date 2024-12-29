'use client'

import { useState } from 'react'
import Link from "next/link"
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from '@/contexts/cart-context'
import { SearchBar } from "@/components/search-bar"
import { categoryData } from '@/lib/category-data'

const mainNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

const productNav = [
  { name: "All products", href: "/products" },
  ...Object.entries(categoryData).map(([key, value]) => ({
    name: value.title,
    href: `/categories/${key}`,
  })),
]

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)  // Explicit typing
  const { cart } = useCart()

  return (
    <>
      <div className="bg-[#2A254B] text-white text-center py-2 text-sm">
        Free delivery on all orders over Rs. 5000 with code PAKISTAN at checkout
      </div>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    {mainNav.concat(productNav).map((item) => (
                      <Link key={item.name} href={item.href} className="text-sm hover:text-gray-600 transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <Link href="/" className="text-xl font-semibold ml-4 md:ml-0">
                Hamza&apos;s Furniture
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {mainNav.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm hover:text-gray-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>
            </div>
          </div>
          {isSearchOpen && (
            <div className="py-4">
              <SearchBar />
            </div>
          )}
          <nav className="hidden md:block border-t">
            <ul className="flex items-center justify-center space-x-8 py-4">
              {productNav.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
