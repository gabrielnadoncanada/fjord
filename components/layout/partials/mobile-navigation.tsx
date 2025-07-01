import { Button } from "@/components/ui/button";
import React from "react";

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

export function MobileNavigation({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`bg-foreground text-white rounded-xl p-8 flex-1 top-[100%]  fixed left-0 right-0 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col justify-between gap-y-10 sm:gap-x-20">
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
  );
}
