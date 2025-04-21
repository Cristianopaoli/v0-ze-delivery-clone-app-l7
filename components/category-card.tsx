import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  image: string
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  const slug = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/category/${slug}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-4 flex flex-col items-center">
          <div className="relative h-16 w-16 mb-2">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
          <h3 className="text-sm font-medium text-center">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
