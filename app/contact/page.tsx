import { TwoColumnLayout } from "@/components/layout/two-column-layout";
import { ContactForm } from "@/components/sections/contact-form";
import { StoreLocations } from "@/components/sections/store-locations";

export default function ContactPage() {
  return (
    <TwoColumnLayout
      leftImage={{
        src: "/images/commercial-build-out.webp",
        alt: "Contact us",
        width: 1124,
        height: 1124,
      }}
    >
      <div className="flex flex-col gap-3">
        <ContactForm />
        <StoreLocations />
      </div>
    </TwoColumnLayout>
  );
}
