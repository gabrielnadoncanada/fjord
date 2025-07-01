import { Card, CardContent } from "@/components/ui/card";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <Card className={`bg-secondary border-0 p-0 mb-3 ${className}`}>
      <CardContent className="text-center p-6">
        <h2 className="text-default font-normal text-foreground leading-[0.9em]">
          {title}
        </h2>
      </CardContent>
    </Card>
  );
}
