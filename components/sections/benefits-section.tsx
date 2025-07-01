import Image from "next/image";

const benefits = [
  {
    icon: "/icons/truck.svg",
    title: "Free Shipping over 500€",
  },
  {
    icon: "/icons/globe-hemisphere-west.svg",
    title: "Worldwide Shipping",
  },
  {
    icon: "/icons/package.svg",
    title: "Free Returns",
  },
  {
    icon: "/icons/chair.svg",
    title: "5-Year Warranty",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-foreground rounded-xl hidden lg:block">
      <div className="flex justify-center items-center gap-16 px-12 py-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src={benefit.icon}
              alt=""
              width={20}
              height={20}
              className="text-white"
            />
            <span className="text-white text-[15px] font-normal leading-[1.6] whitespace-nowrap">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
