import React from "react";
import Image from "next/image";

export function SocialLinks() {
  return (
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
  );
} 