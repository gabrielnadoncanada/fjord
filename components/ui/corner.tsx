import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const cornerVariants = cva(
  "inline-flex items-center gap-1.5 bg-background text-foreground text-[15px] font-normal leading-none relative overflow-hidden",
  {
    variants: {
      position: {
        "top-left": "rounded-br-[20px] px-4 pt-2 pb-3",
        "top-right": "rounded-bl-[20px] px-4 pt-2 pb-3",
        "bottom-left": "rounded-tr-[20px] px-4 pt-3 pb-2",
        "bottom-right": "rounded-tl-[20px] px-4 pt-3 pb-2",
      },
    },
    defaultVariants: {
      position: "top-left",
    },
  }
);

interface CornerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cornerVariants> {
  children: React.ReactNode;
  icon?: boolean;
}

const Corner = React.forwardRef<HTMLDivElement, CornerProps>(
  ({ className, position, children, icon = false, ...props }, ref) => {
    const getIcon = () => {
      if (!icon) return null;

      const iconProps = {
        size: 14,
        className: "shrink-0",
      };

      switch (position) {
        case "top-left":
        case "bottom-left":
          return <ChevronRight {...iconProps} />;
        case "top-right":
        case "bottom-right":
          return <ChevronLeft {...iconProps} />;
        default:
          return <ChevronRight {...iconProps} />;
      }
    };

    const iconElement = getIcon();
    const shouldIconFirst =
      position === "top-right" || position === "bottom-right";

    return (
      <div
        ref={ref}
        className={cn(cornerVariants({ position, className }))}
        {...props}
      >
        {shouldIconFirst && iconElement}
        <span className="whitespace-nowrap">{children}</span>
        {!shouldIconFirst && iconElement}

        {/* Rounded corner decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {position === "top-left" && (
            <>
              <div className="absolute -right-5 top-0 w-5 h-5 bg-background rounded-bl-[20px]" />
              <div className="absolute left-0 -bottom-5 w-5 h-5 bg-background rounded-tr-[20px]" />
            </>
          )}
          {position === "top-right" && (
            <>
              <div className="absolute -left-5 top-0 w-5 h-5 bg-background rounded-br-[20px]" />
              <div className="absolute right-0 -bottom-5 w-5 h-5 bg-background rounded-tl-[20px]" />
            </>
          )}
          {position === "bottom-left" && (
            <>
              <div className="absolute left-0 -top-5 w-5 h-5 bg-background rounded-br-[20px]" />
              <div className="absolute -right-5 bottom-0 w-5 h-5 bg-background rounded-tl-[20px]" />
            </>
          )}
          {position === "bottom-right" && (
            <>
              <div className="absolute right-0 -top-5 w-5 h-5 bg-background rounded-bl-[20px]" />
              <div className="absolute -left-5 bottom-0 w-5 h-5 bg-background rounded-tr-[20px]" />
            </>
          )}
        </div>
      </div>
    );
  }
);

Corner.displayName = "Corner";

export { Corner, cornerVariants };
