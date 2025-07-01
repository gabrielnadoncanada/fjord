import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    image: "/images/about-image-1.jpg",
    imageAlt: "Hero banner",
    title: "Construction\n Résidentielle",
    description:
      "Rénovations complètes de maisons, rallonges, rénovations de cuisines et salles de bain, et plus encore.",
    buttonText: "En savoir plus",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image: "/images/commercial-build-out.webp",
    imageAlt: "Hero banner",
    title: "Modern Design,\nTimeless Appeal",
    description:
      "Experience the perfect blend of contemporary aesthetics and traditional craftsmanship in every piece.",
    buttonText: "Explore Collection",
    buttonLink: "/shop",
  },
  {
    id: 3,
    image: "/images/hero-banner-bg.jpg",
    imageAlt: "Hero banner",
    title: "Sustainable Living,\nBeautiful Spaces",
    description:
      "Choose furniture that not only looks great but also supports sustainable and ethical manufacturing practices.",
    buttonText: "Learn More",
    buttonLink: "/shop",
  },
];

export default function HeroBannerSection() {
  return (
    <Carousel className="w-full h-[calc(100vh-24px)]">
      <CarouselContent>
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative w-full h-[calc(100vh-24px)] rounded-xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

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

                    <Link href={slide.buttonLink}>
                      <Button variant="text-default" className="mr-auto">
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

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
