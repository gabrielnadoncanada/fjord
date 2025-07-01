import { Card, CardContent } from "@/components/ui/card";
import { Corner } from "@/components/ui/corner";
import { RoundedEdge } from "@/components/ui/rounded-edge";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  tag?: {
    text: string;
  };
  children?: ReactNode;
  inversed?: boolean;
}

export default function ProductCard({
  id,
  name,
  image,
  subtitle,
  tag,
  children,
  inversed,
}: ProductCardProps) {
  return (
    <Card className="bg-background border-0 overflow-hidden relative h-[600px] rounded-xl">
      <CardContent className="p-0 relative h-full">
        <Image src={image} alt={name} fill className="object-cover" />

        <div className="absolute top-0 left-0 z-10">
          <RoundedEdge
            position="top-right"
            fill="white"
            className="absolute top-0 -right-5"
          />
          <Corner position="top-left">{subtitle}</Corner>
          <RoundedEdge
            position="bottom-left"
            fill="white"
            className="absolute -bottom-5 left-0"
          />
        </div>

        {tag && (
          <div className="absolute top-5 right-5 z-10">
            <div
              className={`px-2 py-1.5 rounded text-xs font-normal bg-foreground text-background`}
            >
              {tag.text}
            </div>
          </div>
        )}

        {children && (
          <div
            className={`absolute bottom-3 left-3 right-3 ${
              inversed ? "bg-white text-black" : "bg-black text-white"
            } p-6 rounded-[10px] flex justify-between items-center`}
          >
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
