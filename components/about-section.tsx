import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col">
      {/* Header Card */}
      <SectionHeader title="About Us" />

      {/* Main Grid */}
      <div className="flex flex-wrap  gap-3 w-full">
        {/* Content Card */}
        <Card className="flex-[1_0_350px] max-w-full w-full flex flex-col justify-between p-8 md:p-16 bg-secondary border-none rounded-xl  lg:min-h-[600px] gap-32">
          <h3 className="text-[28px] font-normal text-foreground leading-[1.3] max-w-md">
            Designing Spaces, <br />
            Inspiring Connection
          </h3>

          <div className="flex flex-col gap-12">
            <p className="text-[15px] font-normal text-[rgba(14,16,17,0.6)] leading-[1.6] max-w-md">
              At Hanssen, our mission is to create furniture that brings people
              together, inspired by the simplicity and warmth of Scandinavian
              design.
            </p>

            <Button variant="text-default" className="mr-auto">
              More About Us
            </Button>
          </div>
        </Card>

        {/* Image Wrapper */}
        <div className="flex-[2_0_500px] max-w-full w-full bg-muted-2 rounded-xl relative overflow-hidden lg:min-h-[600px]">
          <Image
            src="/images/about-image-2.jpg"
            alt="Creative Professional Collaboration"
            width={1419}
            height={710}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
