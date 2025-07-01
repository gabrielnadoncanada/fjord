import { ReactNode } from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/sections/partials/section-header";
import ProductCard from "@/components/sections/partials/product-card";

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  role?: string;
  socials?: boolean;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  gridCols?: number;
  className?: string;
}

export function TeamSection({
  title,
  members,
  gridCols = 2,
  className = "",
}: TeamSectionProps) {
  const gridClass = `grid grid-cols-1 md:grid-cols-${gridCols} gap-3`;

  return (
    <div className={`space-y-3 ${className}`}>
      <SectionHeader title={title} />

      <div className={gridClass}>
        {members.map((member) => (
          <ProductCard
            key={member.id}
            id={member.id}
            name={member.name}
            image={member.image}
            subtitle="Team Member"
          >
            {member.role && (
              <div className="flex items-center justify-between w-full">
                <span className="text-[15px] leading-[1.6] text-white">
                  {member.role}
                </span>
                {member.socials && (
                  <div className="flex gap-3">
                    <Instagram className="w-5 h-5 text-white" />
                    <Twitter className="w-5 h-5 text-white" />
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            )}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
