import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RoundedEdge } from "@/components/ui/rounded-edge";
import ToggleMenu from "./toggle-menu";
import { Switch } from "@/components/ui/switch";

export function UserActions({ handleToggle }: { handleToggle: () => void }) {
  return (
    <div className="flex items-center justify-end gap-2.5 px-4 pt-1.5 pb-1.5 md:pb-3.5 bg-white rounded-bl-[20px] relative">
      <div className="flex items-center justify-end gap-2.5 hidden">
        <Switch id="airplane-mode" className="hidden md:block" />

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
      <ToggleMenu handleToggle={handleToggle} />
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
  );
}
