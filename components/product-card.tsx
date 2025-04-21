import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="relative h-40 bg-gray-100">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-2" />
        </div>
      </Link>
      <CardContent className="p-3">
        <div className="flex flex-col h-full">
          <Link href={`/product/${id}`} className="flex-1">
            <h3 className="font-medium line-clamp-1">{name}</h3>
            <p className="text-xs text-gray-500 mb-2">{description}</p>
          </Link>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold">${price.toFixed(2)}</span>
            <Button size="sm" className="h-8 w-8 p-0 rounded-full">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
