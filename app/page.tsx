import Link from "next/link"
import { Beer, ChevronRight, MapPin, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductCard from "@/components/product-card"
import CategoryCard from "@/components/category-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-yellow-400 px-4 py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Beer className="h-6 w-6" />
              <span>Zé Clone</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Delivery Address</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Link href="/cart">
                <Button variant="outline" size="icon" className="rounded-full bg-white">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-3 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input placeholder="Search for beers, water, soft drinks..." className="pl-10 bg-white rounded-full" />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to Zé Clone!</h1>
          <p className="mb-4">Cold drinks delivered to your door in minutes.</p>
          <Button className="bg-black hover:bg-gray-800 text-white">Order Now</Button>
        </div>

        {/* Categories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <Link href="/categories" className="text-sm text-gray-600 flex items-center">
              See all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard name="Beer" image="/placeholder.svg?height=100&width=100" />
            <CategoryCard name="Soft Drinks" image="/placeholder.svg?height=100&width=100" />
            <CategoryCard name="Water" image="/placeholder.svg?height=100&width=100" />
            <CategoryCard name="Snacks" image="/placeholder.svg?height=100&width=100" />
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Best Sellers</h2>
            <Link href="/products" className="text-sm text-gray-600 flex items-center">
              See all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProductCard
              id="1"
              name="Heineken"
              price={4.99}
              image="/placeholder.svg?height=200&width=200"
              description="330ml bottle"
            />
            <ProductCard
              id="2"
              name="Coca-Cola"
              price={2.49}
              image="/placeholder.svg?height=200&width=200"
              description="2L bottle"
            />
            <ProductCard
              id="3"
              name="Corona Extra"
              price={5.49}
              image="/placeholder.svg?height=200&width=200"
              description="355ml bottle"
            />
            <ProductCard
              id="4"
              name="Stella Artois"
              price={4.79}
              image="/placeholder.svg?height=200&width=200"
              description="330ml bottle"
            />
          </div>
        </section>

        {/* Promotions */}
        <section>
          <h2 className="text-xl font-bold mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Buy 2, Get 1 Free</h3>
              <p className="mb-4">On selected beers this weekend!</p>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
              >
                View Offer
              </Button>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-400 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">20% Off Soft Drinks</h3>
              <p className="mb-4">Limited time offer!</p>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-red-500"
              >
                View Offer
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Zé Clone</h3>
              <p className="text-sm text-gray-600">The best way to get your favorite drinks delivered to your door.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-gray-600">
                Email: support@zeclone.com
                <br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Zé Clone. All rights reserved.</p>
            <p className="mt-1">This is a demo project and not affiliated with the real Zé Delivery.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
