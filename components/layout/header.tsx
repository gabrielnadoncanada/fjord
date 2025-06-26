"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { RoundedEdge } from "@/components/ui/rounded-edge";
import { useHeaderVisibility } from "@/hooks/use-header-visibility";
import ToggleMenu from "../toggle-menu";

export function Header() {
  const { setHeaderRef } = useHeaderVisibility();

  return (
    <header
      ref={setHeaderRef}
      className="w-ful mx-auto fixed left-3 right-3 z-50"
    >
      {/* Top white bar */}
      <div className="h-3 bg-white w-full relative "></div>

      {/* Main header */}
      <div className="flex max-md:bg-white justify-between items-stretch md:gap-16 ">
        {/* Left section */}
        <div className="flex items-center gap-[30px] px-5 max-md:pr-0 pt-1.5 pb-1.5 md:pb-3.5 bg-white rounded-br-[20px] relative">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <Image
              src="/logo-minimal.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem>
                <Link href="/shop" passHref>
                  <NavigationMenuLink className="bg-transparent hover:bg-transparent p-0">
                    Shop
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/collections/furniture"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Furniture
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover our curated collection of modern furniture
                            pieces.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-normal bg-transparent hover:bg-transparent p-0 gap-1">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[300px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/story"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Our Story
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our journey and mission.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/team"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Our Team
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Meet the people behind Fjord.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" passHref>
                  <NavigationMenuLink className="font-normal  bg-transparent hover:bg-transparent p-0 ">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Switch id="airplane-mode" className="hidden md:block" />

          {/* Rounded edges */}
          <RoundedEdge
            position="bottom-left"
            fill="white"
            className="absolute -bottom-5 left-0"
          />
          <RoundedEdge
            position="top-right"
            fill="white"
            className="absolute top-0 -right-5"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end gap-2.5 px-4 pt-1.5 pb-1.5 md:pb-3.5 bg-white rounded-bl-[20px] relative">
          <div className="flex items-center justify-end gap-2.5   ">
            <Button
              variant="ghost"
              size="sm"
              className="p-0 w-4 h-4 hover:bg-transparent"
            >
              <Image
                src="/icons/magnifying-glass.svg"
                alt="Search"
                width={16}
                height={16}
                className="opacity-70 hover:opacity-100"
              />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="p-0 w-4 h-4 hover:bg-transparent"
            >
              <Image
                src="/icons/user.svg"
                alt="User"
                width={16}
                height={16}
                className="opacity-70 hover:opacity-100"
              />
            </Button>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="p-0 w-4 h-4 hover:bg-transparent"
              >
                <Image
                  src="/icons/shopping-cart.svg"
                  alt="Cart"
                  width={16}
                  height={16}
                  className="opacity-70 hover:opacity-100"
                />
              </Button>
              <span className="text-foreground text-[15px] leading-[0.9] font-normal ">
                (0)
              </span>
            </div>
          </div>
          <ToggleMenu />
          {/* Rounded edges */}
          <RoundedEdge
            position="top-left"
            fill="white"
            className="absolute top-0 -left-5"
          />
          <RoundedEdge
            position="bottom-right"
            fill="white"
            className="absolute -bottom-5 right-0"
          />
        </div>
      </div>
    </header>
  );
}
