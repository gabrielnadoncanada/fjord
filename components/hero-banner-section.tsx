import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

// Sample data for multiple slides - you can replace this with your actual data
const heroSlides = [
  {
    id: 1,
    image: "/images/hero-banner-bg.jpg",
    title: "Crafting Comfort,\nInspired by the North",
    description:
      "Discover timeless Scandinavian furniture, meticulously handcrafted to bring warmth and elegance into your home.",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "/images/hero-banner-bg.jpg", // You can add more images here
    title: "Modern Design,\nTimeless Appeal",
    description:
      "Experience the perfect blend of contemporary aesthetics and traditional craftsmanship in every piece.",
    buttonText: "Explore Collection",
  },
  {
    id: 3,
    image: "/images/hero-banner-bg.jpg", // You can add more images here
    title: "Sustainable Living,\nBeautiful Spaces",
    description:
      "Choose furniture that not only looks great but also supports sustainable and ethical manufacturing practices.",
    buttonText: "Learn More",
  },
];

export default function HeroBannerSection() {
  return (
    <Carousel className="w-full h-[calc(100vh-24px)]">
      <CarouselContent>
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative w-full h-[calc(100vh-24px)] rounded-xl overflow-hidden bg-gray-200">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt="Hero banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Card */}
              <div className="absolute bottom-5 md:bottom-10 max-md:right-5 left-5 md:left-10">
                <Card className="w-full md:w-[400px] bg-white rounded-[10px] border-0 shadow-lg py-0">
                  <CardContent className="p-8 md:p-10 space-y-8">
                    <div className="space-y-2">
                      <h1 className="text-[32px] font-normal leading-[1.2] text-foreground font-['DM_Sans'] whitespace-pre-line">
                        {slide.title}
                      </h1>
                      <p className="text-base font-normal leading-[1.6] text-foreground/60 font-['DM_Sans']">
                        {slide.description}
                      </p>
                    </div>

                    {/* Shop Now Button */}
                    <Button variant="text-default" className="mr-auto">
                      {slide.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Custom styled navigation arrows to match Figma design */}
      <CarouselPrevious className="absolute top-1/2 left-5 md:left-10 transform -translate-y-1/2 w-10 h-10 bg-black/30 border-0 rounded backdrop-blur-sm cursor-pointer hover:!bg-white text-white transition-colors">
        <Image
          src="/icons/arrow-left.svg"
          alt="Previous"
          width={18}
          height={18}
          className="text-white"
        />
      </CarouselPrevious>

      <CarouselNext className="absolute top-1/2 right-5 md:right-10 transform -translate-y-1/2 w-10 h-10 bg-black/30 border-0 rounded backdrop-blur-sm cursor-pointer hover:!bg-white text-white transition-colors">
        <Image
          src="/icons/arrow-right.svg"
          alt="Next"
          width={18}
          height={18}
          className="text-white"
        />
      </CarouselNext>
    </Carousel>
  );
}
