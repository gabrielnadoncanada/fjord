import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 rounded-md px-6 py-4 text-[15px] leading-[1.6] font-normal transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white border border-gray-200 text-gray-900 placeholder:text-gray-900",
        muted: "bg-gray-100 border-0 text-gray-900 placeholder:text-gray-900",
        inverse: "bg-dark-surface border-0 text-white placeholder:text-white",
      },
      inputSize: {
        default: "h-14",
        sm: "h-9 px-3 text-sm",
        lg: "h-16 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

function Input({ className, variant, inputSize, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, inputSize, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
