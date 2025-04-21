import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // This would normally come from a database or API
  const product = {
    id: params.id,
    name: params.id === "1" ? "Heineken" : "Product " + params.id,
    price: 4.99,
    description:
      "Premium quality lager beer with 5% alcohol content. Heineken is a pale lager beer with a balanced taste and a fruity aroma.",
    image: "/placeholder.svg?height=400&width=400",
    details: {
      brand: "Heineken",
      volume: "330ml",
      alcohol: "5%",
      type: "Lager",
      origin: "Netherlands",
    },
  }

  // Related products would also come from a database or API
  const relatedProducts = [
    { id: "3", name: "Corona Extra", price: 5.49, image: "/placeholder.svg?height=200&width=200" },
    { id: "4", name: "Stella Artois", price: 4.79, image: "/placeholder.svg?height=200&width=200" },
    { id: "5", name: "Budweiser", price: 3.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Back to products</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
          <div className="relative h-64 w-64">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center mb-6">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="mx-4 w-8 text-center text-lg">1</span>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button size="lg" className="w-full mb-4">
            Add to Cart
          </Button>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(product.details).map(([key, value]) => (
                      <div key={key}>
                        <dt className="font-medium capitalize">{key}</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="nutrition" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Nutritional Information</h3>
                  <p className="text-sm text-gray-600 mb-3">Per 100ml</p>
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between py-1">
                      <dt>Energy</dt>
                      <dd className="text-gray-600">42 kcal</dd>
                    </div>
                    <div className="flex justify-between py-1">
                      <dt>Carbohydrates</dt>
                      <dd className="text-gray-600">3.2g</dd>
                    </div>
                    <div className="flex justify-between py-1">
                      <dt>Protein</dt>
                      <dd className="text-gray-600">0.4g</dd>
                    </div>
                    <div className="flex justify-between py-1">
                      <dt>Fat</dt>
                      <dd className="text-gray-600">0g</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-colors">
                <div className="relative h-32 w-32">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
