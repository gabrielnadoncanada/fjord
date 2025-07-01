import { SectionHeader } from "@/components/sections/partials/section-header";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "./partials/product-card";

interface Product {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  tag?: {
    text: string;
    variant?: "default" | "discount" | "new" | "sale";
  };
}

const products: Product[] = [
  {
    id: "scala",
    name: "Scala",
    image: "/images/favorites-chair-1.jpg",
    subtitle: "Chair",
    tag: {
      text: "-50%",
      variant: "discount",
    },
  },
  {
    id: "fjord",
    name: "Fjord",
    image: "/images/favorites-chair-2.jpg",
    subtitle: "Chair",
  },
  {
    id: "sona",
    name: "Sona",
    image: "/images/favorites-chair-3.jpg",
    subtitle: "Chair",
    tag: {
      text: "NEW",
      variant: "new",
    },
  },
  {
    id: "alba",
    name: "Alba",
    image: "/images/favorites-chair-4.jpg",
    subtitle: "Chair",
    tag: {
      text: "SALE",
      variant: "sale",
    },
  },
];

export default function FavoritesSection() {
  return (
    <section className="w-full">
      <SectionHeader title="Our Favorites" />

      <div className="w-full">
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="max-w-full sm:max-w-1/2 lg:max-w-1/3 xl:max-w-1/4"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  subtitle={product.subtitle}
                  tag={product.tag}
                >
                  {/* Example slot content - can be customized per product */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-xs opacity-75">In Stock</span>
                  </div>
                </ProductCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
