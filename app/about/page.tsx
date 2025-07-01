import { ArrowDown } from "lucide-react";
import { TwoColumnLayout } from "@/components/layout/two-column-layout";
import { HeroContentSection } from "@/components/sections/hero-content-section";
import { ContentSectionsContainer } from "@/components/sections/content-sections-container";
import { TextContentSection } from "@/components/sections/text-content-section";
import { TeamSection, TeamMember } from "@/components/sections/team-section";
import BrandSlider from "@/components/sections/brand-slider";

const teamMembers: TeamMember[] = [
  {
    id: "erik-jansen",
    name: "Erik Jansen",
    image: "/images/about-image-2.jpg",
    role: "Head of Design",
    socials: true,
  },
  {
    id: "ingrid-dahl",
    name: "Ingrid Dahl",
    image: "/images/about-image-1.jpg",
  },
  {
    id: "lars-nielsen",
    name: "Lars Nielsen",
    image: "/images/about-image-2.jpg",
  },
  {
    id: "freja-lindberg",
    name: "Freja Lindberg",
    image: "/images/about-image-1.jpg",
  },
];

const missionParagraphs = [
  "Decluttering begins with the act of letting go. It's about freeing ourselves from the weight of excess possessions that no longer serve us. By evaluating each item and asking ourselves whether it brings us joy or serves a practical purpose, we can make mindful decisions about what to keep and what to release. Letting go of the unnecessary allows us to create a physical and mental space that promotes clarity and tranquility.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lorem quis pretium posuere. Nam gravida orci in massa convallis vestibulum. Sed venenatis hendrerit gravida. In nec lectus diam. Sed tellus justo, aliquam id eros sit amet, condimentum ullamcorper justo. In lacinia, purus ut congue pharetra, elit sapien aliquam turpis, non viverra dui ante id orci. Nam laoreet ornare urna, in varius nibh finibus sit amet. Quisque sed.",
];

export default function AboutPage() {
  return (
    <TwoColumnLayout
      leftImage={{
        src: "/images/about-image-1.jpg",
        alt: "About us",
        width: 2159,
        height: 1080,
      }}
    >
      {/* Hero Section */}
      <HeroContentSection
        title="Things to Look for When Comparing Branding Alternatives"
        description="Scandinavian design emphasizes simplicity, natural light, and clean lines. Explore how this minimalist style can transform your home into a calming, functional space that's both stylish and inviting."
        buttonText="Explore"
        buttonIcon={ArrowDown}
        additionalContent={<BrandSlider />}
      />

      {/* Content Sections */}
      <ContentSectionsContainer>
        <TextContentSection
          title="Our Mission"
          heading="The Liberating Power of Minimalism"
          paragraphs={missionParagraphs}
        />

        <TeamSection title="Our Team" members={teamMembers} gridCols={2} />
      </ContentSectionsContainer>
    </TwoColumnLayout>
  );
}
