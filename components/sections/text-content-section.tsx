import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/sections/partials/section-header";

interface TextContentSectionProps {
  title: string;
  heading: string;
  paragraphs: string[];
  className?: string;
}

export function TextContentSection({
  title,
  heading,
  paragraphs,
  className = "",
}: TextContentSectionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <SectionHeader title={title} />

      <Card className="bg-gray-100 border-0">
        <CardContent className="p-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[32px] leading-[1.2] font-normal text-black">
                {heading}
              </h4>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] leading-[1.6] text-black/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
