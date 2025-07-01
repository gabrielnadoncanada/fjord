import { TwoColumnLayout } from "@/components/layout/two-column-layout";
import { FAQSection } from "@/components/sections";

export default function FAQPage() {
  return (
    <TwoColumnLayout
      leftImage={{
        src: "/images/commercial-build-out.webp",
        alt: "Modern furniture showroom",
        width: 1145,
        height: 1145,
      }}
    >
      <div className="p-3">
        <FAQSection />
      </div>
    </TwoColumnLayout>
  );
}

export const metadata = {
  title: "FAQ - Fjord",
  description:
    "Frequently asked questions about our products, shipping, returns, and more.",
};
