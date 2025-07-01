import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigation = [
  {
    title: "Pages",
    children: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Login",
        href: "/login",
      },
      {
        title: "Licensing",
        href: "/licensing",
      },
      {
        title: "404",
        href: "/404",
      },
    ],
  },
  {
    title: "Help",
    children: [
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Terms",
        href: "/terms",
      },
    ],
  },
  {
    title: "CMS",
    children: [
      {
        title: "Shop",
        href: "/shop",
      },
      {
        title: "Shop Product",
        href: "/shop-product",
      },
      {
        title: "Shop Category",
        href: "/shop-category",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Blog Post",
        href: "/blog-post",
      },
    ],
  },
];

export function FooterMain() {
  return (
    <div className="bg-foreground text-white rounded-xl p-10 lg:p-16 flex-1 ">
      <div className="flex flex-col md:flex-row gap-16 justify-between">
        <div className="flex flex-col gap-17">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <Image
                src="/logo-minimal-light.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
              Entrepreneur général pour les services de construction
              résidentielle, commerciale et de récupération après sinistre.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="bg-white text-foreground hover:bg-white/90 w-fit"
            >
              More Templates
            </Button>
            <p className="text-white/60 text-sm">© Made by Gola Templates</p>
          </div>
        </div>

        <div className="flex justify-between gap-y-10 sm:gap-x-20">
          {navigation.map((item) => (
            <div className="flex flex-col gap-8">
              <h3 className="text-white text-base font-normal">{item.title}</h3>
              <nav className="flex flex-col gap-3">
                {item.children.map((child) => (
                  <a
                    href={child.href}
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    {child.title}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
