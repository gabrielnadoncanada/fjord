import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full flex flex-col gap-3 mt-3">
      {/* Social Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="bg-muted rounded-xl p-6 flex items-center justify-between">
          <span className="text-navbar font-normal text-foreground">
            Twitter
          </span>
          <Image
            src="/icons/twitter-logo.svg"
            alt="Twitter"
            width={20}
            height={20}
            className="text-foreground"
          />
        </div>

        <div className="bg-muted rounded-xl p-6 flex items-center justify-between">
          <span className="text-navbar font-normal text-foreground">
            Instagram
          </span>
          <Image
            src="/icons/instagram-logo.svg"
            alt="Instagram"
            width={20}
            height={20}
            className="text-foreground"
          />
        </div>

        <div className="bg-muted rounded-xl p-6 flex items-center justify-between">
          <span className="text-navbar font-normal text-foreground">
            Pinterest
          </span>
          <Image
            src="/icons/pinterest-logo.svg"
            alt="Pinterest"
            width={20}
            height={20}
            className="text-foreground"
          />
        </div>

        <div className="bg-muted rounded-xl p-6 flex items-center justify-between">
          <span className="text-sm font-normal text-foreground">Behance</span>
          <Image
            src="/icons/behance-logo.svg"
            alt="Behance"
            width={20}
            height={20}
            className="text-foreground"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        {/* Footer Main */}
        <div className="bg-foreground text-white rounded-xl p-10 lg:p-16 flex-1 ">
          <div className="flex flex-col md:flex-row gap-16 justify-between">
            {/* Left Column - Brand & Description */}
            <div className="flex flex-col gap-17">
              <div className="flex flex-col gap-4">
                {/* Logo */}
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/logo-minimal-light.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                  Scandinavian furniture, meticulously handcrafted to bring
                  warmth and elegance into your home.
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="bg-white text-foreground hover:bg-white/90 w-fit"
                >
                  More Templates
                </Button>
                <p className="text-white/60 text-sm">
                  © Made by Gola Templates
                </p>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="flex justify-between gap-y-10 sm:gap-x-20">
              {/* Pages Column */}
              <div className="flex flex-col gap-8">
                <h3 className="text-white text-base font-normal">Pages</h3>
                <nav className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Licensing
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    404
                  </a>
                </nav>
              </div>

              {/* Help Column */}
              <div className="flex flex-col gap-8">
                <h3 className="text-white text-base font-normal">Help</h3>
                <nav className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </nav>
              </div>

              {/* CMS Column */}
              <div className="flex flex-col gap-8">
                <h3 className="text-white text-base font-normal">CMS</h3>
                <nav className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Shop
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Shop Product
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Shop Category
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-white/60 text-nav hover:text-white transition-colors"
                  >
                    Blog Post
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-foreground text-white rounded-xl p-10 lg:p-12 w-full lg:w-[465px] flex flex-wrap lg:flex-col gap-10 lg:gap-24 justify-between">
          <h2 className="text-white text-2xl font-normal max-lg:flex-[1_0_200px]">
            Join our newsletter and get 20% off your first purchase
          </h2>

          <div className="flex flex-col gap-3 max-lg:flex-[1_0_200px]">
            <Input
              type="email"
              placeholder="email@example.com"
              variant="inverse"
              className="w-full"
            />
            <Button className="bg-white text-foreground hover:bg-white/90 py-2.5 px-3.5 rounded">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
