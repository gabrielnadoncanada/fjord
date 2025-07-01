"use client";
import React, { useState } from "react";
import { useHeaderVisibility } from "@/hooks/use-header-visibility";
import { DesktopNavigation } from "./partials/desktop-navigation";
import { UserActions } from "./partials/user-actions";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RoundedEdge } from "../ui/rounded-edge";
import { MobileNavigation } from "./partials/mobile-navigation";

export function Header() {
  const pathname = usePathname();
  const { setHeaderRef } = useHeaderVisibility(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      ref={setHeaderRef}
      style={{
        transform: "translateY(0)",
      }}
      className="w-ful mx-auto fixed left-3 right-3 z-50"
    >
      <div className="h-3 bg-white w-full relative "></div>

      <div className="flex max-md:bg-white justify-between items-stretch md:gap-16 ">
        <div className="flex items-center gap-[30px] px-5 max-md:pr-0 pt-1.5 pb-1.5 md:pb-3.5 bg-white rounded-br-[20px] relative">
          <div className="flex items-center gap-1.5">
            <Image
              src="/logo-minimal.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <DesktopNavigation />
          <MobileNavigation isOpen={isOpen} />
          <RoundedEdge
            position="bottom-left"
            fill="white"
            className="absolute -bottom-5 left-0 z-[100]"
          />
          <RoundedEdge
            position="top-right"
            fill="white"
            className="absolute top-0 -right-5 z-[100]"
          />
        </div>

        <UserActions handleToggle={handleToggle} />
      </div>
    </header>
  );
}
