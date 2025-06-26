import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const roundedEdgeVariants = cva("w-5 h-5 shrink-0", {
  variants: {
    position: {
      "top-left": "rotate-270",
      "top-right": "rotate-180",
      "bottom-right": "rotate-270",
      "bottom-left": "rotate-180",
    },
  },
  defaultVariants: {
    position: "top-left",
  },
});

interface RoundedEdgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof roundedEdgeVariants> {
  fill?: string;
}

const RoundedEdge = React.forwardRef<HTMLDivElement, RoundedEdgeProps>(
  ({ className, position, fill = "currentColor", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(roundedEdgeVariants({ position, className }))}
        {...props}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M20 20V0C20 11.0457 11.0457 20 0 20H20Z" fill={fill} />
        </svg>
      </div>
    );
  }
);

RoundedEdge.displayName = "RoundedEdge";

export { RoundedEdge, roundedEdgeVariants };
