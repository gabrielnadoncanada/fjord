import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  return (
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
  );
} 