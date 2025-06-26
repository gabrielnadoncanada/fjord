import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

interface Collection {
  id: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  buttonText: string;
  layout: "large" | "card";
  textColor: string;
  bgColor: string;
  descriptionColor: string;
}

const collections: Collection[] = [
  {
    id: "wood",
    title: "Wood",
    description: "Our Wood Collection celebrates the natural beauty of wood.",
    image: "/images/wood-collection-bg.jpg",
    buttonText: "View Collection",
    layout: "large",
    textColor: "text-foreground",
    bgColor: "bg-background",
    descriptionColor: "text-muted-foreground",
  },
  {
    id: "dark",
    title: "Dark",
    description:
      "Refined finishes bring an air of sophistication and drama to any room.",
    images: [
      "/images/dark-collection-chair-1.jpg",
      "/images/dark-collection-chair-2.jpg",
    ],
    buttonText: "View Collection",
    layout: "card",
    textColor: "text-background",
    bgColor: "bg-foreground",
    descriptionColor: "text-overlay-light",
  },
  {
    id: "modern",
    title: "Modern",
    description:
      "The Elegance Collection brings together graceful lines and luxurious finishes.",
    images: [
      "/images/modern-collection-chair-1.jpg",
      "/images/modern-collection-chair-2.jpg",
      "/images/modern-collection-chair-3.jpg",
    ],
    buttonText: "View Collection",
    layout: "card",
    textColor: "text-background",
    bgColor: "bg-foreground",
    descriptionColor: "text-overlay-light",
  },
];

export default function CollectionsSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <SectionHeader title="Collections" />

      {/* Collections Grid */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Wood Collection - Large */}
        <div className="flex-1 flex aspect-square">
          <div className="relative flex-1 bg-muted-2 rounded-xl overflow-hidden">
            {collections[0].image && (
              <Image
                src={collections[0].image}
                alt="Wood Collection"
                fill
                className="object-cover w-full h-full"
              />
            )}
            <Card
              className={`w-[250px] ${collections[0].bgColor} border-0 absolute left-5 md:left-8 bottom-5 md:bottom-8`}
            >
              <CardContent className="p-8 space-y-6">
                <h3
                  className={`text-2xl font-normal ${collections[0].textColor}`}
                >
                  {collections[0].title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${collections[0].descriptionColor}`}
                >
                  {collections[0].description}
                </p>
                <Button variant="text-default">
                  {collections[0].buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dark and Modern Collections */}
        <div className="flex-1 space-y-3 flex flex-col">
          {/* Dark Collection */}
          <div className="flex flex-wrap  gap-3 flex-1 ">
            <div className="flex-[4_0_250px] max-w-full bg-muted-2 rounded-xl overflow-hidden relative">
              {collections[1].images?.[1] && (
                <Image
                  src={collections[1].images[1]}
                  alt="Dark Collection Chair 2"
                  width={1259}
                  height={709}
                  className=" object-cover w-full h-full"
                />
              )}
            </div>
            <Card
              className={`flex-[1_0_200px] ${collections[1].bgColor} border-0 shadow-sm`}
            >
              <CardContent className="p-8 md:p-10 h-full flex flex-col items-start gap-y-8">
                <h3
                  className={`text-xl font-normal ${collections[1].textColor}`}
                >
                  {collections[1].title}
                </h3>
                <p
                  className={`text-sm mt-auto leading-relaxed ${collections[1].descriptionColor}`}
                >
                  {collections[1].description}
                </p>
                <Button variant="text-inverse">
                  {collections[1].buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Modern Collection */}
          <div className="flex  max-[500px]:flex-col-reverse flex-wrap gap-3 flex-1 ">
            <Card
              className={`flex-[1_0_200px] ${collections[2].bgColor} border-0 shadow-sm`}
            >
              <CardContent className="p-8 md:p-10 h-full flex flex-col items-start gap-y-8">
                <h3
                  className={`text-xl font-normal ${collections[2].textColor}`}
                >
                  {collections[2].title}
                </h3>
                <p
                  className={`text-sm mt-auto leading-relaxed ${collections[2].descriptionColor}`}
                >
                  {collections[2].description}
                </p>
                <Button variant="text-inverse">
                  {collections[2].buttonText}
                </Button>
              </CardContent>
            </Card>
            <div className="flex-[4_0_250px] max-w-full bg-muted-2 rounded-xl overflow-hidden relative">
              {collections[2].images?.[2] && (
                <Image
                  src={collections[2].images[2]}
                  alt="Modern Collection Chair 3"
                  width={1120}
                  height={558}
                  className=" object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
