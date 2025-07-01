import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface HeroContentSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonIcon?: LucideIcon;
  onButtonClick?: () => void;
  additionalContent?: ReactNode;
  className?: string;
}

export function HeroContentSection({
  title,
  description,
  buttonText = "Explore",
  buttonIcon: ButtonIcon,
  onButtonClick,
  additionalContent,
  className = "",
}: HeroContentSectionProps) {
  return (
    <div
      className={`flex flex-col justify-center gap-3 py-3 min-h-screen ${className}`}
    >
      {/* Main Hero Card */}
      <Card className="bg-gray-100 border-0 flex-1">
        <CardContent className="p-20 h-full flex flex-col justify-between gap-y-32">
          <h2 className="text-[40px] leading-[1.2] font-normal text-black max-w-[600px]">
            {title}
          </h2>
          <div className="space-y-12">
            <p className="text-base leading-[1.6] text-black/60 max-w-[600px]">
              {description}
            </p>
            {buttonText && (
              <Button
                variant="default"
                className="bg-black text-white hover:bg-black/90 rounded px-4 py-2 text-sm"
                onClick={onButtonClick}
              >
                {buttonText}
                {ButtonIcon && <ButtonIcon className="ml-1 h-3.5 w-3.5" />}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Additional Content (e.g., Brand Slider) */}
      {additionalContent}
    </div>
  );
}
