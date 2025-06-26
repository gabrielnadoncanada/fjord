import HeroBannerSection from "@/components/hero-banner-section";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import CollectionsSection from "@/components/collections-section";
import FavoritesSection from "@/components/favorites-section";

export default function Home() {
  return (
    <div className="space-y-3">
      <HeroBannerSection />
      <BenefitsSection />
      <FavoritesSection />
      <CollectionsSection />

      <AboutSection />
    </div>
  );
}
