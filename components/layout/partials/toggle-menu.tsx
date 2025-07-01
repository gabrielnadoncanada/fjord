"use client";

import { useState } from "react";

export default function ToggleMenu({
  className,
  handleToggle,
}: {
  className?: string;
  handleToggle: () => void;
}) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`justify-center items-center w-10 h-10 flex p-0 rounded-[8px] bg-foreground cursor-pointer ${className}`}
      onClick={() => {
        setIsToggled(!isToggled);
        handleToggle();
      }}
    >
      <div className="w-4 h-[10px] relative rounded-lg">
        <div
          className="bg-white top-0 w-4 h-0.5 absolute transition-transform duration-300 ease-in-out"
          style={{
            transform: isToggled
              ? "translate3d(0px, 4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>
        <div
          className="-mt-px bg-white bottom-0 w-4 h-0.5 absolute transition-transform duration-300 ease-in-out"
          style={{
            transform: isToggled
              ? "translate3d(0px, -4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>
      </div>
    </div>
  );
}
