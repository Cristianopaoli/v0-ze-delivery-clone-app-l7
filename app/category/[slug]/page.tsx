import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import ProductCard from "@/components/product-card"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // This would normally come from a database or API
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // These would normally be filtered from a database based on the category
  const products = [
    {
      id: "1",
      name: "Heineken",
      price: 4.99,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
    {
      id: "3",
      name: "Corona Extra",
      price: 5.49,
      image: "/placeholder.svg?height=200&width=200",
      description: "355ml bottle",
    },
    {
      id: "4",
      name: "Stella Artois",
      price: 4.79,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
    {
      id: "5",
      name: "Budweiser",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
    {
      id: "6",
      name: "Guinness",
      price: 5.99,
      image: "/placeholder.svg?height=200&width=200",
      description: "440ml can",
    },
    {
      id: "7",
      name: "Carlsberg",
      price: 4.49,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
    {
      id: "8",
      name: "Peroni",
      price: 5.29,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
    {
      id: "9",
      name: "Asahi",
      price: 5.99,
      image: "/placeholder.svg?height=200&width=200",
      description: "330ml bottle",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Back to home</span>
      </Link>

      <h1 className="text-2xl font-bold mb-6">{categoryName}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}
