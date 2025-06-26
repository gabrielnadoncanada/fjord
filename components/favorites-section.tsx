import { Card, CardContent } from "@/components/ui/card";
import { Corner } from "@/components/ui/corner";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import { RoundedEdge } from "./ui/rounded-edge";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface Product {
  id: string;
  name: string;
  image: string;
  hasDiscount?: boolean;
  discountText?: string;
}

const products: Product[] = [
  {
    id: "scala",
    name: "Scala",
    image: "/images/favorites-chair-1.jpg",
    hasDiscount: true,
    discountText: "-50%",
  },
  {
    id: "fjord",
    name: "Fjord",
    image: "/images/favorites-chair-2.jpg",
  },
  {
    id: "sona",
    name: "Sona",
    image: "/images/favorites-chair-3.jpg",
  },
  {
    id: "alba",
    name: "Alba",
    image: "/images/favorites-chair-4.jpg",
  },
];

export default function FavoritesSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <SectionHeader title="Our Favorites" />

      {/* Products Grid */}
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="max-w-full sm:max-w-1/2 lg:max-w-1/3 xl:max-w-1/4"
              >
                <Card className="bg-background border-0 overflow-hidden relative h-[600px] rounded-xl">
                  <CardContent className="p-0 relative h-full">
                    {/* Product Image - positioned to extend beyond card boundaries */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />

                    {/* Corner Label */}
                    <div className="absolute top-0 left-0 z-10">
                      <RoundedEdge
                        position="top-right"
                        fill="white"
                        className="absolute top-0 -right-5"
                      />
                      <Corner position="top-left">{product.name}</Corner>
                      <RoundedEdge
                        position="bottom-left"
                        fill="white"
                        className="absolute -bottom-5 left-0"
                      />
                    </div>

                    {/* Discount Label */}
                    {product.hasDiscount && (
                      <div className="absolute top-5 right-5 z-10">
                        <div className="bg-foreground text-background px-2 py-1.5 rounded text-xs font-normal">
                          {product.discountText}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
