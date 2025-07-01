"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const brands = [
  { name: "Acme", logo: "/images/brands/acme-logo.svg" },
  { name: "Kanba", logo: "/images/brands/kanba-logo.svg" },
  { name: "Goldline", logo: "/images/brands/goldline-logo.svg" },
  { name: "Asgardia", logo: "/images/brands/asgardia-logo.svg" },
  { name: "Utosia", logo: "/images/brands/utosia-logo.svg" },
  { name: "Circle", logo: "/images/brands/circle-logo.svg" },
  // Duplicate for seamless scrolling
  { name: "Acme", logo: "/images/brands/acme-logo.svg" },
  { name: "Kanba", logo: "/images/brands/kanba-logo.svg" },
];

export default function BrandSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Card className="bg-[#0E1011] border-0 relative overflow-hidden">
      <CardContent className="p-3 relative">
        {/* Fade out gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0E1011] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0E1011] to-transparent z-10 pointer-events-none" />

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-[80%] mx-auto"
        >
          <CarouselContent className="-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem
                key={`${brand.name}-${index}`}
                className="pl-4 basis-auto"
              >
                <div className="flex items-center justify-center h-16 px-8">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={25}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}
