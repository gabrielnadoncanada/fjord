import { ReactNode } from "react";
import Image from "next/image";

interface TwoColumnLayoutProps {
  leftImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  children: ReactNode;
  className?: string;
}

export function TwoColumnLayout({
  leftImage,
  children,
  className = "",
}: TwoColumnLayoutProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Left Side - Sticky Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[calc(100vh-24px)] lg:sticky top-[12px]">
          <div className="bg-gray-100 rounded-xl h-full overflow-hidden">
            <Image
              src={leftImage.src}
              alt={leftImage.alt}
              width={leftImage.width || 2159}
              height={leftImage.height || 1080}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="lg:w-1/2 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
