import HeroBannerSection from "@/components/sections/hero-banner-section";
import BenefitsSection from "@/components/sections/benefits-section";
import AboutSection from "@/components/sections/about-section";
import CollectionsSection from "@/components/sections/collections-section";
import FavoritesSection from "@/components/sections/favorites-section";

export default function Home() {
  return (
    <div className="space-y-3 max-md:mt-0 mt-[12px]">
      <HeroBannerSection />
      <BenefitsSection />
      <FavoritesSection />
      <CollectionsSection />
      <AboutSection />
    </div>
  );
}
